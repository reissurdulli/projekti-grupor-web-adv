let completedFlights = 0;
const totalFlights = 100;

function updateProgress() {
  const flightsInput = document.getElementById('flightsInput');
  const addedFlights = parseInt(flightsInput.value);

  if (!isNaN(addedFlights) && addedFlights > 0) {
    completedFlights += addedFlights;
    if (completedFlights > totalFlights) completedFlights = totalFlights;
    const progressPercent = (completedFlights / totalFlights) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';
    document.getElementById('progressText').innerText = `You have completed ${completedFlights} out of ${totalFlights} flights`;
    flightsInput.value = '';
  } else {
    alert('Please enter a valid number of flights');
  }
}

function claimReward(tier) {
  alert(`Congratulations! You have claimed your ${tier} reward!`);
}