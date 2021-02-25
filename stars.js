var StarsScene = new Phaser.Class({
    Extends: Phaser.Scene,

    platform: null,


    initialize: function StarsScene () {
        Phaser.Scene.call(this, {key: 'StarsScene'})
        
    },

    preload: function() {
        this.load.image('hero', 'assets/Astronaut.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('ground', 'assets/platform.png');


    },

    create: function () {
        var gameOver = false
        function hitBomb (hero, star)
        {
            if (gameOver==false){

                

                alert("You died");
            
                gameOver = true;

                alert('Reload to start again');
                game.paused=true;
            
            }
            
        }
        
        

        this.add.image(400, 300, 'background');

        this.cursors = this.input.keyboard.createCursorKeys()
        
        
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.player = this.physics.add.sprite(400, 400, 'hero').setScale(.4);
        this.physics.add.collider(this.platforms, this.player);

        function starLife (scene)
        {
            if(gameOver==false){
                scene.star = scene.physics.add.sprite(Math.random() * (755 - 5) + 5, 0, 'star');
                scene.star.body.velocity.y=-50;
                scene.star.body.bounce.set(0);
                scene.physics.add.collider(scene.player, scene.star, hitBomb, null, this);
                scene.star.setCollideWorldBounds(true);
                scene.physics.add.collider(scene.platforms, scene.star);
                
                
        
            }    
        
        
        
        }

        this.time.addEvent({

            delay: 550,

            callback: starLife,

            args: [this],

            loop: true,

        });
        starLife(this);

        this.player.setCollideWorldBounds(true);


        



    },

    update: function(scene) {

        if (this.cursors.left.isDown )
        {

            this.player.setVelocityX(-290);

        } else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(+290);

        }else{
            this.player.setVelocityX(0);
        }






    
    },


});