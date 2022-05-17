// Tìm số nguyên số trong mảng
function cau_3() {
    creatArray()
    let j, sum = 0
    for (let i = 0; i < array.length; i++) {
        for (j = 2; j < array[i] ; j++) {
            if (array[i] % j ==0){
                break
            }
        }
        if (j===array[i]){
            sum += array[i]
        }
    }
    console.log(array)
    console.log(sum)
    document.getElementById("result3").innerHTML = "Tổng các số nguyên tố trong mảng là: " + sum
}