function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for(var i = 0 ; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            break;
        }
    }
    return answer;
}


//review
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
