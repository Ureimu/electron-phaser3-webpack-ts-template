import Phaser from "phaser";
import ground from "@assets/ground.png";
import marbleCopy from "@assets/marble-copy.png";

export default class Preloader extends Phaser.Scene {
    public constructor() {
        super("preloader");
    }

    public preload(): void {
        this.load.image("ground", ground);
        this.load.image("marble-copy", marbleCopy);
        this.scale.autoCenter = 2;
    }

    public create(): void {
        this.scene.start("mainGame");
    }
}
