var canvas;
var ctx;
var alarmHour;
var alarmMin;
var alarmSec;

function init() {
    time();
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    window.requestAnimationFrame(clock);
}

function time() {
    var date = new Date();
    document.getElementById('currentTime').innerHTML = date.toLocaleTimeString();
}

function setAlarm() {
    var alarm = document.getElementById('tpick').value;
    console.log(alarm);

    alarmHour = alarm.substring(0, 2);
    alarmMin = alarm.substring(3, 5);
    alarmSec = alarm.substring(6, 8);
}

setInterval(time, 1000);

function clock() {
    var now = new Date();
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

    // Hour marks
    ctx.save();
    for (var i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
        if (i % 5!== 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();

    hr = hr >= 12 ? hr - 12 : hr;

    ctx.fillStyle = 'black';

    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();

    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.fillStyle = '#D40000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.restore();

    window.requestAnimationFrame(clock);
    time();
}

window.requestAnimationFrame(clock);

var alarmClock = {
    init : function () {
        alarmClock.selectHours = document.getElementById("selectHours");
        alarmClock.selectMinutes = document.getElementById("selectMinutes");
        alarmClock.selectSeconds = document.getElementById("selectSeconds");

        alarmClock.hours = alarmClock.createSel(23);
        document.getElementById("clockHours").appendChild(alarmClock.hours);
        alarmClock.minutes = alarmClock.createSel(59);
        document.getElementById("clockMinutes").appendChild(alarmClock.minutes);
        alarmClock.seconds = alarmClock.createSel(59);
        document.getElementById("clockSeconds").appendChild(alarmClock.seconds);

        alarmClock.alarmSet = document.getElementById("alarmSet");
        alarmClock.alarmSet.addEventListener("click", alarmClock.set);
        alarmClock.alarmReset = document.getElementById("alarmStop");
        alarmClock.alarmReset.addEventListener("click", alarmClock.reset);

        alarmClock.sound = document.getElementById("alarmSound");

        alarmClock.alarm = null;
        setInterval(alarmClock.tick, 1000);
    },

    createSel : function (max) {
        var selector = document.createElement("select");
        for (var i=0; i<=max; i++) {
            var opt = document.createElement("option");
            i = alarmClock.padzero(i);
            opt.value = i;
            opt.innerHTML = i;
            selector.appendChild(opt);
        }
        return selector
    },

    padzero : function (num) {
        if (num < 10) { num = "0" + num; }
        else { num = num.toString(); }
        return num;
    },

    tick : function () {
        var now = new Date();
        var hr = alarmClock.padzero(now.getHours());
        var min = alarmClock.padzero(now.getMinutes());
        var sec = alarmClock.padzero(now.getSeconds());

        if (alarmClock.alarm != null) {
            now = hr + min + sec;
            if (now == alarmClock.alarm) {
                if (alarmClock.sound.paused) {
                    alarmClock.sound.play();
                }
            }
        }
    },

    set : function () {
        alarmClock.alarm = alarmClock.hours.value + alarmClock.minutes.value + alarmClock.seconds.value;
        alarmClock.hours.disabled = true;
        alarmClock.minutes.disabled = true;
        alarmClock.seconds.disabled = true;
        alarmClock.alarmSet.disabled = true;
        alarmClock.alarmReset.disabled = false;
    },

    reset : function () {
        if (!alarmClock.sound.paused) {
            alarmClock.sound.pause();
        }
        alarmClock.alarm = null;
        alarmClock.hours.disabled = false;
        alarmClock.minutes.disabled = false;
        alarmClock.seconds.disabled = false;
        alarmClock.alarmSet.disabled = false;
        alarmClock.alarmReset.disabled = true;
    }
};

window.addEventListener("load", alarmClock.init);
