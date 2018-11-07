
const fileInput = document.getElementById('uploadFile');

fileInput.onchange = function (e) {
  console.log(e);
  console.log(fileInput.files);

  var file = fileInput.files[0];
  var fileReader = new FileReader();
  fileReader.onload = function (e) {
    var result = e.target.result;
    console.log(result);

    var audioContext = new window.AudioContext();
    console.log('audioContext: ', audioContext);
    audioContext.decodeAudioData(result, function (buffer) {
      console.log(buffer);

      var audioBufferSourceNode = audioContext.createBufferSource();
      audioBufferSourceNode.buffer = buffer;
      audioBufferSourceNode.connect(audioContext.destination);
      audioBufferSourceNode.start(0);
    });
  }
  fileReader.readAsArrayBuffer(file);
}