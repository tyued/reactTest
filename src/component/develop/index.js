import React from 'react';
import * as api from '../../api/base';
import './index.scss';
import defaultSettings from "../../assets/json/defaultSettings.json"

class Develop extends React.Component {
    state = {
        // classIsPermitted:JSON.parse(window.sessionStorage.getItem('classIsPermitted')),
        // gradeIsPermitted:JSON.parse(window.sessionStorage.getItem('gradeIsPermitted')),
        selTotil:[],                // 统计范围
        rulesInfo:[],               // 获取年级单个体系统计
        curName:'',
        activIndex:0,
        radarData:[],               // 雷达图标数据
        isLoad:true,                // 是否加载数据
        dimensionList:[],           // 一级维度明细统计
        isShowAll: false,           // 是否展示全部
        teachGradeList:[],          
        teachClassList:[],
        evlScope:0,                 // 统计范围 0全部  1校级 2非校级   
        visible:false,
        actions: defaultSettings.schoolStatisticsScope,
    }

    componentDidMount() {
        this.init()
    }

    init = () => {

        // 默认统计范围选择全部
        if(this.state.evlScope == 0) {
            let actions = this.state.actions.map((item,index)=>{
                return Object.assign({},item,{'sel':true})
            })
            this.setState({
                selTotil: actions,
            })
        }

        this.getTeachList();
    }

    getTeachList = async () => {
        let params = {};
        params.teacherCode = '102';
        let res = await api.getTeacherEvaluationClassList(params);
        if(res.resultCode==1){
            console.log(res.value,'res.value')
            let {teacherGradeList, classEvaluationVOList} = res.value;
            this.setState({
                teachGradeList: teacherGradeList
            })
        }
    }
    


    render() {
        console.log('渲染时间:',(new Date()).valueOf());
        return (
            <div className={["developMain container",this.props.className].join(' ')}>
                <div className="title">
                    学生发展核心素养总览
                </div>
                <div className="tabBox mt30">
                    {this.state.teachGradeList.map((item) => {
                        return (
                            <div className="tab" key={item.gradeCode}>{item.gradeName}</div>
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
                

            </div>
        );
    }
}

export default Develop
