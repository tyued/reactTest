import React from 'react';
import _ from 'lodash';
import * as api from '../../api/base';
import './index.scss';
import { getSortFun } from '../../utils/tools';
import defaultSettings from "../../assets/json/defaultSettings.json";
import Radar from '../../component/echarts/radar'

class Develop extends React.Component {
    state = {
        // classIsPermitted:JSON.parse(window.sessionStorage.getItem('classIsPermitted')),
        // gradeIsPermitted:JSON.parse(window.sessionStorage.getItem('gradeIsPermitted')),
        selTotil:[],                // 统计范围
        rulesInfo:[],               // 获取年级单个体系统计
        curName:'',                 // 当前选中的班级、年级的名称
        activIndex:0,               // 年级班级数组中的下
        radarData:[],               // 雷达图标数据
        isLoad:true,                // 是否加载数据
        dimensionList:[],           // 一级维度明细统计
        isShowAll: false,           // 是否展示全部
        teachGradeList:[],          
        teachClassList:[],
        evlScope:0,                 // 统计范围 0全部  1校级 2非校级   
        visible:false,
        actions: defaultSettings.schoolStatisticsScope,
        curXnXq:{},                 // 当前的学年学期
    }

    componentDidMount() {
        this.init()
    }
    
    shouldComponentUpdate(props,states,content){
        return true;
    }

    init = async () => {
        // 默认统计范围选择全部
        if(this.state.evlScope === 0) {
            let actions = this.state.actions.map((item,index)=>{
                return Object.assign({},item,{'sel':true})
            })
            await this.setState({
                selTotil: actions,
            })
        }
        this.getCurrentXnxq();
        await this.getTeachList();
        this.getDetailInfoByClass();
    }

    getCurrentXnxq = async () => {
        let res = await api.getCurrentXnxq({ xxdm:'1544' })
        this.state.curXnXq = res.data;
    }

    getTeachList = async () => {
        let params = {};
        params.teacherCode = '102';
        let res = await api.getTeacherEvaluationClassList(params);
        if(res.resultCode===1){
            let { teacherGradeList } = res.value;
            this.setState({
                teachGradeList: teacherGradeList,
                curName: teacherGradeList[this.state.activIndex].gradeName
            })
        }
    }

    getDetailInfoByClass = async () => {
        let evlScope = this.state.selTotil.length === 2? 0 : this.state.selTotil[0].id   //0全部  1校级,2非校级
        let params = {
            schoolCode: '1544',
            gradeCode: this.state.teachGradeList[this.state.activIndex].gradeCode,
            begin: this.state.curXnXq.gzkssj,
            end: this.state.curXnXq.gzjssj,
            evlScope: evlScope,
        };
        let [res1,res2,res3] = await Promise.all([
            api.getGradeRulesSummary(params),
            api.getGradeDimensionSummary(params),
            api.getGradeDimensionRadar(params)
        ])
        this.formatData(res1,res2,res3);
    }

    formatData(res1,res2,res3){
        let radarData = [];
        let cArr,gArr;
        let rulesInfo = {};
        if(res1.resultCode === 1){
            rulesInfo = res1.value?res1.value:{}
            let { sevenBefore } = res1.value
            // if(this.isClass){
            //     this.rulesInfo.sevenChangeOrder = this.judgeScore(res1.value)
            //     // (sevenBeforeOrder>=0?"+":"" )+sevenBeforeOrder
            // }else{
            rulesInfo.sevenChange = (sevenBefore>=0?"+":"" )+sevenBefore
            // }
        }
        if(res2.resultCode === 1){
            let dimensionList = res2.value?res2.value:[]
            dimensionList= _.orderBy(dimensionList,['proport'],['asc'])
            dimensionList.forEach(item => {
                let { proport } = item
                proport = proport?proport*100:0
                item.proport = proport.toFixed(2)
            })
        }
        if(res3.resultCode === 1){
            if(res3.value[0].gproport !== undefined){
                cArr = {name:'班级平均',data:[]};
                gArr = {name:'年级平均',data:[]};
            }else{
                cArr = {name:'',data:[]};
            }
            if(!res3.value || !res3.value.length) return
            let sortList = res3.value.sort(getSortFun('proport', "desc"))
            console.log(sortList[0],'@@')
            // let { proport } = sortList[0];
            // proport = proport?proport*100:0
            for(let i=0;i<res3.value.length;i++){
                let itemProport = res3.value[i].proport
                itemProport = itemProport?itemProport*100:0
                itemProport = itemProport.toFixed(2)
                if(res3.value[i].gproport !== undefined){
                    let gradeProport = res3.value[i].gproport
                    gradeProport = gradeProport?gradeProport*100:0
                    gradeProport = gradeProport.toFixed(2)
                    cArr.data.push({
                        tit:'班级平均',
                        text:`${res3.value[i].dimensionName}|比年级|${gradeProport}%`,
                        val:itemProport>=100?100:itemProport<0?0:itemProport,
                        max:100
                    })
                    gArr.data.push({    
                        // text:res3.value[i].dimensionName+'|'+'比班级'+itemProport+'%'+'|'+'比年级'+gradeProport+'%',
                        tit:'年级平均',
                        val:gradeProport>=100?100:gradeProport<0?0:gradeProport,
                        max:100
                    })
                }else{
                    cArr.data.push({
                        tit:'班级平均',
                        text:res3.value[i].dimensionName+'|'+itemProport,
                        val:itemProport>=100?100:itemProport<0?0:itemProport,
                        max:100
                    })
                }
                
                // this.radarData.push({
                //     text:res3.value[i].dimensionName+'|'+itemProport,
                //     val:itemProport,
                //     max:proport<100?100:proport
                //     // max:100
                // })
                
               
            }
            if(res3.value[0].gproport !== undefined){
                radarData = [cArr,gArr];
            }else{
                radarData = [cArr];
            }
        }
        this.setState({rulesInfo,radarData})
        console.log(this.state,'develop的this.state')
    }
    
    render() {
        console.log('渲染时间:',(new Date()).valueOf());
        return (
            <div className={["developMain container",this.props.className].join(' ')}>
                <div className="title">
                    学生发展核心素养总览
                </div>
                <div className="tabBox mt30">
                    {this.state.teachGradeList.map((item,index) => {
                        return (
                            <div className={["tab",index === this.state.activIndex?'activ':null].join(' ')} key={item.gradeCode}>{item.gradeName}</div>
                        )
                    })}
                </div>
                <div className="summaryRange clearfix mt10">
                    <p>统计范围：
                        {this.state.selTotil.map((item) => {
                            return (
                                <span key={item.name}>{item.name}</span>
                            )
                        })}
                    </p>
                    <div className="switch">切换</div>
                </div>

                <div className="summaryTxt mt40">
                    {this.state.curName}平均得分{this.state.rulesInfo.avgFraction}，总分{this.state.rulesInfo.totalDimensionFraction}，与上周比<span className={this.state.rulesInfo.sevenChangeOrder>=0?'up':'down'}>{this.state.rulesInfo.sevenChange}</span>
                </div>

                <div className="title mt50">一级维度得分占比</div>
                <div className="echartBox">
                    <Radar radarData={this.state.radarData} size={['50%','55%','45%']} multiple={true}></Radar>
                </div>

                <div className="title mt50">明细统计</div>
                <div className="dimensionDetail"></div>
                
            </div>
        );
    }
}

export default Develop
