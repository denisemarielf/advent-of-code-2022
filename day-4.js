const {readFileSync, promises: fsPromises} = require('fs');
const contents = readFileSync("input-4.txt", 'utf-8');
let input = contents.split(/\r?\n/);
input = input.filter(item => !!item)

let counter = 0

input.forEach((pair) => {
    elf1 = pair.split(",")
    a = elf1[0].split("-")
    b = elf1[1].split("-")
    
    let sections1 = []
    let sections2 = []

    for (let i = parseInt(a[0]); i <= parseInt(a[1]); i++){
        sections1.push(i)
    }
    for (let j = parseInt(b[0]); j <= parseInt(b[1]); j++){
        sections2.push(j)
    }

    let checker = (arr, target) => target.every(v => arr.includes(v));
    contains1 = checker(sections1, sections2)
    contains2 = checker(sections2, sections1); 
    
    if (contains1 || contains2) {
        counter++
    }
    
})

//part 2

let counter2=0

input.forEach((pair) => {
    elf1 = pair.split(",")
    a = elf1[0].split("-")
    b = elf1[1].split("-")
    
    let sections1 = []
    let sections2 = []

    for (let i = parseInt(a[0]); i <= parseInt(a[1]); i++){
        sections1.push(i)
    }
    for (let j = parseInt(b[0]); j <= parseInt(b[1]); j++){
        sections2.push(j)
    }

    function checker(arr1, arr2) {
        let check = false;
        arr1.forEach((item) => {
            if (arr2.indexOf(item) !== -1){
                check = true
                return 
            }
            
        })
        return check
    }

    contains1 = checker(sections1, sections2)
    contains2 = checker(sections2, sections1); 
    
    if (contains1 || contains2) {
        counter2++
    }
    
})

console.log(counter2)