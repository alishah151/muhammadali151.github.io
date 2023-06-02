/*
 *
 *
 * */

// Get a regular interval for drawing to the screen
window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimaitonFrame ||
        function (callback) {
            window.setTimeout(callback, 1000/30);
        };
})();
window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;


    /*
     * Frame is the Base of whole canvas.
     * Canvas size is calculated from frame
     * User has to mention where to draw the image on frame
     * User has to mention where to draw text on the frame
     * */

function swipe (canvas, imgList, imgL, textL, fb, cb){
    if(!imgList || !imgL || !textL) return 0;
    var reqID = 0;
    var  fps = 30;
    var canvasW = 600, canvasH = 500, offset = 25;
    var isDragging = false,isReleasing = false, deltaX = 0, startX;
    var images = [], imgFrames = [], allFramesDone = false,allImagesDone = false,
        dOff = 0.4, imgD;
    var isRemoving = false, direction = false;
    var font = "5px Arial";
    var maxOS;
    var callback = cb, feedback = fb;

    var context = canvas.getContext("2d");
    var m_canvas = document.createElement('canvas'),
        m_context;
    var imageLocation = imgL;
    var textLoc = textL;
    var frameSize ;
    // Start with default width of canvas than calculate canvas height and recallibrat to get the correct canvas width & height
    function setCanvasSize() {
        var screenWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        var screenHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        if(screenWidth < 600) {
            canvasW = screenWidth - maxOS - 80;
        } else {
            canvasW = 600;
        }
        canvasH = imgFrames[0].naturalHeight;
        setCanvasHeight();
    }
    function setCanvasHeight(){
        var hT,wT, tSize;
        hT = imgFrames[0].naturalHeight;
        wT = imgFrames[0].naturalWidth;
        frameSize = {width: wT, height: hT};
        tSize = calcImageSize(wT,hT, canvasW, canvasH, 0);
        canvasH = Math.round(tSize.height);
        canvasW = Math.round(tSize.width);
        if(canvasW/16 < 14) {
            font = '14px Arial';
        } else if(canvasW/16 > 30) {
            font = '30px Arial';
        } else {
            font = (canvasW/16) + 'px Arial';
        }
    }
    //Calculates where image should start on canvas and end and what should be the size of image.
    function getPointOnCanvas(img){
        var tH = img.naturalHeight,
            tW = img.naturalWidth;
        var start;
        var end;
        var wR = (imgL.end.x - imgL.start.x) / images[0].naturalWidth;
        var hR = (imgL.end.y - imgL.start.y) / images[0].naturalHeight;
        var cwR = canvasW / imgFrames[0].naturalWidth;
        var chR = canvasH / imgFrames[0].naturalHeight;
        start = {
            x : Math.round(imageLocation.start.x *cwR),
            y : Math.round(imageLocation.start.y *chR)
        };
        end = {
            x : Math.round(imageLocation.end.x *cwR),
            y : Math.round(imageLocation.end.y *chR)
        };
        var onCSize = calcImageSize(tW, tH, end.x - start.x, end.y - start.y,0);
        return {
            start: start,
            end: end,
            width: Math.round(onCSize.width),
            height: Math.round(onCSize.height)
        }
    }
    // on resize reevaluate the canvas dimensions
    function calculate(){
        maxOS = dOff * images.length;
        setCanvasSize();
        if(images.length > 0)
            imgD = getPointOnCanvas(images[0]);
        setTimeout(preRenderCanvas,20);
    }
    //writes text
    //if no location is given then writes text by calculating the location given when app started
    function drawTextBG(ctx, txt, x, y) {
        var r = canvasH / imgFrames[0].naturalHeight;
        y = y || textLoc * r;
        ctx.save();
        ctx.font = font;
        ctx.textAlign = "center";
        ctx.fillStyle = '#000';
        ctx.fillText(txt, x, y);
        ctx.restore();
    }
    // First layer of canvas only renders when a card is removed, frame is changed or window is resized
    function preRenderCanvas() {
        var stOff = 0;
        m_canvas.width = canvasW+maxOS;
        m_canvas.height = canvasH+maxOS;
        m_context = m_canvas.getContext("2d");
        drawTextBG(m_context, 'Slide Show Ended',canvasW/2,canvasH/2);

        for(var i=0; i < images.length - 1; i++) {
            stOff=Math.round((images.length - i)*dOff);
            if(images.length > 5)
                m_context.globalAlpha = Math.round((i/(images.length-2))*5)/5;
            m_context.drawImage(images[i], imgD.start.x+stOff, imgD.start.y+ stOff, imgD.width, imgD.height);
            if(images[i].getAttribute('data-fIndex') && allFramesDone == true) {
                m_context.drawImage(imgFrames[images[i].getAttribute('data-fIndex')], stOff, stOff, canvasW, canvasH);
            }
            drawTextBG(m_context, images[i].getAttribute('data-text'),stOff +canvasW/2,0);
        }
        m_context.globalAlpha = 1;
    }
    // Second layer of canvas which renders every frame and draws the last card
    function renderCanvas(time) {
        var currImg;
        context.canvas.width = canvasW+maxOS;
        context.canvas.height = canvasH+maxOS;
        context.drawImage(m_canvas, 0, 0);
        m_context.shadowBlur = 0;
        currImg = images[images.length - 1];
        context.save();
        context.translate(-deltaX + canvasW/2, canvasH/2);
        context.globalAlpha = deltaX > 600 ? 0 : 1 - Math.abs(deltaX/600);
        context.rotate((-deltaX / 10)*Math.PI/180);
        context.translate(-(canvasW/2), -(canvasH/2));
        if(images.length > 0) {
            context.drawImage(currImg, imgD.start.x+1, imgD.start.y+ 1, imgD.width, imgD.height);
            if(currImg.getAttribute('data-fIndex') && allFramesDone == true) {
                context.drawImage(imgFrames[currImg.getAttribute('data-fIndex')], 1, 1, canvasW, canvasH);
            }
            drawTextBG(context, currImg.getAttribute('data-text'),1 + (canvasW)/2,0);
        }
        context.globalAlpha = 1;
        context.restore();
    }
    //Evaluate response when click is released
    function release (x) {
        if(!isReleasing) return;
        var d = x || canvasW/20, mx = 400, mn = 100, s = Math.sign(deltaX);
        if(Math.abs(deltaX) < mn) {
            deltaX = (Math.abs(deltaX) - d);
            deltaX = s*(deltaX < 0 ? 0:deltaX);
        } else {
            isRemoving = true;
            direction = deltaX < -mn;
            deltaX = (Math.abs(deltaX) + d);
            deltaX = s*(deltaX > mx ? mx:deltaX);
        }
        if(Math.abs(deltaX) == mx || deltaX == 0 ) {

            if(isRemoving == true) {
                if(images.length> 0) {
                    feedback(direction);
                    images.splice(images.length - 1, 1);
                    preRenderCanvas();
                }
                isRemoving = false;
                direction = false;
            }
            isDragging = false;
            startX = 0;
            deltaX = 0;
            isReleasing = false;
            return;
        }
        setTimeout(release, 1000/fps, d + canvasW/20);
    }

    function drawloop() {
        reqID = requestAnimFrame(drawloop);
        renderCanvas();
    }
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    function mouseMove(evt) {
        var mousePos = getMousePos(canvas, evt);

        if(isDragging && !isReleasing)
            deltaX = startX - mousePos.x;
    }
    function mouseUp(evt) {
        isReleasing = true;
        release();
    }
    canvas.addEventListener('mousedown', function(evt) {
        if(isDragging) return;
        var mousePos = getMousePos(canvas, evt);
        isDragging = true;
        startX = mousePos.x;
        deltaX = 0;
    }, false);
    canvas.addEventListener('mousemove', mouseMove, false);
    document.addEventListener('mouseup', mouseUp, false);

    canvas.addEventListener('touchstart', function(evt) {
        var mousePos = getMousePos(canvas,  {
            clientX: evt.touches[0].clientX,
            clientY: evt.touches[0].clientY
        });
        if(isDragging) return;
        isDragging = true;
        startX = mousePos.x;
        deltaX = 0;
    }, false);
    canvas.addEventListener('touchmove', function(evt){
        evt.preventDefault();
        mouseMove( {
            clientX: evt.touches[0].clientX,
            clientY: evt.touches[0].clientY
        });
    }, false);
    document.addEventListener('touchend', mouseUp, false);

    function startApp(){
        if(allFramesDone && allImagesDone) {
            calculate();
            setTimeout(drawloop,300);
            if(callback) callback();
        }
    }
    function imagesLoaded (imgs) {
        images = imgs;
        allImagesDone = true;
        startApp();

    }
    function frameImgsLoaded (imgs) {
        imgFrames = imgs;
        allFramesDone = true;
        startApp();
    }
    loadImages(imagesLoaded, frameImgsLoaded);

    window.onresize = function(){
        if(allFramesDone && allImagesDone)
            calculate();
    };
    var changeFrame = function(imgL, textL, framepath) {
        if(!allFramesDone || !allImagesDone) return false;
        cancelAnimationFrame(reqID);
        allFramesDone = false;
        allImagesDone = false;
        imageLocation = imgL;
        textLoc = textL;
        updateFrame('', framepath);
        setTimeout(function(){loadImages(imagesLoaded, frameImgsLoaded);},50);
        return true;
    };

    function updateFrame(iPath, fPath) {
        for(var i = 0; i < imgList.length; i++) {
            imgList[i].framePath = fPath || imgList[i].framePath;
            imgList[i].path = iPath || imgList[i].path;
        }
    }

    var calcImageSize = function (iw,ih, cw, ch, o) {
        var nh,nw,nh1,nw1, r;
        // First setting image size w.r.t its width
        r = (cw-o*2) / iw;
        nh = ih * r;
        nw = iw * r;
        // Second Again setting image size but this time w.r.t its new calculated height
        if(nh > ch){
            r = ch / nh;
            nw1 = nw * r;
            nh1 = nh * r;
            return {width: nw1, height: nh1}
        } else {
            return {width: nw, height: nh}
        }
    };

    function loadImages(cb,cb2) {
        var loadCount = 0;
        var fLoadCount = 0;
        var imgArr = [];
        var fImgArr = [];
        var fCount =0;
        for (var i = 0; i < imgList.length; i++) {
            var img = new Image();
            img.src = imgList[i].path;
            img.setAttribute('data-text', imgList[i].text);
            if(imgList[i].framePath) {
                fCount++;
                var fImg = new Image();
                fImg.src = imgList[i].framePath;
                img.setAttribute('data-fIndex', fImgArr.length);
                fImgArr.push(fImg);
                fImg.onload = function() {
                    if(++fLoadCount == fCount) {
                        cb2(fImgArr);
                    }
                };
            }
            imgArr.push(img);
            img.onload = function() {
                if(++loadCount == imgList.length) {
                    cb(imgArr);
                }
            };
        }
    }
    return {
        changeFrame: changeFrame
    };
}