document.addEventListener('DOMContentLoaded', function () {
  // DOM imports
  let input = document.getElementById('formInput');
  let inputButton1 = document.getElementById('inputButton1');
  let inputButton2 = document.getElementById('inputButton2');
  let output = document.getElementById('answer');
  let resetButton = document.getElementById('reset');
  
  let result1 = '';
  let result2 = '';

  // DATA
  let library = {
    MV: 4000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

 

  const translate1 = (String) => {
    if (result1 !== '') {
      return
    }
    
    let arabicNumber = parseInt(String);
    // number repeats 1-3
    // 4 has special charactor
    // 5 has special charactor
    // 9 has special charactor
    // number repeats after 5 in 6-8
    // logic
    // find biggest character in roman letter
    // subtract the inputted number and add charcter to the result -- repeat


    // Smart version
    for (let key in library) {
      // search every value in library
      while (arabicNumber >= library[key]) {
        // when arabicNumber is grater than key values, perform below
        result1 += key;
        // if the inputted value is grater, add key to the result
        arabicNumber -= library[key];
        // subtract arabic number of the amount added to the result
      }
    }
    return result1;
    // repeat
  } 
  // 노가다 버젼

  const translate2 = (String) => {
    if (result2 !== '') {
      return
    }

    let inputtedNum = parseInt(String)

    while (inputtedNum > 0) {
      if (inputtedNum >= 4000) {
        result2 += "MV";
        inputtedNum -= 4000
      }
      else if (inputtedNum >= 1000) {
        result2 += "M";
        inputtedNum -= 1000
      }
      else if (inputtedNum >= 900) {
        result2 += "CM";
        inputtedNum -= 900
      }
      else if (inputtedNum >= 500) {
        result2 += "D";
        inputtedNum -= 500
      }
      else if (inputtedNum >= 400) {
        result2 += "CD";
        inputtedNum -= 400
      }
      else if (inputtedNum >= 100) {
        result2 += "C";
        inputtedNum -= 100
      }
      else if (inputtedNum >= 90) {
        result2 += "XC";
        inputtedNum -= 90
      }
      else if (inputtedNum >= 50) {
        result2 += "L";
        inputtedNum -= 50
      }
      else if (inputtedNum >= 40) {
        result2 += "XL";
        inputtedNum -= 40
      }
      else if (inputtedNum >= 10) {
        result2 += "X";
        inputtedNum -= 10
      }
      else if (inputtedNum >= 9) {
        result2 += "IX";
        inputtedNum -= 9
      }
      else if (inputtedNum >= 5) {
        result2 += "V";
        inputtedNum -= 5
      }
      else if (inputtedNum >= 4) {
        result2 += "IV";
        inputtedNum -= 4
      }
      else if (inputtedNum >= 1) {
        result2 += "I";
        inputtedNum -= 1
      }

    }

  }
  
  const resetResult = (e) => {
    e.preventDefault();
    result1 = '';
    result2 = '';
    output.innerHTML = '';
  }

  const validate = (String) => {
    if ( Number.isInteger(Number(String))) {
      return true;
    } else {
      return false;
    }
  }

  const calculate1 = (e) => {
    e.preventDefault();

    // input validation
    if (input.value === '0') {
      alert('Please input valid number only')
    } else if (!validate(input.value)) {
      alert('Plase input valid integer number only, no decimal either')
    } else if (parseInt(input.value) > 8999) {
      alert('The maximum value is 8999')
    } else {
      translate1(input.value)
      console.log(result1);
      output.innerHTML = result1;
    }
    
  }
  
  const calculate2 = (e) => {
    e.preventDefault();
    
    // input validation
    if (input.value === '0') {
      alert('Please input valid number only')
    } else if (!validate(input.value)) {
      alert('Plase input valid integer number only, no decimal either')
    } else if (parseInt(input.value) > 8999) {
      alert('The maximum value is 8999')
    } else {
      translate2(input.value)
      console.log(result2);
      output.innerHTML = result1;
      
    }

  }
  
  inputButton1.addEventListener('click', (e) => calculate1(e));
  inputButton2.addEventListener('click', (e) => calculate2(e));
  resetButton.addEventListener('click', (e) => resetResult(e));
})
