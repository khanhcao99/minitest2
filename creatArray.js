let array
function creatArray(){
    let n = +prompt("Nhập vào số phần tử của mảng")
    array = new Array(n)
    for (let i = 0; i <array.length ; i++) {
        array[i] = +prompt("Nhập vào giá trị của các phần tử trong mảng")
    }
}