// this is the function to add a zero in front of the number if the number is less than 10
function checkTime(i) {
    // condition to check the number if less than 10
    if (i < 10) {
        // adds zero in front of number
        i = "0" + i
    }

    // return the value
    return i
}

// runs on page load 
function startTime() {
    // store the time in a variable
    var currentTime = new Date()

    // declearing the variables to store the different values
    var hour = currentTime.getHours()
    var minute = currentTime.getMinutes()
    var second = currentTime.getSeconds()
 
    //change military time to standard time if hours is greater than 12
    if (hour > 12) {
        // remove 12 from hour
        hour = hour - 12;
    }

    // update variables minute and second uding the checktime function
    minute = checkTime(minute)
    second = checkTime(second)

    //select element with id="time" and change the text to the current time
    document.getElementById('time').textContent = hour + ":" + minute + ":" + second

    //recalls the function every second, time becomes dynamic
    setTimeout(function () {
        startTime()
    }, 1000)
}

// add event listener to start function so finally time will be displayed
document.getElementById('time').addEventListener('onload', startTime(), false)