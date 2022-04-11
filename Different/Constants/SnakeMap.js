import {FIELD, CELL,} from "./constants.js";

let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=0; i<FIELD.HEIGHT_CELL*FIELD.WIDTH_CELL; i++){
   let cell = document.createElement('div');
   field.appendChild(cell);
   cell.classList.add('cell');
}
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.cell';
document.getElementsByTagName('head')[0].appendChild(style);


/*let cells = document.getElementsByClassName('cell');
let x = 1, y=20;

for (let i=0; i<cell.length; i++){
    if (x>20){
    x=1;
    y--;
    };

cell[i].setAttribute('posX', x);
cell[i].setAttribute('posY', y);
x++;
}*/