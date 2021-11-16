import React from "react";
import * as echarts from "echarts"
import "./index.scss"
class Radar extends React.Component {
    state = {
        
        
    }
    customeOption = {};
    defaultColor = ['#168DFF',"#FF9000","#23C5A2","#FF5E33"];
    radarOption = {};
    // {
    //     title: {
    //       text: 'Basic Radar Chart'
    //     },
    //     legend: {
    //       data: ['Allocated Budget', 'Actual Spending']
    //     },
    //     radar: {
    //       // shape: 'circle',
    //       indicator: [
    //         { name: 'Sales', max: 6500 },
    //         { name: 'Administration', max: 16000 },
    //         { name: 'Information Technology', max: 30000 },
    //         { name: 'Customer Support', max: 38000 },
    //         { name: 'Development', max: 52000 },
    //         { name: 'Marketing', max: 25000 }
    //       ]
    //     },
    //     series: [
    //       {
    //         name: 'Budget vs spending',
    //         type: 'radar',
    //         data: [
    //           {
    //             value: [4200, 3000, 20000, 35000, 50000, 18000],
    //             name: 'Allocated Budget'
    //           },
    //           {
    //             value: [5000, 14000, 28000, 26000, 42000, 21000],
    //             name: 'Actual Spending'
    //           }
    //         ]
    //       }
    //     ]
    //   };
    chartElement = null;
    radarChart = null;

    componentDidUpdate(){
        // this.radar
        // this.chartElement = this.$refs.radar;

        try{
            this.customeOption.center=[this.props.size[0],this.props.size[1]];
            this.customeOption.radius=this.props.size[2];
        }catch(e){
            this.customeOption.center=['50%','65%'];
            this.customeOption.radius='60%';
        }
        
        console.log(echarts,'echarts')
        if(this.props.radarData.length > 0){
            this.radarChart = echarts.init(this.radar);
            this.radarOption = this.initOption();
            console.log(this.radarOption,'我进来以后的this.radarOption')
            this.radarChart.setOption(this.radarOption);
        }
    }

    initOption(){
        let option = {};
        option.color = this.defaultColor;
        option.title = {};
        // option.title.text = "一级维度";
        console.log(this,'this@')
        // 指示器显示（统计指标）
        option.data = ['维度'];

        // 雷达度的维度指示
        option.radar = [];

        // 雷达图的指示器
        option.legend = {};
        if(this.props.multiple){
            option.legend.data = [];
            for(let i=0;i<this.props.radarData.length;i++){
                option.legend.data.push(this.props.radarData[i].name)
            }
        }


        // 循环生成各个统计指标维度的指示
        let dimInstruc = {};
        // dimInstruc.indicator = [{text:'爱心助人|80%',max:100},{text:'强身健体|50%',max:100},{text:'积极进取|60%',max:100},{text:'个性发展|75%',max:100},{text:'安全守纪|79%',max:100}];

        // console.log(this.radarData,"this.radarData")

        if(this.props.multiple){
            dimInstruc.indicator = [];
            for(let i=0;i<this.props.radarData[0].data.length;i++){
                dimInstruc.indicator.push(this.props.radarData[0].data[i])
            }
        }else{
            dimInstruc.indicator = this.radarData
        }

        dimInstruc.center = this.customeOption.center;
        dimInstruc.radius = this.customeOption.radius;
        dimInstruc.startAngle = 90;
        dimInstruc.splitNumber = 4;
        dimInstruc.shape = 'circle';
        dimInstruc.axisLine = {
            lineStyle:{
                width: 2,
                color: 'rgba(205, 213, 221, 1)',
                type: 'dashed'
            }
        }
        dimInstruc.name = {
            // formatter: function (value, indicator) {
            //     let valArr = value.split('|');
            //     // return valArr[0] + "\n" +valArr[1];
            //     return valArr.join('\n');
            // },
            fontSize: 12,
            lineHeight:16,
            color: '#666'
        }
        option.radar.push(dimInstruc);

        // 图表数据统计
        option.series = []
        // 循环生成各个统计指标维度的数据
        let dimData = {};
        dimData.name = '雷达图';
        dimData.type = 'radar';

        // 多维度统计
        if(this.props.multiple){
            dimData.symbol = 'circle';
            dimData.symbolSize = 10;
            dimData.lineStyle = {
                width: 3,
            };
            dimData.itemStyle = {
                borderWidth: .6,
                borderColor: "#FFF",
            };
        }else{
            dimData.itemStyle = {
                normal:{
                    lineStyle:{
                        width: 3
                    }
                }
            }
        }
        
        

        dimData.data = [];
        let series = {};
        // 多维度统计
        if(this.props.multiple){
            for(let i=0;i<this.props.radarData.length;i++){
                series = {};
                series.name = this.props.radarData[i].name;
                series.value = [];
                for(let j=0;j<this.props.radarData[i].data.length;j++){
                    series.value.push(this.props.radarData[i].data[j].val);
                }
                dimData.data.push(series);
            }
        }else{
            series.symbol = 'circle';
            series.symbolSize = 10;
            series.lineStyle = {
                width: 3,
            };
            series.itemStyle = {
                borderWidth: .6,
                borderColor: "#FFF",
            };
            series.value = [];
            // series.value = [80,50,60,75,79];
            for(let i=0;i<this.props.radarData.length;i++){
                series.value.push(this.props.radarData[i].val);
            }
            series.name = '';
            series.areaStyle = {
                color: 'rgba(22,141,255,0.2)'
            }
            dimData.data.push(series);
        }

        option.series.push(dimData);

        console.log(option,"我option22")
        return option;
    }

    render() {
        return (
            <div className="radarChart">
                <div id="radar" ref={radar => this.radar = radar}></div>
            </div>
        );
    }
}

export default Radar


// {/* <script>

    
//     {/* props:{
//         radarData: {
//             type: Array,
//             required: true
//         },
//         multiple: {
//             type: Boolean,
//             default: false
//         },
//         size:{
//             type:Array,
//             default:['50%','65%','60%']
//         }
//     }, */}
//     {/* mounted(){
//         this.chartElement = this.$refs.radar;
//         try{
//             this.customeOption.center=[this.size[0],this.size[1]];
//             this.customeOption.radius=this.size[2];
//         }catch(e){
//             this.customeOption.center=['50%','65%'];
//             this.customeOption.radius='60%';
//         }
        
        
//         this.radarChart = echarts.init(this.chartElement);
//         this.radarOption = this.initOption();
//         this.radarChart.setOption(this.radarOption);

        
//     }, */}
//     {/* methods:{
//         initOption(){
//             let option = {};

//             // 图形色彩（统计指标）
            
//         }
//     } */}
// }
// </script> */}
