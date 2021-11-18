import fetch from '../utils/fetch';
const PathPer = '/api';

export function getTeacherEvaluationClassList(query) {
    return fetch({
        url: PathPer + '/evaluation/teacherClassEvaluation/getTeacherEvaluationClassList',
        method: 'get',
        params: query
    });
}

/**获取教师参与统计 */
export function getTeacherJionAnalysis(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getteacherjoinanalysis',
        method: 'get',
        params: query
    })
}

/**获取学生参与统计 */
export function getStudentJionAnalysis(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getstudentjoinanalysis',
        method: 'get',
        params: query
    })
}

/**获取班级单个体系总接 */
export function getclassrulesummary(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getclassrulesummary',
        method: 'get',
        params: query
    })
}

/**获取班级单个体系总接列表 */
export function getClassRuleSummaryList(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getClassRuleSummaryList',
        method: 'get',
        params: query
    })
}

/**获取班级体系维度雷达图 */
export function getclassruledimensionradarlist(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getclassruledimensionradarlist',
        method: 'get',
        params: query
    })
}
/**获取班级体系维度统计列表 */
export function getclassruledimensionsummarylist(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getclassruledimensionsummarylist',
        method: 'get',
        params: query
    })
}

export function getCurrentXnxq(query) {
    return fetch({
        url: PathPer + '/base/jcXndm/getCurrentXnxq',
        method: 'get',
        params: query
    });
}

/**获取年级单个体系总接 */
export function getGradeRulesSummary(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getgraderulesummary',
        method: 'get',
        params: query
    })
}

/**获取年级体系维度统计列表 */
export function getGradeDimensionSummary(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getgraderuledimensionsummarylist',
        method: 'get',
        params: query
    })
}

/**获取年级体系维度统计列表(雷达图) */
export function getGradeDimensionRadar(query){
    return fetch({
        url: PathPer + '/evaluation/v2/teacherindex/getgraderuledimensionradarlist',
        method: 'get',
        params: query,

    })
}


export function getTokenByXxt(query) {
    return fetch({
        url: PathPer + '/auth/jwt/xxtToken',
        method: 'post',
        params: query
    });
}

export function getUserBaseInfo(query){
    return fetch({
        url: PathPer + '/admin/user/front/info',
        method: 'get',
        params: query
    });   
}

/**根据学号获取学生数据 */
export function getUserBaseInfoByXh(query){
    return fetch({
        url: PathPer + '/base/jcXsjbsj/getXsjbsjByxh',
        method: 'get',
        params: query
    });   
}