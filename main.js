
jQuery(document).ready(function($) {
  amount =4;
  angle = 0;
  step = (2*Math.PI) / amount;
  radius=20;
  angle=0;

  sounds = [
    'mp3/accordian.mp3',
    'mp3/bass.mp3',
    'mp3/clarinet.mp3',
    'mp3/uke.mp3'
  ]

 
  for(var i=0;i<amount;i++){
    var x = Math.round(radius * Math.cos(angle)),
        y = Math.round(radius * Math.sin(angle));

    var str = 'sound="src: url('+sounds[i]+'); autoplay: true;loop:true;"';
    $('a-scene').append('<a-entity position="'+x+' 0 '+y+'" cursor-listener '+str+' id="bird'+i+'"><a-collada-model src="#bird" rotation="0 '+(angle*180)+' 0" scale="18 18 18"></a-collada-model><a-animation begin="mouseenter" attribute="rotation" to="0 360 0" dur="2000" fill="both" repeat="indefinite" easing="linear"></a-animation><a-animation begin="mouseleave" attribute="rotation" to="0 0 0" dur="2000" fill="both" easing="ease" repeat="none"></a-animation></a-entity>');

    angle += step;
  }


/*
  innerAngleInDegrees= 30;
  outerAngleInDegrees= 30;
  outerGainFactor =1;

  var entity = new THREE.PositionalAudio(document.querySelector('[sound]').components.sound.sound);
  var panner = entity.getOutput();
  panner.coneInnerAngle = innerAngleInDegrees;
  panner.coneOuterAngle = outerAngleInDegrees;
  panner.coneOuterGain = outerGainFactor;
*/
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



