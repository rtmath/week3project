$(document).ready(function() {

  $('form#numInput').submit(function(event) {
    event.preventDefault();
    $('#list').empty();

    var input = getInput(input);
    var numbers = getNumArray(input);
    var pongifiedNumbers = pongifyArray(numbers);
    var speed = parseInt(($('#speedSlider').val())) * -1;
    $('._hidden').fadeIn().addClass('.list_center');
    if (withinRange(input) === true) {
      createList(pongifiedNumbers);
      $('#output').text(displayCount(pongifiedNumbers));
      $("#output li").linearFadeIn(speed);
    } else {
      alert("Number must be within range. Please enter a valid number between 1 and 100.")
    }
  });
});

function getInput(string) {
  return string = parseInt($('#userInput').val());
}

function withinRange(number) {
  if (number > 0 && number <= 100) {
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

function createList(array) {
  for (var i = 0; i < array.length; i++) {
      $('#list').append('<div class="bordered"><li></li></div>');
  }
}

function displayCount(array) {
  switchBit = 0;
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + "";
      if (array[i] === "pong") {
        $('li').eq(i).text(array[i]).addClass("text_pong");
        $('li').eq(i).addClass("move_right");
      } else if  (array[i] === "ping") {
        $('li').eq(i).text(array[i]).addClass("text_ping");
        $('li').eq(i).addClass("ping move_left");
      } else if (array[i] === "ping-pong") {
        if (switchBit === 0) {
          $('li').eq(i).text(array[i]).addClass("text_pingpong");
          $('li').eq(i).addClass("pingpongAnimLeft");
        } else if (switchBit === 1) {
          $('li').eq(i).text(array[i]).addClass("text_pingpong");
          $('li').eq(i).addClass("pingpongAnimRight");
        }
        switchBit ^= 1;
      } else {
        $('li').eq(i).text(array[i]);
    }
  }
}

$.fn.linearFadeIn = function(time) {
  var index = 0;
  var self = this;

  function next() {
      if (index < self.length) {
          self.eq(index++).fadeIn(time, next);
      }
  }
  next();
}
