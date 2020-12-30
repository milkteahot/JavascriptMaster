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
var solution=(p,c)
=>p.find(p=>
    !c[p]--,
    c.map(p=>c[p]=(c[p]|0)+1))

