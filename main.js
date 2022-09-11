/**
 * Sắp xếp 3 số theo thứ tự tăng dần
 * Đấu vào: soThu1, soThu2, soThu3
 * Xử lý:
 * a>b ? b>c ? c<b<a : a>c ? b<c<a : b<a<c : b>c ? a>c ? c<a<b : a<c<b : a<b<c
 * Đầu ra
 */
var btnSapXepSo = document.getElementById("btnSapXepSo");
btnSapXepSo.onclick = function () {
    //Đau vào
    var a = document.getElementById("soThu1").value * 1;
    var b = document.getElementById("soThu2").value * 1;
    var c = document.getElementById("soThu3").value * 1;
    var kqSX = "";
    //Xu Ly
    if (a > b) {
        if (b > c) {
            kqSX += c + " < " + b + " < " + a;
        } else {
            if (a > c) {
                kqSX += b + " < " + c + " < " + a;
            } else {
                kqSX += b + " < " + a + " < " + c;
            }
        }
    } else {
        if (b > c) {
            if (a > c) {
                kqSX += c + " < " + a + " < " + b;
            } else {
                kqSX += a + " < " + c + " < " + b;
            }
        } else {
            kqSX += a + " < " + b + " < " + c;
        }
    }
    //Dau ra
    var ketQuaSX = "<br><p class='alert alert-success'>👉Số tăng dần: " + kqSX + "</p>";
    document.getElementById("showSapXepSo").innerHTML = ketQuaSX;
}

/**
 * Gửi lời Chào hỏi
 */
document.getElementById("btnHello").onclick = function () {
    //Dau vao
    var chon = document.getElementById("selUser").value;
    var kqChon;
    //Xu ly
    kqChon = "B" == chon ? "Xin Chào Bố" : "M" == chon ? "Xin Chào Mẹ" : "A" == chon ? "Xin Chào Anh Trai" : "E" == chon ? "Xin Chào Em Gái" : "Chưa chọn thành viên";
    //Dau ra
    var ketQuaChon = "<br><p class='alert alert-success'>👉 " + kqChon + "</p>";
    document.getElementById("showHello").innerHTML = ketQuaChon;
}

/**
 * Đếm số chẵn lẻ
 * Đầu vào: num1, num2, num3
 * Xử lý: num % 2 == 0 => số chẵn, số lẻ: 3 - chẵn
 * Đầu ra: số lượng chẵn lẻ 
 */
document.getElementById("btnDemSo").onclick = function () {
    //Dau vao
    var a = document.getElementById("num1").value * 1;
    var b = document.getElementById("num2").value * 1;
    var c = document.getElementById("num3").value * 1;
    var d = 0;
    //Xu ly
    if (a % 2 == 0) {
        d++
    };
    if (b % 2 == 0) {
        d++
    };
    if (c % 2 == 0) {
        d++
    };
    //Dau ra
    var ketQua = "<br><p class='alert alert-success'>👉 Có " + d + " số chẵn và " + (3 - d) + " số lẻ</p>";
    document.getElementById("showChanLe").innerHTML = ketQua;
}

/**
 * Đoán hình tam giác
 * Dầu vào: 3 cạnh tam giac
 * Xử lý: 
 *  - a==b==c => tam giác điều
 *  - a=b || b=c || c=a => tam giác cân
 *  - a = Math.sqrt(Math.pow(b,2)+Math.pow(c,2)) ==>tam giác vuông
 * Dau ra
 */
document.getElementById("btnTinh").onclick = function () {
    //Dau vao
    var a = +document.getElementById("canh1").value;
    var b = +document.getElementById("canh2").value;
    var c = +document.getElementById("canh3").value;
    var a1 = tinhCanhGV(b, c);
    var b1 = tinhCanhGV(a, c);
    var c1 = tinhCanhGV(b, a);
    var kqTG = "";
    //Xu ly
    if (a == b == c) {
        kqTG = "Tam giác điều";
    } else if (a == b || a == c || b == c) {
        kqTG = "Tam giác cân";
    } else if (a1 == b1 || a1 == c1 || b1 == c1) {
        kqTG = "Tam giác vuông";
    } else {
        kqTG = "Tam giác khác";
    }
    //Dau ra
    ketquaTG = "<br><p class='alert alert-success'>👉 Đây là " + kqTG + " </p>";
    document.getElementById("showTamGiac").innerHTML = ketquaTG;
}
function tinhCanhGV(a, b) {
    var m = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

/**
 * Tính ngày tháng năm
 */
function ngayMai() {
    //Dau vao
    var soNgay = +parseInt(document.getElementById("soNgay").value);
    var soThang = +parseInt(document.getElementById("soThang").value);
    var soNam = +parseInt(document.getElementById("soNam").value);
    mai = "";
    //Xu ly
    switch (soThang) {
        case 1: case 3: case 5: case 7: case 8: case 10:
            if (soNgay > 0 && soNgay < 31) {
                mai = (soNgay + 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 31) {
                mai = "1/" + (soThang + 1) + "/" + soNam;
            } else {
                mai = "Ngày không hợp lệ"
            }
            break;
        case 2:
            if (soNgay > 0 && soNgay < 28) {
                mai = (soNgay + 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 28) {
                mai = "1/" + (soThang + 1) + "/" + soNam;
            } else {
                mai = "Ngày không hợp lệ"
            }
            break;
        case 4: case 6: case 9: case 11:
            if (soNgay > 0 && soNgay < 30) {
                mai = (soNgay + 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 30) {
                mai = "1/" + (soThang + 1) + "/" + soNam;
            } else {
                mai = "Ngày không hợp lệ";
            }
            break;
        case 12:
            if (soNgay > 0 && soNgay < 31) {
                mai = (soNgay + 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 31) {
                mai = "1/1/" + (soNam + 1);
            } else {
                mai = "Ngày không hợp lệ";
            }
            break;
        default:
            mai = "Tháng ko xác định";
    }
    //Dau ra
    ketqua = "<br><p class='alert alert-success'>👉 Ngày " + mai + " </p>";
    document.getElementById("showDate").innerHTML = ketqua;
}
function homQua() {
    //Dau vao
    var soNgay = document.getElementById("soNgay").value * 1;
    var soThang = document.getElementById("soThang").value * 1;
    var soNam = document.getElementById("soNam").value * 1;
    qua = "";
    //Xu ly
    switch (soThang) {
        case 1:
            if (soNgay > 1 && soNgay <= 31) {
                qua = (soNgay - 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 1) {
                qua = "31/12/" + (soNam - 1);
            } else {
                qua = "Ngày không hợp lệ"
            }
            break;
        case 2:
            if (soNgay > 1 && soNgay <= 28) {
                qua = (soNgay - 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 1) {
                qua = "31/" + (soThang - 1) + "/" + soNam;
            } else {
                qua = "Ngày không hợp lệ";
            }
            break;
        case 3:
            if (soNgay > 1 && soNgay <= 28) {
                qua = (soNgay - 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 1) {
                qua = "28/" + (soThang - 1) + "/" + soNam;
            } else {
                qua = "Ngày không hợp lệ";
            }
            break;
        case 4: case 6: case 9: case 1:
            if (soNgay > 1 && soNgay <= 30) {
                qua = (soNgay - 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 1) {
                qua = "31/" + (soThang - 1) + "/" + soNam;
            } else {
                qua = "Ngày không hợp lệ";
            }
            break;
        case 5: case 7: case 8: case 10: case 12:
            if (soNgay > 1 && soNgay <= 31) {
                qua = (soNgay - 1) + "/" + soThang + "/" + soNam;
            } else if (soNgay == 1) {
                qua = "30/" + (soThang - 1) + soNam;
            } else {
                qua = "Ngày không hợp lệ"
            }
            break;
        default:
            mai = "Tháng ko xác định"
    }
    //Dau ra
    ketqua = "<br><p class='alert alert-success'>👉 Ngày " + qua + " </p>";
    document.getElementById("showDate").innerHTML = ketqua;
}