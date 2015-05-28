function romanize(integer) {
  var results = "";
  var saveInteger = integer;
  while(saveInteger > 0){
    if(saveInteger < 4000 && saveInteger >= 1000) {
      for (var i = saveInteger; i >= 1000; i -= 1000){
        results = results + "M";
        saveInteger -= 1000;
      }
    }
    else if(saveInteger < 1000 && saveInteger >= 500) {
      for (var i = saveInteger; i >= 500; i -= 500){
        results = results + "D";
        saveInteger -= 500;
      }
    }
    else if(saveInteger < 500 && saveInteger >= 100) {
      for (var i = saveInteger; i >= 100; i -= 100){
        results = results + "C";
        saveInteger -= 100;
      }
    }
    else if(saveInteger < 100 && saveInteger >= 50) {
      for (var i = saveInteger; i >= 50; i -= 50){
        results = results + "L";
        saveInteger -= 50;
      }
    }
    else if(saveInteger < 50 && saveInteger >= 10) {
      for (var i = saveInteger; i >= 10; i -= 10){
        results = results + "X";
        saveInteger -= 10;
      }
    }
    else if (saveInteger < 10 && saveInteger >= 5) {
      for (var i = saveInteger; i >= 5; i -= 5){
        results = results + "V";
        saveInteger -= 5;
      }
    }
    else if (saveInteger < 5 && saveInteger > 0){
      for (var i = saveInteger; i > 0; i--) {
        results = results + "I";
        saveInteger -= 1;
      }
    }
  }
  return results;
}


function refactor(integer){
  var numeral = romanize(integer);
  numeral = numeral.replace("DCCCC", "CM")
  numeral = numeral.replace("CCCC", "CD")
  numeral = numeral.replace("LXXXX", "XC")
  numeral = numeral.replace("XXXX", "XL")
  numeral = numeral.replace("VIIII", "IX");
  numeral = numeral.replace("IIII", "IV");
  return numeral;
}

$(function(){
  $("form#romanizeform").submit(function(event){
    var number = parseInt($("input#number").val());
    var results = refactor(number);
    $("p#results").text(results);
    event.preventDefault();
  });
});
