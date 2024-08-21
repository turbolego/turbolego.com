var game = new Phaser.Game(1700, 900, Phaser.AUTO, 'gameDiv');
var keyReset = false;

var mainState = {

    preload: function() { 
        game.stage.backgroundColor = '#71c5cf';
		game.stage.disableVisibilityChange = true;

        game.load.image('bird', 'assets/bird.png');  
        game.load.image('pipe', 'assets/pipe.png'); 

        // Load the jump sound
        game.load.audio('jump', 'assets/jump.wav');
		game.load.audio('nom', 'assets/nom.wav'); 
    },

    create: function() { 
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.pipes = game.add.group();
        this.pipes.enableBody = true;
        this.pipes.createMultiple(20, 'pipe');  
        this.timer = this.game.time.events.loop(3000, this.addRowOfPipes, this);           

        this.bird = this.game.add.sprite(100, 245, 'bird');
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;
		this.bird.body.collideWorldBounds = true;

        // New anchor position
        this.bird.anchor.setTo(-0.2, 0.5); 
 
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this); 

        this.score = 0;
        this.labelScore = this.game.add.text(20, 20, "0", { font: "80px Arial", fill: "#ffffff" });  

        // Add the jump sound
        this.jumpSound = this.game.add.audio('jump');
		this.nomSound = this.game.add.audio('nom');
    },

    update: function() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.ONE) && !keyReset) {
            keyReset = false;
			this.bird.body.velocity.y = -350;
			game.add.tween(this.bird).to({angle: -20}, 100).start();
        }
	
        if (this.bird.inWorld == false)
            this.restartGame(); 

        game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this); 

        // Slowly rotate the bird downward, up to a certain point.
        if (this.bird.angle < 20)
            this.bird.angle += 1;     
    },

    jump: function() {
        // If the bird is dead, he can't jump
        if (this.bird.alive == false)
            return; 

        this.bird.body.velocity.y = -350;

        // Jump animation
        game.add.tween(this.bird).to({angle: -20}, 100).start();

        // Play sound
        this.jumpSound.play();
    },

    hitPipe: function() {
        // If the bird has already hit a pipe, we have nothing to do
        if (this.bird.alive == false)
            return;
            
        // Set the alive property of the bird to false
        this.bird.alive = false;
		this.nomSound.play();

        // Prevent new pipes from appearing
        this.game.time.events.remove(this.timer);
    
        // Go through all the pipes, and stop their movement
        this.pipes.forEachAlive(function(p){
            p.body.velocity.x = 0;
        }, this);
    },

    restartGame: function() {
        game.state.start('main');
    },

    addOnePipe: function(x, y) {
        var pipe = this.pipes.getFirstDead();

        pipe.reset(x, 650);
        pipe.body.velocity.x = -200;  
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

    addRowOfPipes: function() {
        /*var hole = Math.floor(Math.random()*5)+1;*/
		/*var hole = 1;*/
        
        for (var i = 0; i < 1; i++)
            /*if (i != hole && i != hole +1)*/ 
                this.addOnePipe(1600, i*250+10);
				/*this.addOnePipe(1600, 800);*/
    
        this.score += 1;
        this.labelScore.text = this.score;  
    },
};

game.state.add('main', mainState);  
game.state.start('main'); 