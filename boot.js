var BootScene = new Phaser.Class({
    Extends: Phaser.Scene,



    initialize: function BootScene () {
        Phaser.Scene.call(this, {key: 'BootScene'})
        
    },

    preload: function() {
        this.load.image('boot', 'assets/boot.png');

    },

    create: function () {
        this.add.image(800, 600, 'boot');

        this.input.on('pointerdown', function () {
            
            this.scene.start('BarrelScene');
            
        }, this);
    }


});

