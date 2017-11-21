var capture;
var button;
var snapshot=[];

function setup() {
	createCanvas(640, 480);
	capture = createCapture(VIDEO);
	capture.size(640, 480);
	capture.hide();
	button=createButton('Create your pink-story');
	button.mousePressed(takesnap);
}

function takesnap(){
  snapshot.push(capture.get());
}
function draw() {
  var myImage = capture.loadPixels();
	tint(255,0,150);
	image(myImage, 0, 0, 640, 480);
	
	var w= 80;
	var h=60;
	var x=0;
	var y=0;
	
	for(var i=0; i< snapshot.length; i++) {
  image(snapshot[i],x,y,w,h);
  x=x+w;
  if(x>width) {
    x=0+1;
    y=y+h;
  }
  }

	
}