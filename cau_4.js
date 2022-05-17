// Tính tổng các số nguyên số nhỏ hơn 500
function cau_4() {

    let j, sum = 0
    for (let i = 0; i < 500; i++) {
        for (j = 2; j < i ; j++) {
            if (i % j ==0){
                break
            }
        }
        if (j===i){
            sum += i
        }
    }
    console.log(array)
    console.log(sum)
    document.getElementById("result4").innerHTML = "Tổng các số nguyên tố nhỏ hơn 500 là: " + sum
}