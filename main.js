let img;
let mustacheImg;

function applyMustache(img) {
  const x = img.width / 2;
  const y = img.height / 2;
  const w = img.width / 2;
  const h = img.height / 4;

  image(mustacheImg, x, y, w, h);
}

function preload() {
  mustacheImg = loadImage('mustache.png');
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('canvas');

  img = loadImage('sample.jpg', function() {

    image(img, 0, 0);
  });
}

function draw() {
    background(220);
}
