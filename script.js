const countdown = () => {
    const weddingDate = new Date("Nov 15, 2024 10:00:00").getTime();
    const now = new Date().getTime();
    const timeDiff = weddingDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeDiff < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "Đã đến ngày cưới!";
    }
};

const countdownInterval = setInterval(countdown, 1000);
