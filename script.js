function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    clockElement.textContent = timeString;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initial update
  updateClock();
