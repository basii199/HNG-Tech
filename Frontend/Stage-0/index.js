const curtime = document.querySelector(".time")

function getCurrentTimeUTC() {
  const now = new Date();
  return now.getUTCHours().toString().padStart(2, '0') + ":" +
         now.getUTCMinutes().toString().padStart(2, '0') + ":" +
         now.getUTCSeconds().toString().padStart(2, '0');
}

// Example usage:
console.log(getCurrentTimeUTC()); // Output: "15:10:27" (Example)

curtime.innerHTML = getCurrentTimeUTC()

setInterval(()=>{
  curtime.innerHTML = getCurrentTimeUTC()
},1000)