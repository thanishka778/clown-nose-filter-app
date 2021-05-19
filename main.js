noseX=0;
noseY=0;

function preload(){
clownNose=loadImage('https://i.postimg.cc/qvZWMZ8C/Daco-4557163.png');
}

function setup(){
    canvas=createCanvas(350, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, model_loaded);
    poseNet.on('pose', gotPoses);
    
}

function draw(){
image(video, 0, 0, 350, 350 );
image(clownNose, noseX, noseY, 35, 35);

}

function takeSnapshot(){
    save("Clown nose.png");
}

function model_loaded(){
    console.log("posenet is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-164;
        noseY=results[0].pose.nose.y-100;
        console.log("noseX= "+ noseX)
        console.log("noseY= "+ noseY)
    }

}