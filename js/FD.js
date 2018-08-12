function ad1() {
    var pw1 = document.getElementById("text1").value;
    if (pw1) {
        document.getElementById("plotBtn").style.backgroundColor = "#CCC";
    }

}

//楼层
function ad2() {
    var pw1 = document.getElementById("text2").value;
    if (pw1) {
        document.getElementById("floorBtn").style.backgroundColor = "#CCC";
    }

}

//面积
function ad3() {
    var pw1 = document.getElementById("text3").value;
    var pw2 = document.getElementById("text3_1").value;
    if (pw1 != null || pw2 != null) {
        document.getElementById("areaBtn").style.backgroundColor = "#CCC";
    }
}

//朝向
function ad4() {
    var pw1 = document.getElementById("text4").value;
    if (pw1) {
        document.getElementById("directionBtn").style.backgroundColor = "#CCC";
    }

}

//厅室
function ad5() {
    var pw1 = document.getElementById("text5").value;
    if (pw1) {
        document.getElementById("houseTypeBtn").style.backgroundColor = "#CCC";
    }

}

//电梯
function ad6() {
    document.getElementById("elevatorBtn").style.backgroundColor = "#CCC";

}

//车位
function ad7() {
    document.getElementById("parkingBtn").style.backgroundColor = "#CCC";

}

//月租金
function ad8() {
    var pw1 = document.getElementById("monthPrice").value;
    var pw2 = document.getElementById("text8_1").value;
    if (pw1 != null || pw2 != null) {
        document.getElementById("priceBtn").style.backgroundColor = "#CCC";
    }
}

//房屋配置
function ad9() {
    document.getElementById("equipmentBtn").style.backgroundColor = "#CCC";

}

//出租要求
function ad10() {
    document.getElementById("demandBtn").style.backgroundColor = "#CCC";

}

//租金所包含费用
function ad11() {
    document.getElementById("priceIncludeBtn").style.backgroundColor = "#CCC";

}

//您的身份
function ad12() {
    document.getElementById("identityBtn").style.backgroundColor = "#CCC";

}