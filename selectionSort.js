let data = [6,5,3,1,8,7,2,4,9,5,4]

function selectionSort(data) {
    let dummy = 0;
    let k = 0

    for (let i = 0; i < data.length; i++) {
        k = i
        for (let j = i + 1; j < data.length; j++) {
            if (data[j] < data[k]) {
                k = j
            }
        }
        dummy = data[i]
        data[i] = data[k]
        data[k] = dummy
    }
    return data
}

console.log(selectionSort(data))