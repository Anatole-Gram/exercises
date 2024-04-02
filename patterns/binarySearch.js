//binary search

function binarySearch(list, value) {
    let left = 0
    let right = list.length - 1
    let middle, found

    while(!found&&left<=right) {
        middle = Math.floor((left + right)/2)
        found = list[middle]===value
        if (!found) list[middle] < value ? left=++middle : right=--middle
    }
    return middle
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let found 
console.log(found===true)
console.log(binarySearch(sortedArray, 3))