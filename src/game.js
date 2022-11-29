var config = {
    //create config
    type: Phaser.CANVAS,
    width: 1000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug:false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
    
}

var game = new Phaser.Game(config)