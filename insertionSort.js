let data = [6,5,3,1,8,7,2,4,12,8,3]

function insertionSort(data) {
    let dummy = 0
    
    for (let i = 1; i < data.length; i++) {
        for (let j = i; j > 0; j--) {
            if (data[j] < data[j-1]) {
                dummy = data[j]
                data[j] = data[j-1]
                data[j-1] = dummy
            }
        }
    }
    return data
}

console.log(insertionSort(data))