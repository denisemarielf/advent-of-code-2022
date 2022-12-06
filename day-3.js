const {readFileSync, promises: fsPromises} = require('fs');

const contents = readFileSync("input-3.txt", 'utf-8');

let input = contents.split(/\r?\n/);

sumOfPriorities = 0
input = input.filter(item => !!item)
const alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetLowercase = alphabetUppercase.map((letter) => letter.toLowerCase())

input.forEach((item) => {
    item = [...item]
    let first = item.slice(0, item.length/2)
    let second = item.slice(item.length/2, item.length)
    let repeated 
    first.forEach((item) => {
        if (second.indexOf(item) !== -1) {
            repeated = second[second.indexOf(item)]
        }
    })
    if (alphabetLowercase.indexOf(repeated) !== -1) {
        sumOfPriorities += alphabetLowercase.indexOf(repeated) +1

    } else {
        sumOfPriorities += alphabetUppercase.indexOf(repeated) +27

    }
    
})

//part 2
let test = ["vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"]

let groups = []
let badgeSumOfPriorities = 0


for (i = 0; i < input.length; i += 3) {
    groups.push([input[i], input[i+1], input[i+2]])
}



groups.forEach((group) => {
    
    
    let group1 = [...group[0]]
    let group2 = [...group[1]]
    let group3 = [...group[2]]
    
    let repeated
    group1.forEach((letter) => {
        if (group2.indexOf(letter) !== -1 && group3.indexOf(letter) !== -1) {
            repeated = letter
        }

    })
    if (alphabetLowercase.indexOf(repeated) !== -1) {
        badgeSumOfPriorities += alphabetLowercase.indexOf(repeated) +1

    } else {
        badgeSumOfPriorities += alphabetUppercase.indexOf(repeated) +27

    }

})

console.log(badgeSumOfPriorities)