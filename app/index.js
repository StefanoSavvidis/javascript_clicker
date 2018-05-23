let two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

const horizantelTile = 8;
const verticalTile = 16;
const screenRatio = two.height / two.width
const tileRatio = verticalTile / horizantelTile



let tileSize = 0;

if (tileRatio > screenRatio) {
  tileSize = two.height / verticalTile
} else {
  tileSize = two.width / horizantelTile
}




const widthOffset = (two.width/2) - (tileSize*horizantelTile/2) + tileSize/2;
const heightOffset = (two.height/ 2) - (tileSize * verticalTile / 2) + tileSize / 2;
let shapes = []


for (let i = 0; i < horizantelTile; i++) {
  shapes[i] = new Array(verticalTile)
  for (let j = 0; j < verticalTile; j++) {
    shapes[i][j] = two.makeRectangle(tileSize * i + widthOffset, tileSize * j + heightOffset, tileSize, tileSize);
    shapes[i][j].fill = '#448aff';
    shapes[i][j].stroke = '#2962ff';
    shapes[i][j].linewidth = tileSize/10;
    
  }
}

// Don't forget to tell two to render everything
// to the screen
two.update();

for (let i = 0; i < horizantelTile; i++) {
  for (let j = 0; j < verticalTile; j++) {
    const shape = shapes[i][j]
    
    let element = document.querySelector('#' + shape.id)
    element.addEventListener('click', () => {
      doSomething(shape)
    }, {once: true});

    element.addEventListener('mouseover', () => {
      
    }, {once: true});
    //doSomething(shape)
  }
}
function doSomething(shape) {
  shape.fill = "#ff5252";
  shape.stroke = "#ff1744";
}

let testShape = document.getElementById(shapes[0][0].id)

testShape.addEventListener('mouseover', doSomething(testShape));
