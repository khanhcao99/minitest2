// tìm số lượng số chẵn trong mảng
function cau_1() {
    creatArray()
    let count1 = 0
    for (let i = 0; i <array.length ; i++) {
        if (array[i] % 2 ===0)
            count1 ++

    }
    console.log(array)
    document.getElementById("result1").innerHTML = "Số lượng số chẵn trong mảng là: " + count1
}
