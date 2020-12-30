//ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
const profileData = {
    name: "John",
    age: 24,
    nationality: "USA",
    location: "LA"
};

const profileUpdate = ({profileData}) => {
    const { name, age, nationality, location } = profileData;
}



const profileUpdate2  = ({ name, age }) => name+' '+age;

console.log(profileUpdate2(profileData));


const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = ({max, min}) => (max + min) / 2.0; 
  console.log(half(stats),'half') //28.015 half
