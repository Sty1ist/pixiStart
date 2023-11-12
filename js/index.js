import { Application, Graphics, Rectangle } from "./pixi.mjs"
import { assetsMap } from "./assetsMap.js";
import { Tank }from "./tank.js";

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
    marker.drawCircle(0, 0, 5);
    marker.endFill();

    const tank = new Tank();
    app.stage.addChild(tank.view);
    app.stage.addChild(marker);
    app.stage.position.set(800/2, 800/2);
    window["TANK"] = tank;
    console.log('test')

    const onPointerDown = ({data}) => {
        console.log('event:', data);

        const position = data.getLocalPosition(app.stage);
        app.stage.addChild(new Graphics().beginFill(0xff0000, 1).drawCircle(position.x, position.y, 5).endFill());
    }

    //events
    app.stage.on("pointerdown", onPointerDown, undefined);
    app.stage.interactive = true;
    app.stage.interactiveChildren = false;
    app.stage.hitArea = new Rectangle(-400, -400, 800, 800);
};

assetsMap.sprites.forEach((value) => app.loader.add(value.name, value.url));
app.loader.load(runGame);
