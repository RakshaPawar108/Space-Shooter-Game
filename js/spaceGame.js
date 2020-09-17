let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
  },
  scene: [StartGameScene, PlayGameScene, EndGameScene],
};

let game = new Phaser.Game(config);
