const twitter = document.getElementById('twitter');
const youtube = document.getElementById('youtube');
const facebook = document.getElementById('facebook');

const maxTwitter = 12000;
const maxYoutube = 5000;
const maxFacebook = 7500;

const incrementValue = 200;

let n = 0;

function incrementCounters() {
    if (n <= Math.max(maxTwitter, maxYoutube, maxFacebook)) {
        n++;

        if (parseInt(twitter.innerText) < maxTwitter) {
            twitter.innerText = Math.min(parseInt(twitter.innerText) + n + incrementValue, maxTwitter);
        }

        if (parseInt(youtube.innerText) < maxYoutube) {
            youtube.innerText = Math.min(parseInt(youtube.innerText) + n + incrementValue, maxYoutube);
        }

        if (parseInt(facebook.innerText) < maxFacebook) {
            facebook.innerText = Math.min(parseInt(facebook.innerText) + n + incrementValue, maxFacebook);
        }

        setTimeout(incrementCounters, 10); // Add a delay of 100 milliseconds
    }
}

incrementCounters(); // Start the incrementing process