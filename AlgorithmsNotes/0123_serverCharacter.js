function solution(n, record) {
    var answer = [];
    var server = {};
    for (var i = 1; i <= n; i++) {
        server[i] = [];
    }
    record.map(function (v) {
        let num = v.substr(0, 1);
        let item = v.substr(2, v.length - 1);
        for (var i = 1; i <= n; i++) {
            if (i == num) {
                if (!server[i].includes(item)) {
                    server[i].push(item)
                }
            }
        }
    })
    for (var i = 1; i < n; i++) {
        let length = server[i].length;
        while (length > 5) {
            server[i].shift();
            length--;
        }
        console.log(i)
        console.log(server[i])
        return answer;
    }
}
// console.log(solution(1, ["1 fracta", "1 sina", "1 hana", "1 robel", "1 abc", "1 sina", "1 lynn"]))
console.log(solution(4, ["1 a", "1 b", "1 abc", "3 b", "3 a", "1 abcd", "1 abc", "1 aaa", "1 a", "1 z", "1 q", "3 k", "3 q", "3 z", "3 m", "3 b"]))
    // answer = record.sort((a, b) => (a - b))

/**
 * 1. 서버 번호 순으로 정렬한다.
 *  - 서버 번호별 객체를 만든다.
 * 2. 닉네임이 들어온 순으로 저장한다.
 *
 * let length = answer.length;
    while (length > 5) {
        answer.shift();
        length--;
    }

 * 3. 이미 있는 닉네임은 무시한다.
 */