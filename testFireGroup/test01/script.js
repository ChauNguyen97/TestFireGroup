
var numArr = [3, 4, 5, 3, 2, 3, 10, 11];

console.log(findMax5(numArr));

const message = "Test 01";

document.querySelector("#header").innerHTML = message;

console.log(message);

//Ham kiem tra mang so nguyen
function arrayIsNaN(arr){
    for(var i in arr){
        console.log(arr[i]);
        if (isNaN(arr[i])) {
            return false;
        }
    }
    return true;
}

function sortIncreaseArray(arr) {
    var len = arr.length;
    for(var i=0; i < (len - 1) ; i++){
        for (var j = i+1; j < len; j++) {
            if (arr[i] < arr[j]) {
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
        }
    }
    return arr;
}

function findMax5(arr){
    if(!arrayIsNaN(arr)){
        console.log("Array with characters!!!");
        return [];
    }

    if(arr.length < 5){
        return sortIncreaseArray(arr);
    }

    return sortIncreaseArray(arr).slice(0,5);
}

function countFrequent(arr, val){
    var countVal = 0;
    for(var i in arr ){
        if(val === arr[i]){
            countVal++;
        }
    }
    return countVal;
}

function findFrequent(arr){
    var freq = arr[0];

    for (var i in arr) {
        if (countFrequent(arr, freq) < countFrequent(arr, arr[i])) {
            freq = arr[i];
        }
    }
    return freq;
}