// import Vue from "vue";
import moment from 'moment'

export function getToday(dateVal){
    let weekStr = "";
    let weeDay = moment(dateVal).isoWeekday();
    switch (weeDay) {
        case 1:
            weekStr = '星期一'
            break;
        case 2:
            weekStr = '星期二'
            break;
        case 3:
            weekStr = '星期三'
            break;
        case 4:
            weekStr = '星期四'
            break;
        case 5:
            weekStr = '星期五'
            break;
        case 6:
            weekStr = '星期六'
            break;
        case 7:
            weekStr = '星期日'
            break;
        default:
            break;
    }
    return moment(dateVal).format("MM月DD日") + " " + weekStr;
}

export function numToWord(num){
    let word = ['零','一','二','三','四','五','六','七','八','九','十'];
    return word[num];
}
export function MonthToWord(num){
    let word = ['','一','二','三','四','五','六','七','八','九','十','十一','十二'];
    return word[num];
}
export function wordToNum(num){
    let word = ['零','一','二','三','四','五','六','七','八','九','十'];
    return word.indexOf(num);
}
/**原生上传视频后更改后缀.mp4 为jpg 就是视频第一帧截图 */
export function videoToImg(videoURL){
    return videoURL.replace('mp4','jpg')
}
/**返回自定义的类型 1.自定义上传 2.主观评价  3.考勤点名*/
export function getCusPlanType(scope){
    switch(scope){
        case 1:        //1后台创建
            return 1
        case 3:        //3教师布置
            return 1
        case 5:     //5学生自评
            return 2
        case 6:     //6学生互评
            return 2
        case 7:     //7家长评价
            return 2
        case 10:    //10班主任
            return 2
        case 11:    //11任课教师
            return 2
        case 8:    //8宿管考勤
            return 3
        case 9:    //7进出校考勤
            return 3
        case 14:
            return 14 //自主领取    
        case 15:
            return 15 //惩罚抵消
        default:
            return 1
    }
}

/**把总的秒数转换成 00:00 格式 */
export function secondsToPlayTime(seconds){
    // let seconds = this.soundItem.time;
    let min = Math.floor(seconds / 60) >= 10 ? Math.floor(seconds / 60) : '0' + Math.floor(seconds / 60);
    seconds -= 60 * min;
    let sec = seconds >= 10 ? seconds : '0' + seconds;
    return min + ':' + sec
}

export function getSecondsForVideoURL(videoURL){
    let r = /([^_]*)\.[^.]+$/
    let matchArr = videoURL.match(r)
    return parseInt(matchArr[1]);
}


export function getSelTimeArea(index){
    let data = {};
    data.end = moment().format('YYYY-MM-DD');
    if(index===0){
        data.begin = moment().subtract('days', 6).format('YYYY-MM-DD');
    }else if(index===1){
        data.begin = moment().subtract('days', 14).format('YYYY-MM-DD');
    }else if(index===2){
        data.begin = moment().subtract('days', 29).format('YYYY-MM-DD');
    }
    return data;
}


var lut = [];
for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
}
export function uuid() {    
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    return `${lut[d0 & 0xff] + lut[(d0 >> 8) & 0xff] + lut[(d0 >> 16) & 0xff] + lut[(d0 >> 24) & 0xff]}-
        ${lut[d1 & 0xff] + lut[(d1 >> 8) & 0xff]}-${lut[((d1 >> 16) & 0x0f) | 0x40] + lut[(d1 >> 24) & 0xff]}-
        ${lut[(d2 & 0x3f) | 0x80] + lut[(d2 >> 8) & 0xff]}-${lut[(d2 >> 16) & 0xff] + lut[(d2 >> 24) & 0xff] +
        lut[d3 & 0xff] + lut[(d3 >> 8) & 0xff] + lut[(d3 >> 16) & 0xff] + lut[(d3 >> 24) & 0xff]}`;
}

export function isArray(a) {
    return Object.prototype.toString.call(a) === "[object Array]";
}
export function isString(s) {
    return typeof s === "string";
}
export function isObject(o) {
    return o == null ? false : Object.prototype.toString.call(o) === "[object Object]";
}
export function isNumber(n) {
    return Object.prototype.toString.call(n) === "[object Number]";
}
export function isBoolean(s) {
    return typeof s === "boolean";
}

// String.prototype.colorRGBA = function (opacity = 1) {
//     // 16进制颜色值的正则
//     var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
//     // 把颜色值变成小写
//     var color = this.toLowerCase();
//     if (reg.test(color)) {
//         // 如果只有三位的值，需变成六位，如：#fff => #ffffff
//         if (color.length === 4) {
//             var colorNew = "#";
//             for (let i = 1; i < 4; i += 1) {
//             colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
//             }
//             color = colorNew;
//         }
//       // 处理六位的颜色值，转为RGB
//         var colorChange = [];
//         for (let i = 1; i < 7; i += 2) {
//             colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
//         }
//         return "rgba(" + colorChange.join(",") + ","+ opacity+")";
//     } else {
//         return color;
//     }
// };

// 数组递增递减 asc desc
export const getSortFun = (sortBy,order) => {
    let ordAlpah = (order === 'desc') ? '<' : '>';           
    let sortFun = (a,b) =>{
        return ordAlpah==='>'? (a[sortBy] > b[sortBy]?1:-1) : (a[sortBy] < b[sortBy]?1:-1)
    }
    // new Function('a', 'b', 'return a.' + sortBy + ordAlpah + 'b.' + sortBy + '?1:-1');
    return sortFun
};


/**
 * 在维度树中找到指定dimensionID相同的节点并返回
 * by:RayJ
 * time:2021-04-22
 */
export const findDimensionById = (dimensionId,dimensionList) => {
    let dList = dimensionList||[];
    let curDimension;
    for(let i=0;i<dList.length;i++){
        if(dList[i].dimensionId === dimensionId){
            return dList[i]
        }
        if(dList[i].children && dList[i].children.length>0){
            curDimension = findDimensionById(dimensionId,dList[i].children);
            if(curDimension){
                return curDimension;
            }
        }
    }
};

export const UrlToParams = (paramsStr) => {
    let str = paramsStr.substr(1);
    str = str.replace(/&/g, '","').replace(/=/g, '":"');
    let objStr = '{"' + str + '"}';
    return JSON.parse(objStr);
}
