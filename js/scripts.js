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
    else if (saveInteger < 5 && saveInteger >= 1){
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

function romanize2(integer){
  var hash = {};
  hash['F'] = 4000;
  hash['M'] = 1000;
  hash['D'] = 500;
  hash['C'] = 100;
  hash['L'] = 50;
  hash['X'] = 10;
  hash['V'] = 5;
  hash['I'] = 1;

  var keys = [];
  var results = "";
  var saveInteger = integer;

  for (var key in hash) {
    keys.push(key);
  }

  // for (var i = 0; i < keys.length; i++) {
  //   var letter = keys[i];
  //   var value = hash[keys[i]];
  //   var higherValue = hash[keys[i - 1]];
  //   if ( saveInteger < higherValue && saveInteger >= value ) {
  //     for (var j = saveInteger; j >= value; j -= value){
  //       results = results + letter;
  //       saveInteger -= value;
  //     }
  //   }
  // }

  keys.forEach(function(element, index, array){
    var letter = element;
    var value = hash[element];
    var higherValue = hash[keys[index - 1]];
    if ( saveInteger < higherValue && saveInteger >= value ) {
        for (var j = saveInteger; j >= value; j -= value){
          results = results + letter;
          saveInteger -= value;
        }
      }
  });
  return results;
}

function refactor2(integer){
  var numeral = romanize2(integer);
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
    var start = performance.now();
    var results = refactor2(number);
    var end = performance.now();
    console.log(end - start);
    $("p#results").text(results);
    event.preventDefault();
  });
});
