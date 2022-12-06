const {readFileSync, promises: fsPromises} = require('fs');
const contents = readFileSync("input-6.txt", 'utf-8');
let input = contents.split(/\r?\n/);
input = input.filter(item => !!item)
array = Array.from(input[0])

let lastFour = []
let hasDuplicates = true
let i = 0

while (hasDuplicates){
    if (lastFour.length > 13) {
        let unique = Array.from(new Set(lastFour))
        if (unique.length === lastFour.length) {
            hasDuplicates = false
        }
        lastFour.shift()
    }
    lastFour.push(array[i])
    i++
}
