//https://github.com/hongru/canvas2image

var outerCircle = 200,
smallCircle = 70;

var penDist = 50;//distance of pen point from center of small circle it is less than smallCircle R always
var currAngle = 0;
var c,
cnt,
c,
h,
w,
timer,
startRender,
rotations = 10,
animate = true,
deltaAngle = 1;

var showOuterC = true,
showInnerC = false;

var fin;
var rad2deg = Math.PI/180;
window.onload =function () {
  //window.onload = function () {
    cnt = document.getElementsByClassName('left')[0],
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    h   = cnt.clientHeight,
    w   = cnt.clientWidth;
    c.setAttribute('width', w);
    c.setAttribute('height', h);



    startRender = function () {
    console.log(outerCircle, smallCircle, penDist, rotations, deltaAngle, animate);
    clearInterval(timer);
    currAngle = 0;

    var x = w/2;
    var y = h/2;
    var timeS = Date.now();
    ctx.clearRect(0, 0, c.width, c.height);


    if(animate){

      timer = setInterval(function () {
        renderAnim(currAngle+= Number(deltaAngle),x,y);
        if(currAngle >  rotations*360) {
          clearInterval(timer);
          fin=1;
        }
        //console.log(currAngle);
      },0);
    } else {
      if(showOuterC)
        {
        ctx.beginPath();
        ctx.arc(x,y,outerCircle,0,2*Math.PI);
        ctx.strokeStyle="#DD2222";
        ctx.lineWidth=10;
        ctx.stroke();
      }
      if(showInnerC)
        {

        ctx.beginPath();
        ctx.arc(x,y,smallCircle,0,2*Math.PI);
        ctx.strokeStyle="#DD2222";
        ctx.lineWidth=3.0;
        ctx.lineCap="round";
        ctx.lineJoin="round";
        ctx.stroke();
      }
      var penX = (outerCircle - smallCircle) * Math.cos(0) + penDist*Math.cos(- 0 * (rad2deg * (outerCircle - smallCircle)/smallCircle));
      var penY = (outerCircle - smallCircle) * Math.sin(0) + penDist*Math.sin(- 0 * (rad2deg * (outerCircle - smallCircle)/smallCircle));
      ctx.moveTo(x+ penX, y+penY);
      ctx.beginPath();
      while (currAngle*deltaAngle <=  rotations*360) {
        render(currAngle+= Number(deltaAngle),x,y);
        //console.log(currAngle)
      }
      ctx.strokeStyle="#DD2222";
      ctx.lineWidth=3.0;
      ctx.lineCap="round";
      ctx.lineJoin="round";
      ctx.stroke();
      fin=1;
    }
    if(fin==1)
    var timeT = (Date.now() - timeS)/1000;
    document.getElementById("timetorender").innerHTML =timeT+"s";
    };
    startRender();


  //};
};

window.resize = function() {

  h   = cnt.clientHeight,
  w   = cnt.clientWidth;
  c.setAttribute('width', w);
  c.setAttribute('height', h);
};
var render = function(t , x , y) {
  t= t*rad2deg;
  var penX = (outerCircle - smallCircle) * Math.cos(t) + penDist*Math.cos(- t * (rad2deg*(outerCircle - smallCircle)/smallCircle));
  var penY = (outerCircle - smallCircle) * Math.sin(t) + penDist*Math.sin(- t * (rad2deg*(outerCircle - smallCircle)/smallCircle));

    ctx.lineTo(x+ penX, y+penY);
  //ctx.arc(x+ penX, y+penY,1,0,2*Math.PI);

};

var renderAnim = function(t , x , y) {
    t= t*rad2deg;
var penX = (outerCircle - smallCircle) * Math.cos(t) + penDist*Math.cos(- t * (rad2deg*(outerCircle - smallCircle)/smallCircle));
var penY = (outerCircle - smallCircle) * Math.sin(t) + penDist*Math.sin(- t * (rad2deg*(outerCircle - smallCircle)/smallCircle));
  if(showOuterC)
    {
    ctx.beginPath();
    ctx.arc(x,y,outerCircle,0,2*Math.PI);
    ctx.strokeStyle="#DD2222";
    ctx.lineWidth=10;
    ctx.stroke();
  }
  if(showInnerC)
    {
    var smX = (outerCircle - smallCircle) * Math.cos(t);
    var smY = (outerCircle - smallCircle) * Math.sin(t);
    ctx.beginPath();
    ctx.arc(x+smX,y+smY,smallCircle,0,2*Math.PI);
    ctx.strokeStyle="#DD2222";
    ctx.lineWidth=3.0;
    ctx.lineCap="round";
    ctx.lineJoin="round";
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.arc(x+ penX, y+penY,0.1,0,2*Math.PI);
  ctx.strokeStyle="#DD2222";
  ctx.lineWidth=3.0;
  ctx.lineCap="round";
  ctx.lineJoin="round";
  ctx.stroke();
  //ctx.arc(x+ penX, y+penY,1,0,2*Math.PI);

};
