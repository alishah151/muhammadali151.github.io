
window.onload = function () {
    var demoArr = [], swiper, dotNumb = 0, interval, isYes =0, isNo = 0;

    function loading() {
        interval = setInterval(function(){
            document.getElementById('note').textContent = '';
            for(var i = 0;  i < dotNumb; i++) {
                document.getElementById('note').textContent += '.';
            }
            dotNumb++;
            dotNumb %= 6;
        },500);
    }
    function feedback(val) {
        val ? isYes++: isNo++;

        document.getElementById('right').innerHTML = 'Wrong : ' + isYes;
        document.getElementById('left').textContent = 'Correct : ' + isNo;
    }
    loading();
    function stopLoading() {
        clearInterval(interval);
        document.getElementById('note').textContent = 'Swipe/Drag Left or Right';
    }

    demoArr.push({
        imgL :  {
            start : { x: 13, y:45 },
            end : { x: 344, y:292 }
        },
        textL: 390,
        framepath: 'img/f8.png',
        imgpath: 'img/5.jpg'
    });
    demoArr.push({
        imgL : {
            start : { x: 30, y:68 },
            end : { x: 285, y:255 }
        },
        textL: 400,
        framepath: 'img/f5.png',
        imgpath: 'img/2.jpg'
    });
    var canvas = document.getElementById('myCanvas');
    swiper = swipe(canvas, imgArray, demoArr[0].imgL, demoArr[0].textL, feedback, stopLoading);

    document.getElementById("frame-change").addEventListener('change', function(event) {
        if(swiper.changeFrame(demoArr[this.value].imgL, demoArr[this.value].textL, demoArr[this.value].framepath)) {
            loading();
            isYes = 0;
            isNo = 0;
            document.getElementById('right').innerHTML = 'Wrong : ' + isYes;
            document.getElementById('left').textContent = 'Correct : ' + isNo;
        }
    });
};