export default class MainGame extends Phaser.Scene {
    public constructor() {
        super("mainGame");
    }

    public preload(): void {
        this.scale.autoCenter = 2;
    }

    public create(): void {
        const ground = this.matter.add.sprite(500, 600, "ground");
        ground.setBounce(1);
        ground.setStatic(true);
        this.matter.add.sprite(500, 300, "marble-copy").setBounce(1);
    }
}
