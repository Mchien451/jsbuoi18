var myArr = [];
function pushData() {
    // get value from the input text
    var inputText = document.getElementById('inputText').value;

    // append data to the array
    myArr.push((Number)(inputText));

    var pval = "";

    for (i = 0; i < myArr.length; i++) {
        if (i == 0)
            pval = pval + myArr[i];
        else
            pval = pval + "," + myArr[i];
    }

    // display array data
    document.getElementById('pText').innerHTML = pval;
    document.getElementById('inputText').value = "";
}


function SummPositive() {
    var sum = 0;
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] > 0) {
            sum += myArr[i];
        }
    }
    document.getElementById('ketQua3').innerHTML = sum;
}

function countPositiveNumbers() {
    var count = 0;
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] > 0) {
            count++;
        }
    }
    document.getElementById('ketQua4').innerHTML = count;
}


function findMin() {
    var min = myArr[0];
    for (var i = 1; i < myArr.length; i++) {
        if (min > myArr[i]) {
            min = myArr[i];
        }
    }
    document.getElementById('ketQua5').innerHTML = min;
}

//Tìm số dương nhỏ nhất
function findMinimumPositiveNumber() {
    var pos = -1;
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] > 0) {
            pos = i;
            break;
        }
    }

    if (pos != -1) {
        var min = myArr[pos];
        for (var i = pos + 1; i < myArr.length; i++) {
            if (myArr[i] < min && myArr[i] > 0) {
                min = myArr[i];
            }
        }
        document.getElementById('ketQua6').innerHTML = min;
    }
    else {
        document.getElementById('ketQua6').style.color = "red";
        document.getElementById('ketQua6').innerHTML = "Mảng không có số dương!";
    }
}

//Tìm số chẵn cuối cùng trong mảng. Nếu mảng ko có số chẵn thì trả về -1
function findLastEvenNumber() {
    var pos = -1;
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] % 2 == 0) {
            pos = i;
            break;
        }
    }
    if (pos != -1) {
        for (var i = myArr.length - 1; i >= pos; i--) {
            if (myArr[i] % 2 == 0) {
                document.getElementById('ketQua7').innerHTML = myArr[i];
                break;
            }
        }
    }
    else {
        document.getElementById('ketQua7').innerHTML = "-1";
    }
}

//Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).

function swapTwoNumbers() {
    var x = document.getElementById("position1").value;
    var y = document.getElementById("position2").value;
    var temp = myArr[x];
    myArr[x] = myArr[y];
    myArr[y] = temp;
    var space = "";
    for (var i = 0; i < myArr.length; i++) {
        space = space + myArr[i] + " ";
    }
    document.getElementById('ketQua8').innerHTML = space;
}


//Sắp xếp mảng theo thứ tự tăng dần.
function sortAscending() {
    myArr.sort(function (a, b) { return a - b }); //nếu muốn sắp giảm thì đổi: b-a
    document.getElementById("ketQua9").innerHTML = myArr;
}
//Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
function checkPrimeNumber(x) {
    var count = 0;
    for (var i = 1; i <= x; i++) {
        if (x % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return true;
    }
    return false;
}

function findPrimeNumber() {
    var pos = -1;
    for (var i = 0; i < myArr.length; i++) {
        if (checkPrimeNumber(myArr[i])) {
            pos = i;
            document.getElementById('ketQua10').innerHTML = myArr[i];
            break;
        }
    }
    if (pos == -1) {
        document.getElementById('ketQua10').innerHTML = "-1";
    }
}

//Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var newArray = [];
function pushData2() {
    // get value from the input text
    var inputText2 = document.getElementById('inputText2').value;

    // append data to the array
    newArray.push((Number)(inputText2));

    var pval = "";

    for (var i = 0; i < newArray.length; i++) {
        if (i == 0)
            pval = pval + newArray[i];
        else
            pval = pval + "," + newArray[i];
    }

    // display array data
    document.getElementById('pText2').innerHTML = pval;
    document.getElementById('inputText2').value = "";
}

function countIntegers() {
    var count = 0;
    for (var i = 0; i < newArray.length; i++) {
        if (Math.ceil(newArray[i]) != Math.floor(newArray[i]))
            continue;
        count++;
    }
    document.getElementById('ketQua11').innerHTML = count;
}
//So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function comparePositiveAndNegative() {
    var count1 = 0, count2 = 0;
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] > 0) {
            count1++;
        }
        else {
            count2++;
        }
    }

    if (count1 > count2) {
        document.getElementById('ketQua12').innerHTML = "Số lượng số dương nhiều hơn!" + " (" + count1 + ")";
    }
    else if (count1 < count2) {
        document.getElementById('ketQua12').innerHTML = "Số lượng số âm nhiều hơn!" + " (" + count2 + ")";
    }
    else {
        document.getElementById('ketQua12').innerHTML = "Số lượng số âm và dương bằng nhau!" + " (" + count1 + ")";
    }
}
