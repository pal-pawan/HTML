function setDate() {
    const now = new Date();
    
    // Set analogue watch hands
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    var hours = now.getHours();
    if (hours > 12){
      hours = hours - 12;}
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    const secondDeg = ((seconds / 60) * 360) + 90;
    const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  
    // Set digital watch time
    const hoursDisplay = document.querySelector('#hours');
    const minutesDisplay = document.querySelector('#minutes');
    const secondsDisplay = document.querySelector('#seconds');
    hoursDisplay.textContent = (hours < 10) ? `0${hours}` : hours;
    minutesDisplay.textContent = (minutes < 10) ? `0${minutes}` : minutes;
    secondsDisplay.textContent = (seconds < 10) ? `0${seconds}` : seconds;
  }
  
  setInterval(setDate, 1000);
  