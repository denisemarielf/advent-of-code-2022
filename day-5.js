const {readFileSync, promises: fsPromises} = require('fs');
const contents = readFileSync("input-5.txt", 'utf-8');
let input = contents.split(/\r?\n/);
input = input.filter(item => !!item)
let originalInput = [...input]

let stacks = [[],[],[],[],[],[],[],[]]
//    let line = [...input[i]].filter((character) => character !== "[" && character !== "]")
for (let i=0; i<8; i++) {
    let line = [...input[i]]
   // console.log(line)
    for (let j=1; j < line.length; j+=2){
        //console.log(j,line[j-1],".",line[j],".",line[j+1])
        stacks[i].push(line[j])
    }
}

let orderedStack = []

stacks.forEach((stack) => {
    for (let i=0; i < stack.length; i+=2){
        orderedStack.push(stack[i])
    }
})

function orderArray(number, array) {
    let newArray = []
    for (let i=number; i<array.length; i+=9){

        if (array[i] != " "){
            newArray.push(array[i])
        }
    }

    return newArray.reverse()
}

let completeAndOrdered = []
for (l = 0; l < 9; l++) {
    completeAndOrdered.push(orderArray(l, orderedStack))
}

function movePackages (amount, start, finish) {
    for (let i=0; i<amount; i++){
        let returnValue = completeAndOrdered[start].pop()
        completeAndOrdered[finish].push(returnValue)
    }
}


for (let i=9; i<originalInput.length; i++) {
    let line = originalInput[i].split(" ").filter(Number)
    movePackages(parseInt(line[0]), parseInt(line[1]-1), parseInt(line[2]-1))
}



console.log(completeAndOrdered)

//Part 2


function movePackages2 (amount, start, finish) {
        let returnValue = completeAndOrdered[start].slice(-amount)
        for (let i=0; i<amount; i++){
            completeAndOrdered[start].pop()
        }
        completeAndOrdered[finish].push(...returnValue)
}


for (let i=9; i<originalInput.length; i++) {
    let line = originalInput[i].split(" ").filter(Number)
    movePackages2(parseInt(line[0]), parseInt(line[1]-1), parseInt(line[2]-1))
}

console.log(completeAndOrdered)