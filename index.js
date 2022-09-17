function myEach(arr, callBack) {
    for (let accessor in arr) {
        callBack(arr[accessor])
    }
    return arr
}

function myMap(arr, callBack) {
    let modifiedArr = [];

    for (let accessor in arr) {
        modifiedArr.push(callBack(arr[accessor]))
    }

    return modifiedArr
}

function myReduce(collection, callBack, acc) {
    let arr = Object.values(collection)
    let copiedArr = [...arr]
    acc = acc || copiedArr.shift()
    for (let accessor in copiedArr) {
        acc = callBack(acc, copiedArr[accessor], copiedArr)
    }

    return acc

}

function myFind(collection, predicate) {
    let arr = Object.values(collection)
    for (let accessor in arr) {
        if(predicate(arr[accessor])) {
            return arr[accessor]
        }
    }
}

function myFilter(collection, predicate) {
    let arr = Object.values(collection);
    let selectedElements = [];
    
    for (let accessor in arr) {
        if(predicate(arr[accessor])) {
            selectedElements.push(arr[accessor])
        } 
    }
    return selectedElements
}

function mySize(collection) {
    let arr = Object.values(collection);
    return arr.length
}

function myFirst(array, n = 1) {
    let count = 1;
    let newArray = [];
       
    for (let accessor in array) {
        if (count <= n) {
            newArray.push(array[accessor]);
            count++
        }
    }
        return newArray.length > 1 ? newArray : newArray[0]
   
}

function myLast(array, n = 1) {
    let start = array.length - n;
    return n > 1 ? array.slice(start, array.length) : array[start]
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}