//  JavaScript Digital clock 

        // Create a time data function
        function currentTime() {
        // Declare variables
        var d = new Date(); // Get current date
        var hr = d.getHours(); // Get current hours
        var min = d.getMinutes(); // Get current minutes
        var sec = d.getSeconds(); // Get current seconds
        var ampm; // Declare empty variable to store AM or PM 

        var utchr = d.getUTCHours(); // Get GMT hours
        var timeDiff = hr - utchr; // Calculate the time difference between local and GMT
        var adjTimeDiff = timeDiff < 0 ? timeDiff + 24 : timeDiff; // Adjust negative difference
        var timezone; // To store time zone (PT, MT, CT, ET)

        // Add 0 to single digits for seconds
        if (sec < 10) {
            sec = "0" + sec;
        }

        // Add 0 to single digits for minutes
        if (min < 10) {
            min = "0" + min;
        }

        // Determine AM or PM string
        if (hr == 12) {
            ampm = "PM"; // Set to PM
        } else if (hr > 12) {
            hr -= 12; // Deduct 12 from hours greater than 12 (military time)
            ampm = "PM"; // Set to PM
        } else {
            ampm = "AM"; // Set to AM
        }

        // Adjusted Time Difference Calculation
        // Adjust time difference based on GMT-7 for Pacific Time during daylight savings
        if (adjTimeDiff >= 0 && adjTimeDiff < 7) {
            timezone = "PT"; // Pacific Time Zone (GMT-7 during daylight saving time)
        } else if (adjTimeDiff >= 7 && adjTimeDiff < 10) {
            timezone = "MT"; // Mountain Time Zone
        } else if (adjTimeDiff >= 10 && adjTimeDiff < 13) {
            timezone = "CT"; // Central Time Zone
        } else if (adjTimeDiff >= 13 && adjTimeDiff < 16) {
            timezone = "ET"; // Eastern Time Zone
        } else {
            timezone = "Unknown Timezone"; // Fallback for other time differences
        }

        // Assemble time format to display
        var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timezone;

        // Display current local time and time zone on HTML element
        document.getElementById("clock").innerText = time; 
    }

    // Initial run of time data function
    currentTime();

    // Run time data function every 1 second
    setInterval(currentTime, 1000);


