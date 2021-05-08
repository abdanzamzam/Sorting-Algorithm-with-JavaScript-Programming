let data = [6,5,3,1,8,7,2,4,10,1,6]
let dummy = 0

function bubbleSort(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = data.length - 1; j > i; j--) {
            if (data[j] < data[j-1]) {
                dummy = data[j]
                data[j] = data[j-1]
                data[j-1] = dummy
            }
        }
    }
    return data
}

console.log(bubbleSort(data));