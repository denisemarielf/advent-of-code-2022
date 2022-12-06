const {readFileSync, promises: fsPromises} = require('fs');

const contents = readFileSync("input-1.txt", 'utf-8');

const arrayOfCalories = contents.split(/\r?\n/);

//Part 1
let mostCalories = 0
let currentCalories = 0

arrayOfCalories.forEach((item) => {
    
    if (item !== "") {
        currentCalories += parseInt(item)
    } else {
        if (currentCalories > mostCalories) {
            mostCalories = currentCalories
        }
        currentCalories = 0
    }
    
})

//Part 2

let caloriesPerElf = 0

let arrayOfCaloriesPerElf = []

arrayOfCalories.forEach((item) => {
    if (item != "") {
        caloriesPerElf += parseInt(item)
    } else {
        arrayOfCaloriesPerElf.push(caloriesPerElf)
        caloriesPerElf = 0
    }
})

arrayOfCaloriesPerElf.sort((a, b)=> {
    return b - a
})


let topThree = 0

for (let i =0; i < 3; i++) {
    topThree += arrayOfCaloriesPerElf[i]
}

console.log(topThree)
