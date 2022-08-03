song=""
leftWristX = 0; 
leftWristY = 0;

function preload(){
    song=loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('PoseNet está inicializado');
}
function gotPoses(results){ 
if(results.length>0){
    console.log(results)
    leftWristX = results[0].pose.leftWrist.x; 
    leftWristY = results[0].pose.leftWrist.y;
    console.log("cordenada de la muñeca izq X es = " + leftWristX + "cordenada de la muñeca izq Y = " + leftWristY)

    rightWristX = results[0].pose.rightWrist.x; 
    rightWristY = results[0].pose.rightWrist.y;
    console.log("cordenada de la muñeca der X es = " + rightWristX + "cordenada de la muñeca der Y = " + rightWristY)
}
}



function draw(){
    image(video,0,0,600,500)
    fill("red")
    circle(leftWristX,leftWristY,50) 
    //circle(rightWristX,rightWristY,50) 
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("Trueno").innerHTML="volumen= "+ volume;
    song.setVolume(volume);}

function play(){
    song.play();
    song.setVolume(1); 
    song.rate(1);
}