//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(Object.values(person3) + Object.values(person3.shakes[0]))


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person {
    constructor(name,age){
        this.name = name
        this.age = Number(age)
    }

    printInfo = (name,age) => {
        return `${this.name} is ${this.age} years old.`
    }
    
    birthday = (name,age) => {
        this.age += 1
        return `${this.name} turned ${this.age}`
    }
}

const guy1 = new Person('Guy', '30')
const guy2 = new Person('Other guy', '28')
console.log(guy1.printInfo())
console.log(guy2.printInfo())
console.log(guy2.birthday())
console.log(guy2.birthday())
console.log(guy2.birthday())
console.log(guy2.printInfo())
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/


const ergastData = async () => {
    try{
        const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.error(error)
    }
}

ergastData()




// ===================Code Wars=========================//

/*
Exercise 1: https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
Solution:
function greet(name){
  
  if(name == "Johnny"){
    return "Hello, my love!"
  } else{
    return "Hello, " + name + "!"
  }
  
}

Exercise 2: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript
Solution:
function findAverage(array) {
  // your code here
  let num = 0
  let div = 0
  if (array.length == 0){
    return 0;
  } else {
    for(let i of array){
      num += Number(i)
      div += 1
    }
    return num/div;
  }
}
*/