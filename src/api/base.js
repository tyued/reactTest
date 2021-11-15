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