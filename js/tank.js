import {Container, AnimatedSprite, Texture} from "./pixi.mjs";

export const createAnimatedSprite = (textureNames, position = { x : 0, y : 0 }, anchor = { x : 0.5, y : 0.5 }) => {
    const textures = textureNames.map(name => Texture.from(name));

    const animatedSprite  = new AnimatedSprite(textures);
    animatedSprite.position.copyFrom(position);
    animatedSprite.anchor.copyFrom(anchor);


    console.log('textures:', textures);
    return animatedSprite;
};

export class Tank {
    constructor() {
        this._view = new Container();

        this._tracksLeft = createAnimatedSprite(["TrackСFrame1","TrackСFrame2"], { x : 0, y : -80});
        this._tracksRight = createAnimatedSprite(["TrackСFrame1","TrackСFrame2"], { x : 0, y : 80});
        this._tracksLeft.animationSpeed = 0.25;
        this._tracksRight.animationSpeed = 0.25;

        this.view.addChild(this._tracksLeft, this._tracksRight);

        

    }

    get view() {
        return this._view;
    }
}