import {Application, Graphics} from "./pixi.mjs"
// console.log('PIXI:', PIXI);
import { assetsMap } from "./assetsMap.js";

// Create the application
const app = new Application(
    {
        width: 800,
        height: 800,
        backgroundColor: 0xc2c2c2,
        view: document.getElementById('canvas'),
        
    }
);

const runGame = () => {
    const marker = new Graphics();
    marker.beginFill(0xff0000, 1);
    marker.drawCircle(0, 0, 10, 10);
    marker.endFill();

    app.stage.addChild(marker);
    app.stage.position.set(800/2, 800/2);
    // window["RENTAGLE"] = marker;
};

assetsMap.sprites.forEach((value) => app.loader.add(value.name, value.url));
app.loader.load(runGame);

// // Add the view to the DOM
// document.body.appendChild(app.view);

// // ex, add display objects
// app.stage.addChild(PIXI.Sprite.from('something.png'));