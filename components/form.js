export default function PageWithJSbasedForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        first: event.target.first.value,
        last: event.target.last.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`Is this your full name: ${result.data}`)
    }
  
  // const sendAudioFile = file => {
  //     const formData = new FormData();
  //     formData.append('audio-file', file);
  //     return fetch('http://localhost:3000/api/audioUpload', {
  //       method: 'POST',
  //       body: formData
  //     });
  //   };

//   var saveBlob = async () => (function () {
//     var a = document.getElementById("blob");
//     return function (blob, fileName) {
//         a.href = blob;
//         a.download = fileName;
//         a.click();
//         window.URL.revokeObjectURL(url);
//     };
// }());


// const recordAudio = () =>
// new Promise(async resolve => {
//   const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//   const mediaRecorder = new MediaRecorder(stream);
//   const audioChunks = [];

//   mediaRecorder.addEventListener("dataavailable", event => {
//     audioChunks.push(event.data);
//   });

//   const start = () => mediaRecorder.start();

//   const stop = () =>
//     new Promise(resolve => {
//       mediaRecorder.addEventListener("stop", () => {
//         const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });


//           // sendAudioFile(audioBlob);
//       //   var xhr=new XMLHttpRequest();
//       //   xhr.onload=function(e) {
//       //     if(this.readyState === 4) {
//       //       console.log("Server returned: ",e.target.responseText);
//       //     }
//       //   };
//       //   var fd=new FormData();
//       //   fd.append("audio_data", audioBlob, "filename");
//       //   xhr.open("POST","upload.php",true);
//       //   xhr.send(fd);

//         const audioUrl = URL.createObjectURL(audioBlob);

//         saveBlob(audioUrl, 'test.zip');
//         const audio = new Audio(audioUrl);
//         const play = () => audio.play();
//         resolve({ audioBlob, audioUrl, play });
// });

//       mediaRecorder.stop();
//     });

//   resolve({ start, stop });
// });

// const sleep = time => new Promise(resolve => setTimeout(resolve, time));

// const handleAction = async () => {
// const recorder = await recordAudio();
// const actionButton = document.getElementById("action");
// actionButton.disabled = true;
// recorder.start();
// await sleep(3000);
// const audio = await recorder.stop();
// audio.play();
// await sleep(3000);
// actionButton.disabled = false;
// console.log("recorded")
// };



    return (
      // We pass the event to the handleSubmit() function on submit.

      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
  
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
  
        <button type="submit">Submit</button>

        {/* <button id="action" onClick={handleAction}>Start recording...</button>
        <a id="blob"></a> */}
      </form>
    )
  }
  