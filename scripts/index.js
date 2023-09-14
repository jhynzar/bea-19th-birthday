// 1. Timer
// 2. Click to Turn
// 3. Turn
// 4. Click to Open Gift
// 5. Zoom in
// 6. Happy Birthday


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

