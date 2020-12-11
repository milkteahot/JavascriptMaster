const coffee = [1,2,3];
const order = coffee.map((item, index) => `${index} ${item*2}`);
console.log(coffee); //[ 1, 2, 3 ]
console.log(order); //[ '0 2', '1 4', '2 6' ]


const cafes = [
    {id:1, name:'starbucks'},
    {id:2, name:'hollys'},
    {id:3, name:'twosmoe'}
];

const names = cafes.map(item => item.name);
console.log(names); //[ 'starbucks', 'hollys', 'twosmoe' ]
