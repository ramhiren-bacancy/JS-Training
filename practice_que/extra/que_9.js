/*
output : 

{
  Ahmedabad: [
    { name: 'Aarav Patel', age: 22 },
    { name: 'Rahul Verma', age: 22 }
  ],
  Mumbai: [
    { name: 'Priya Sharma', age: 25 },
    { name: 'Vikram Singh', age: 25 },
    { name: 'Meera Nair', age: 25 }
  ],
  Hyderabad: [
    { name: 'Sneha Reddy', age: 24 },
    { name: 'Karan Mehta', age: 24 }
  ],
  Pune: [ { name: 'Neha Gupta', age: 27 }, { name: 'Rohit Das', age: 27 } ],
  Chennai: [ { name: 'Ananya Iyer', age: 22 } ]
}
 */




const inp = [
  { name: "Aarav Patel", age: 22, city: "Ahmedabad" },
  { name: "Priya Sharma", age: 25, city: "Mumbai" },
  { name: "Rahul Verma", age: 22, city: "Ahmedabad" },
  { name: "Sneha Reddy", age: 24, city: "Hyderabad" },
  { name: "Vikram Singh", age: 25, city: "Mumbai" },   
  { name: "Neha Gupta", age: 27, city: "Pune" },
  { name: "Karan Mehta", age: 24, city: "Hyderabad" },
  { name: "Ananya Iyer", age: 22, city: "Chennai" },   
  { name: "Rohit Das", age: 27, city: "Pune" },        
  { name: "Meera Nair", age: 25, city: "Mumbai" }       
];


const out =inp.reduce((acc,{name,age,city})=>{
    
    if(!acc[city]){
        acc[city] = []
    }

    acc[city].push({name,age})

    return acc
},{})

console.log(out)