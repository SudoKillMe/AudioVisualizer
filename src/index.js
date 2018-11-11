// new AudioVisualizer(file | url, options)
// method: config
// method: start

var AudioContext = window.AudioContext || window.webkitAudioContext
var getElement = document.getElementById

var promise = function (target, event) {
  return new Promise(function (resolve) {
    target[event] = function (e) { resolve(e) }
  });
}

var AudioVisualizer = function (id, options) {

  var audioContext = new AudioContext;

  var listenFile = function (file) {

  }

  this.options = {};

  this.start = function () {
    console.log('id: ', id);
    console.log('getElement: ', getElement)
    console.log('document: ', document);
    var input = document.getElementById(id) 
    console.log('input: ', input);
    var inputChangePromise = promise(input, 'onchange');
    inputChangePromise.then(function () {
      console.log(input.files);
    })
  }

}

AudioVisualizer.prototype.config = function () {}

const test = new AudioVisualizer('uploadFile');
console.log(test);
test.start() 


// var fileChangePromise = function (file) {
//   return new Promise(function (resolve, reject) {
//     file.onchange = function (e) {
//       resolve(e);
//     }
//   });
// }

// userage:
// var visualizer = new AudioVisualizer('uploadFile')
// visualizer.start()

// const fileInput = document.getElementById('uploadFile');

// const CVSWIDTH = 600;
// const CVSHEIGHT = 500;

// const BARWIDTH = 10;

// const canvas = document.getElementById('canvas');
// const canvasCtx = canvas.getContext('2d');

// canvas.width = CVSWIDTH;
// canvas.height = CVSHEIGHT;

// canvasCtx.strokeRect(0,0,CVSWIDTH,CVSHEIGHT);

// let analyser;
// let array;

// fileInput.onchange = function (e) {
//   console.log(e);
//   console.log(fileInput.files);

//   var file = fileInput.files[0];
//   var fileReader = new FileReader();
//   fileReader.onload = function (e) {
//     var result = e.target.result;
//     console.log(result);

//     var audioContext = new window.AudioContext();
//     console.log('audioContext: ', audioContext);
//     audioContext.decodeAudioData(result, function (buffer) {
//       console.log(buffer);

//       var audioBufferSourceNode = audioContext.createBufferSource();
//       analyser = audioContext.createAnalyser();

//       audioBufferSourceNode.connect(analyser);
//       analyser.connect(audioContext.destination);

//       audioBufferSourceNode.buffer = buffer;
//       // audioBufferSourceNode.connect(audioContext.destination);
//       audioBufferSourceNode.start(0);


//       array = new Uint8Array(analyser.frequencyBinCount);
      
//       draw();
//     });
//   }
//   fileReader.readAsArrayBuffer(file);
// }

function draw () {
  requestAnimationFrame(draw)
  canvasCtx.clearRect(0, 0, CVSWIDTH, CVSHEIGHT);
  analyser.getByteFrequencyData(array);
  console.log('array: ', array);
  for (let i = 0; i < array.length; i += BARWIDTH) {
    canvasCtx.fillRect(i, CVSHEIGHT - array[i], BARWIDTH, array[i]);
  }

}