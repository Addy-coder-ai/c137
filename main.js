video = "";
status_ = "";
object = [];
mute = 0;

function preload() {
 video = createVideo("video.mp4"); 
 video.hide();   
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
}

function draw() {
image(video,0,0,500,500);
}

function start() {
    objectDetection = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting...";
}

function modelLoaded() {
    console.log("cocossd is initialized!!");
    status_ = true;
    video.loop();
    video.speed(1);
    video.volume(mute);
}

