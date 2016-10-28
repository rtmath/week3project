$(document).ready(function() {

  function getInput(string) {
    return string = parseInt($('#userInput').val());
  }

  function withinRange(number) {
    if (number > 0 && number <= 1000) {
      return true;
    } else {
      return false;
    }
  }

  function getNumArray(numCeiling) {
    var list = [];
    for (i = 1; i <= numCeiling; i++) {
      list.push(i);
    }
    return list;
  }

  function pongifyArray(array) {
    for (var i = 0; i < array.length; i++) {
      if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
        array[i] = "ping-pong";
      } else if (array[i] % 5 === 0) {
        array[i] = "pong";
      } else if (array[i] % 3 === 0) {
        array[i] = "ping";
      }
    }
    return array;
  }

  function count(array) {
    var ul = document.getElementById("list");
    for (var i = 0; i < array.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(array[i]))
      ul.appendChild(li);
    }
  }

  $('form#numInput').submit(function(event) {
    event.preventDefault();
    var input = getInput(input);
    var numbers = getNumArray(input);
    var pongifiedNumbers = pongifyArray(numbers);
    if (withinRange(input) === true) {
      $('#output').text(count(pongifiedNumbers));
    } else {
      alert("Number must be within range. Please enter a valid number between 1 and 1000.")
    }
  });
});
