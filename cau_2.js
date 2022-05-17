// Tìm số lượng phần tử a trong mảng
function cau_2() {
    creatArray()
    let a = 5
    let count2 = 0
    for (let i = 0; i <array.length ; i++) {
        if (array[i] === a)
            count2++

    }
    console.log(array)
    document.getElementById("result2").innerHTML = "Số lượng phần tử a trong mảng là: " + count2
}