
var containersDec = document.querySelectorAll('.option-cnt .dec'),
    containersInc = document.querySelectorAll('.option-cnt .inc'),
    containersInput = document.querySelectorAll('.option-cnt input');

/*
for(var i=0; i < containersDec.length; i++){
    containersDec[i].addEventListener('click', function () {
      var currVal = Number(this.parentNode.children[2].value);
      this.parentNode.children[2].value = currVal - 1;
      getValues();
    }, false);
}*/
var timeInt ;
var isMouseDown = false;
for(var i=0; i < containersDec.length; i++){
    containersDec[i].onmousedown = function () {
      $this = this;
      var currVal = Number($this.parentNode.children[2].value);
      $this.parentNode.children[2].value = currVal - 1;
      isMouseDown = true;
      setTimeout(function () {
        if(isMouseDown)
          timeInt = setInterval(function () {
            var currVal = Number($this.parentNode.children[2].value);
            $this.parentNode.children[2].value = currVal - 1;
          },30);
      },1000);
    }
    containersDec[i].onmouseup = function () {
      isMouseDown = false;
      clearInterval(timeInt);
      getValues();
    }
}

for(var i=0; i < containersInc.length; i++){
    containersInc[i].onmousedown = function () {
      $this = this;
      var currVal = Number($this.parentNode.children[2].value);
      $this.parentNode.children[2].value = currVal + 1;
      isMouseDown = true;
      setTimeout(function () {
        if(isMouseDown)
        timeInt = setInterval(function () {
          var currVal = Number($this.parentNode.children[2].value);
          $this.parentNode.children[2].value = currVal + 1;
        },30);
      },1000);
    }
    containersInc[i].onmouseup = function () {
      isMouseDown = false;
      clearInterval(timeInt);
      getValues();
    }
}


for(var i=0; i < containersInput.length; i++){
    containersInput[i].addEventListener('click', function () {
      getValues();
    }, false);
}

for(var i=0; i < containersInput.length; i++){
    containersInput[i].addEventListener('input', function () {
          getValues();
    }, false);
}
var getValues = function () {
  var hasChanged = false;
  var tempVal = document.getElementsByClassName('option-cnt')[0].children[2].value;
  outerCircle = tempVal == "NaN" ? 0 : tempVal;
  hasChanged = hasChanged || tempVal != outerCircle? true : false;

  tempVal = document.getElementsByClassName('option-cnt')[1].children[2].value;
  smallCircle = tempVal == "NaN" ? 0 : tempVal;
  hasChanged = hasChanged || tempVal != smallCircle? true : false;

  tempVal = document.getElementsByClassName('option-cnt')[2].children[2].value;
  penDist = tempVal == "NaN" ? 0 : tempVal;
  if(penDist >= smallCircle) {
    penDist = document.getElementsByClassName('option-cnt')[2].children[2].value = smallCircle-1;
  }
  if(penDist < 1) {
    penDist = document.getElementsByClassName('option-cnt')[2].children[2].value = 1;
  }
  hasChanged = hasChanged || tempVal != penDist? true : false;

  tempVal = document.getElementsByClassName('option-cnt')[3].children[2].value;
  rotations = tempVal == "NaN" ? 0 : tempVal;
  hasChanged = hasChanged || tempVal != rotations? true : false;

  tempVal = document.getElementsByClassName('option-cnt')[4].children[2].value;
  deltaAngle = tempVal == "NaN" ? 0 : tempVal;
  if(deltaAngle < 1) {
    deltaAngle = 1;
    document.getElementsByClassName('option-cnt')[4].children[2].value=1;
  }
  hasChanged = hasChanged || tempVal != deltaAngle? true : false;

  tempVal = document.querySelector('.option-cnt.isanimate input:checked');
  animate = tempVal ? true : false;
  hasChanged = hasChanged || tempVal != animate? true : false;

  tempVal = document.querySelector('.option-cnt.isouter input:checked');
  showOuterC = tempVal ? true : false;
  hasChanged = hasChanged || tempVal != showOuterC? true : false;

  tempVal = document.querySelector('.option-cnt.isinner input:checked');
  showInnerC = tempVal ? true : false;
  hasChanged = hasChanged || tempVal != showInnerC? true : false;

  startRender();
};

var pngConvert = document.getElementById("savetopng");
var DownloadPng = document.getElementById("downloadbutton");

pngConvert.onclick = function () {
  canvas2png();
};
DownloadPng.onclick = function () {
  download2png();
};


var canvas2png = function () {
  var w=window.open('about:blank','image from canvas');
 w.document.write("<img src='"+c.toDataURL("image/png")+"' alt='from canvas'/>");

};
var download2png = function () {
  var val = Canvas2Image.saveAsPNG(c,w,h,"png",false);
  var a = document.getElementById('downloadlink'); //or grab it by tagname etc
  a.href = val;
  a.classList.remove("btn-gray");
  a.classList.remove("disabled");
  a.classList.add("btn-green");
}
