export default class MainGame extends Phaser.Scene {
    public constructor() {
        super("mainGame");
    }

    public preload(): void {
        this.scale.autoCenter = 2;
    }

    public create(): void {
        const ground = this.matter.add.sprite(500, 600, "ground");

        const bass = this.sound.add("bass");
        bass.play();

        ground.setBounce(1);
        ground.setStatic(true);
        const marble = this.matter.add.sprite(500, 300, "marble-copy");

        marble.setBounce(1);
    }
}
