const camarafeed = document.getElementById('camerafeed');
const launchCamera = document.getElementById('launchCamera');
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        camarafeed.srcObject = stream;})
    .catch((err) => {
        console.error("Error accessing camera: ", err);
    });