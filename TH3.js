const arr1 = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];
const arr4 = [0, 0, 0, 0, 0, 0];
function findMinIndexOfArray (arr){
    if (arr.length < 1) {
        return -1;
    }
    let indexOfMin = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[indexOfMin]){
            indexOfMin = i;
        }
    }
    return indexOfMin;
}

console.log("position",findMinIndexOfArray(arr1), ":", arr1[findMinIndexOfArray(arr1)])
console.log("position",findMinIndexOfArray(arr2), ":", arr2[findMinIndexOfArray(arr2)])
console.log("position",findMinIndexOfArray(arr3), ":", arr3[findMinIndexOfArray(arr3)])
console.log("position",findMinIndexOfArray(arr4), ":", arr4[findMinIndexOfArray(arr4)])