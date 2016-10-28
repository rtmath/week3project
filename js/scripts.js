$(document).ready(function() {

  $('form#numInput').submit(function(event) {
    event.preventDefault();
    $('#list').empty();
    var input = getInput(input);
    var numbers = getNumArray(input);
    var pongifiedNumbers = pongifyArray(numbers);
    if (withinRange(input) === true) {
      $('#output').text(displayCount(pongifiedNumbers));
      $("#output li").linearFadeIn(400);
    } else {
      alert("Number must be within range. Please enter a valid number between 1 and 1000.")
    }
  });
});

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

function displayCount(array) {
  for (var i = 0; i < array.length; i++) {
    $('#list').append('<li>' + array[i] + '</li>');
  }
}

$.fn.linearFadeIn = function(time) {
  var index = 0;
  var self = this;

  function next() {
    console.log(index);
      if (index < self.length) {
          self.eq(index++).fadeIn(time, next);
      }
  }
  next();
}
