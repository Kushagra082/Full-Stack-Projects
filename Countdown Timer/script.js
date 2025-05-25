// const endDate = new Date("10 Mar, 2025 20:00:00").getTime();
// const startDate = new Date().getTime();

let x; // Variable to store the setInterval reference

function startCountdown() {
    // Get user input values
    const startDateInput = document.getElementById("start-date").value;
    const endDateInput = document.getElementById("end-date").value;

    // Convert user input to timestamps (milliseconds)
    const startDate = new Date(startDateInput).getTime();
    const endDate = new Date(endDateInput).getTime();
    
    // Validation: Ensure valid dates and that end date is after start date
    if (isNaN(startDate) || isNaN(endDate) || endDate <= startDate) {
        alert("Please enter valid Start and End Dates (End Date must be after Start Date).");
        return;
    }

    // Clear any existing timer
    clearInterval(x);

    // Start countdown
    x = setInterval(function updateTimer() {
        const now = new Date().getTime();
        const distanceCovered = now - startDate;
        const distancePending = endDate - now;

        // calculate days, hrs, mins, secs
        // time -> milliseconds
        // 1 day = 24 * 60 * 60 * 1000 ms

        const oneDayInMillis = (24 * 60 * 60 * 1000)
        const oneHourInMillis = (60 * 60 * 1000)
        const oneMinuteInMillis = (60 * 1000)
        const oneSecondInMillis = (1000)

        const days = Math.floor(distancePending / oneDayInMillis);
        const hrs = Math.floor(distancePending % oneDayInMillis / oneHourInMillis);
        const mins = Math.floor(distancePending % oneHourInMillis / oneMinuteInMillis);
        const secs = Math.floor(distancePending % oneMinuteInMillis / oneSecondInMillis); 

        // populate in UI
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hrs;
        document.getElementById("minutes").innerHTML = mins;
        document.getElementById("seconds").innerHTML = secs;

        // Calculate progress percentage
        const totalDistance = endDate - startDate;
        const percentageDistance = (distanceCovered / totalDistance) * 100;

        // set width for progress bar
        document.getElementById("progress-bar").style.width = percentageDistance + "%";

        // If countdown is over
        if(distancePending < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
            document.getElementById("progress-bar").style.width = "100%";
        }
    }, 1000);
}