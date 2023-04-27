// Get the HTML elements
const scanBtn = document.querySelector("#scan-btn");
const resultDiv = document.querySelector("#result-div");

const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ 
  video: { 
    facingMode: { 
      exact: 'environment' // Use the back camera 
      //exact: 'user' // Use the front camera 
    } 
  } 
})
.then(stream => {
  video.srcObject = stream;
})
.catch(error => {
  console.error(error);
});


