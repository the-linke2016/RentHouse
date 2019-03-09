function ad1() {
    var pw1 = document.getElementById("text1").value;
    if (pw1) {
        document.getElementById("plotBtn").style.backgroundColor = "springgreen";
    }

}

//楼层
function ad2() {
    var pw1 = document.getElementById("text2").value;
    if (pw1) {
        document.getElementById("floorBtn").style.backgroundColor = "springgreen";
    }

}

//面积
function ad3() {
    var pw1 = document.getElementById("text3").value;
    var pw2 = document.getElementById("text3_1").value;
    if (pw1 || pw2) {
        document.getElementById("areaBtn").style.backgroundColor = "springgreen";
    }
}

//朝向
function ad4() {
    var pw1 = document.getElementById("text4").value;
    if (pw1) {
        document.getElementById("directionBtn").style.backgroundColor = "springgreen";
    }

}

//厅室
function ad5() {
    var pw1 = document.getElementById("text5").value;
    if (pw1) {
        document.getElementById("houseTypeBtn").style.backgroundColor = "springgreen";
    }

}

//电梯
function ad6() {
    var pw1 = document.getElementById("电梯_0").checked;
    var pw2 = document.getElementById("电梯_1").checked;
    if (pw1 || pw2) {
        document.getElementById("elevatorBtn").style.backgroundColor = "springgreen";
    }
}

//车位
function ad7() {
    var pw1 = document.getElementById("车位_0").checked;
    var pw2 = document.getElementById("车位_1").checked;
    if (pw1 || pw2) {
        document.getElementById("parkingBtn").style.backgroundColor = "springgreen";
    }
}

//月租金
function ad8() {
    var pw1 = document.getElementById("text8").value;
    var pw2 = document.getElementById("text8_1").value;
    if (pw1 || pw2) {
        document.getElementById("priceBtn").style.backgroundColor = "springgreen";
    }
}

//房屋配置
function ad9() {
    var pw1 = document.getElementById("房屋配置_0").checked;
    var pw2 = document.getElementById("房屋配置_1").checked;
	var pw3 = document.getElementById("房屋配置_2").checked;
	var pw4 = document.getElementById("房屋配置_3").checked;
	var pw5 = document.getElementById("房屋配置_4").checked;
	var pw6 = document.getElementById("房屋配置_5").checked;
	var pw7 = document.getElementById("房屋配置_6").checked;
	var pw8 = document.getElementById("房屋配置_7").checked;
	var pw9 = document.getElementById("房屋配置_8").checked;
	var pw10 = document.getElementById("房屋配置_9").checked;
	var pw11 = document.getElementById("房屋配置_10").checked;
	var pw12 = document.getElementById("房屋配置_11").checked;
	var pw13 = document.getElementById("房屋配置_12").checked;
	var pw14 = document.getElementById("房屋配置_13").checked;
	var pw15 = document.getElementById("房屋配置_14").checked;
    if (pw1 || pw2 || pw3 || pw4 || pw5 || pw6 || pw7 || pw8 || pw9 || pw10 || pw11 || pw12 || pw13 || pw14 || pw15) {
        document.getElementById("equipmentBtn").style.backgroundColor = "springgreen";
    }
}

//出租要求
function ad10() {
    var pw1 = document.getElementById("出租要求_0").checked;
    var pw2 = document.getElementById("出租要求_1").checked;
	var pw3 = document.getElementById("出租要求_2").checked;
	var pw4 = document.getElementById("出租要求_3").checked;
	var pw5 = document.getElementById("出租要求_4").checked;
	var pw6 = document.getElementById("出租要求_5").checked;
    if (pw1 || pw2 || pw3 || pw4 || pw5 || pw6) {
        document.getElementById("demandBtn").style.backgroundColor = "springgreen";
    }
}

//租金所包含费用
function ad11() {
    var pw1 = document.getElementById("租金所包含费用_0").checked;
    var pw2 = document.getElementById("租金所包含费用_1").checked;
	var pw3 = document.getElementById("租金所包含费用_2").checked;
	var pw4 = document.getElementById("租金所包含费用_3").checked;
	var pw5 = document.getElementById("租金所包含费用_4").checked;
	var pw6 = document.getElementById("租金所包含费用_5").checked;
	var pw7 = document.getElementById("租金所包含费用_6").checked;
    if (pw1 || pw2 || pw3 || pw4 || pw5 || pw6 || pw7) {
        document.getElementById("priceIncludeBtn").style.backgroundColor = "springgreen";
    }
}

//您的身份
function ad12() {
    var pw1 = document.getElementById("您的身份_0").checked;
    var pw2 = document.getElementById("您的身份_1").checked;
	var pw3 = document.getElementById("您的身份_2").checked;
    if (pw1 || pw2 || pw3) {
        document.getElementById("identityBtn").style.backgroundColor = "springgreen";
    }
}