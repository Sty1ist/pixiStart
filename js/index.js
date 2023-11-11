import * as PIXI from "./pixi.mjs"
// console.log('PIXI:', PIXI);

// Create the application
const app = new PIXI.Application(
    {
        view: document.getElementById('canvas'),
        width: 1100,
        height: 700,
    }
);

// // Add the view to the DOM
// document.body.appendChild(app.view);

// // ex, add display objects
// app.stage.addChild(PIXI.Sprite.from('something.png'));