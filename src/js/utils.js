// Getting Current Time
// Function to format 1 in 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Creates interval
const interval = setInterval(() => {
  // Get current time
  const now = new Date();

  // Format date as hh/mm/ss
  const dateTime =
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  // Display the date and time using div # date-time
  // changed innerHTML to text content
  document.getElementById("time-now").textContent = dateTime;
}, 1000);
