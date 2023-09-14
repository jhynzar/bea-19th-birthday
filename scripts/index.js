// 1. Timer
// 2. Click to Turn
// 3. Turn
// 4. Click to Open Gift
// 5. Zoom in
// 6. Happy Birthday

// Timer Function
function isoToObj(s) {
  var b = s.split(/[-TZ:]/i);

  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]));

}


function timeToGo(s) {

  // Utility to add leading zero
  function z(n) {
    return (n < 10? '0' : '') + n;
  }

  // Convert string to date object
  var d = isoToObj(s);
  var diff = d - new Date();

  // Allow for previous times
  var sign = diff < 0? '-' : '';
  diff = Math.abs(diff);

  // Get time components
  var hours = diff/3.6e6 | 0;
  var mins  = diff%3.6e6 / 6e4 | 0;
  var secs  = Math.round(diff%6e4 / 1e3);

  // Return formatted string
  return sign + z(hours) + ':' + z(mins) + ':' + z(secs);   
}

// Timer function end

let updateTimer = () => {
  let timerSpan = document.querySelector('.timer__text');
  let timerText = timeToGo('2023-09-14T16:00:00.000Z');

  timerSpan.innerHTML = timerText;
}

// Timer
updateTimer();
setInterval(() => {
  updateTimer();
}, 1000)


// Click to Turn
let gift = document.querySelector('.gift');
let giftCover = document.querySelector('.gift-cover'); //For part 1 animation (turn)


let addGiftTurn = () => {
  gift.classList.add('animate__turn');
  giftCover.classList.add('animate__turn');
  console.log('hehe');
}



gift.onclick = () => {
  // Turn
  addGiftTurn();

  // Click to Open Gift
  setTimeout(() => {

    let giftPart2 = document.querySelector('.gift-part2'); // For part 2 animation
    let giftPart2Cover = document.querySelector('.gift-part2-cover'); // For part 2 animation (open)
    let giftPart2CoverLabel = document.querySelector('.gift-part2-cover__label'); // For part 2 animation (open)
    
    

    let addOpenGift = () => {
      giftPart2Cover.classList.add('animate__open-gift');
      giftPart2CoverLabel.classList.add('animate__open-gift');
    }
    // Add event listener to giftCover
    giftPart2Cover.onclick = () => {
      console.log('chenen');
      addOpenGift();

      setTimeout(() => {
        let giftPart2Inside = document.querySelector('.gift-inside'); // For part 2 animation
        giftPart2Inside.classList.add('animate__zoom-in');
      }, 3000);
    }

    
    giftPart2.classList.add('reveal');
    
    
  }, 1800);
}

