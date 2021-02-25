var config = {
    type: Phaser.AUTO,
    parent: 'screen',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [BootScene, BarrelScene]
};

var game= new Phaser.Game(config);