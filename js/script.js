// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function calcWage() {
    let rates = parseFloat(document.getElementById("rate").value);
    let hour = parseFloat(document.getElementById("hours").value);
    resultNoTax = rates * hour
    resultTax = resultNoTax * 0.2005
    resultPostTax = resultNoTax - resultTax
    document.getElementById("answerNoTax").innerHTML = "Pay without tax:" + "$" + resultNoTax.toFixed(2);
    document.getElementById("answerTax").innerHTML = "Tax price:" + "$" + resultTax.toFixed(2);
    document.getElementById("answerPostTax").innerHTML = "Pay after tax:" + "$"+resultPostTax.toFixed(2);
}