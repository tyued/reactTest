import React from 'react';
import './index.scss';
import * as api from '../../api/base';
import { getSelTimeArea } from '../../utils/tools';
// import toast from '../../component/toast/toast';

class Summary extends React.Component{

    state = {
        timeSel:0,              // 选择的时间范围  0：7天 1：15天  2：30天
        isLoad:false,           // 是否读取数据中
        teacherJoinNum:0,       // 教师参与数
        teacherNum:0,           // 教师总数
        studentJoinNum:0,       // 学生参与数
        studentNum:0,           // 学生总数
        teacherChange:0,        // 教师7天变化度
        studentChange:0,        // 学生7天变化度
        timeInfo:{0: 7, 1: 15, 2: 30},
        a:1,
        b:2,
    }
    userInfo = JSON.parse(window.sessionStorage.getItem('userinfo'));

    componentDidMount(){
        // console.log('这里是summary初始化')
        this.init();
    }
    
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }

    init(){
        this.getInitData();
    }

    getInitData = async (index) => {
        let timeInfo = getSelTimeArea(index||0)
        let params = {
            schoolCode: this.userInfo.xxdm,
            begin: timeInfo.begin,
            end: timeInfo.end
        };
        // console.log(timeInfo,'timeInfo---summary')
        let [res1, res2] = await Promise.all([
            api.getTeacherJionAnalysis(params),
            api.getStudentJionAnalysis({...params, gradeCode:''})
        ])
        
        if(res1.resultCode===1 && res2.resultCode===1){
            let { sevenBefore, joinCount, teacherCount } = res1.value
            let { studentCount } = res2.value
            
            this.setState({
                timeSel:index||0,
                teacherJoinNum: joinCount,
                teacherNum: teacherCount,
                teacherChange: sevenBefore>=0?'+'+sevenBefore:sevenBefore,
                studentJoinNum: res2.value.joinCount,
                studentNum: studentCount,
                studentChange: sevenBefore>=0?'+'+sevenBefore:sevenBefore
            });
        }
    }

    render(){
        // console.log('渲染时间:',(new Date()).valueOf())
        return (
            <div className="summaryMain container">
                <div className="title">
                    师生参与情况总览
                    <span className="more"></span>
                </div>
                <div className="tabMain mt20 clearfix">
                    {Object.keys(this.state.timeInfo).map((item,index)=>{
                        return (
                            <div key={item} onClick={() => this.getInitData(index)} className={["tabBox", this.state.timeSel===index?"activ":null].join(' ')}>近{this.state.timeInfo[item]}天</div>
                        )
                    })}
                </div>

                <div className="detailMain mt30">
                    <div className="detailBox">
                        <div className="d-tit">教师参与数 / 教师总数</div>
                        <div className="d-num">
                            {this.state.teacherJoinNum}/{this.state.teacherNum}
                        </div>
                        <div className="d-change">
                            <span>
                                较前{this.state.timeInfo[this.state.timeSel]}天
                                <em className={this.state.teacherChange>=0?'up':'down'}>{this.state.teacherChange}</em>
                            </span>
                        </div>
                    </div>

                    <div className="detailBox">
                        <div className="d-tit">学生参与数 / 学生总数</div>
                        <div className="d-num">
                            {this.state.studentJoinNum}/{this.state.studentNum}
                        </div>
                        <div className="d-change">
                            <span>
                                较前{this.state.timeInfo[this.state.timeSel]}天
                                <em className={this.state.teacherChange>=0?'up':'down'}>{this.state.teacherChange}</em>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary;