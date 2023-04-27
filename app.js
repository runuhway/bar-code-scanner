// Get the HTML elements
const scanBtn = document.querySelector("#scan-btn");
const resultDiv = document.querySelector("#result-div");
const stream = await navigator.mediaDevices.getUserMedia({ video: true });


// Add a click event listener to the scan button
scanBtn.addEventListener("click", async () => {
  try {
    // Get access to the device camera
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Create a new instance of the ZXing barcode reader
    const codeReader = new ZXing.BrowserBarcodeReader();

    // Decode the barcode image from the camera stream
    const result = await codeReader.decodeFromStream(stream);

    // Update the content of the result div with the barcode data
    resultDiv.textContent = result.text;

    // Stop the camera stream
    stream.getTracks().forEach((track) => track.stop());
  } catch (error) {
    console.error(error);
  }
});
