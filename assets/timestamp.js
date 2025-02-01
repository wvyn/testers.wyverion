
function updateTimestamp() {
    const eventTime = new Date(1738530000000);
    const formattedEventTime = eventTime.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const timestampElement = document.getElementById("timestamp");
    if (timestampElement) timestampElement.innerHTML = `${formattedEventTime}`;

    const currentTime = new Date();
    const diffInSeconds = Math.abs(Math.round((currentTime - eventTime) / 1000));
    const diffInMinutes = Math.abs(Math.round(diffInSeconds / 60));
    const diffInHours = Math.abs(Math.round(diffInMinutes / 60));
    const diffInDays = Math.abs(Math.round(diffInHours / 24));

    let relativeTime = "";

    if (diffInSeconds < 60) {
        relativeTime = diffInSeconds + " seconds ago";
    } else if (diffInMinutes < 60) {
        relativeTime = diffInMinutes + " minutes ago";
    } else if (diffInHours < 24) {
        relativeTime = diffInHours + " hours ago";
    } else {
        relativeTime = diffInDays + " days ago";
    }

    if (eventTime > currentTime) {
        if (diffInSeconds < 60) {
            relativeTime = "In " + diffInSeconds + " seconds";
        } else if (diffInMinutes < 60) {
            relativeTime = "In " + diffInMinutes + " minutes";
        } else if (diffInHours < 24) {
            relativeTime = "In " + diffInHours + " hours";
        } else {
            relativeTime = "In " + diffInDays + " days";
        }
    }

    const timestampRelativeElement = document.getElementById("timestamp-relative");
    if (timestampRelativeElement) timestampRelativeElement.innerHTML = relativeTime;
}

setInterval(updateTimestamp, 1000);
updateTimestamp();