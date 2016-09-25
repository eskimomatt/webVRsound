
jQuery(document).ready(function($) {
  amount =10;
  angle = 0;
  step = (2*Math.PI) / amount;
  radius=10;
  angle=0;
  for(var i=0;i<amount;i++){
    var x = Math.round(radius * Math.cos(angle)),
        y = Math.round(radius * Math.sin(angle));
    $('a-scene').append('<a-entity position="'+x+' 0 '+y+'" cursor-listener><a-collada-model src="#bird" rotation="0 '+(angle*180)+' 0" scale="18 18 18"></a-collada-model><a-animation begin="mouseenter" attribute="rotation" to="0 360 0" dur="2000" fill="both" repeat="indefinite" easing="linear"></a-animation><a-animation begin="mouseleave" attribute="rotation" to="0 0 0" dur="2000" fill="both" easing="ease" repeat="none"></a-animation></a-entity>');
    angle += step;
  }



  // Component to change to random color on click.
  AFRAME.registerComponent('click-color-change', {
    init: function () {
      var COLORS = ['red', 'green', 'blue'];
      this.el.addEventListener('click', function () {
        var randomIndex = Math.floor(Math.random() * COLORS.length);
        this.setAttribute('material', 'color', COLORS[randomIndex]);
        console.log('I was clicked!');
      });
    }
  });
});

/* 
AUDIO STUFF
https://threejs.org/docs/index.html#Reference/Loaders/AudioLoader
*/

var scene = $('#scene');
var camera = $('#camera');

// instantiate a listener
var audioListener = new THREE.AudioListener();

// add the listener to the camera
camera.add( audioListener );

// instantiate audio object
var ukeSound = new THREE.Audio( audioListener );

// add the audio object to the scene
scene.add( ukeSound );

// instantiate a loader
var loader = new THREE.AudioLoader();

// load a resource
loader.load(
  // resource URL
  './mp3/uke.mp3',
  // Function when resource is loaded
  function ( audioBuffer ) {
    // set the audio object buffer to the loaded object
    ukeSound.setBuffer( audioBuffer );

    // play the audio
    ukeSound.play();
  },
  // Function called when download progresses
  function ( xhr ) {
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
  },
  // Function called when download errors
  function ( xhr ) {
    console.log( 'An error happened' );
  }
);

/* 
AUDIO STUFF -- END
*/

