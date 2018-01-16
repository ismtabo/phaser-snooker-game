import 'pixi';
import 'p2';
import Phaser from 'phaser';
import { Snooker } from './controllers/snooker';


var game = new Phaser.Game(1080, 860, Phaser.AUTO);
var snooker = new Snooker(game);

class GameState extends Phaser.State {
	preload () {
		snooker.preload();
	}
	create () {
		//  In this game we should use P2 physics, so we should enable it
		game.physics.startSystem(Phaser.Physics.P2JS);
		// set the value of velocity of sprites
		game.physics.p2.restitution = 0.5;
		// We would like to use collision impact, so we enable impact events 
		// Without this method no callback event will be fired
		game.physics.p2.setImpactEvents(true);

		game.physics.p2.updateBoundsCollisionGroup();
		// Enable keyboard inputs 
		// cursors = game.input.keyboard.createCursorKeys();

		// snooker.createGraphics();
		// snooker.createAudioPlayer();
		// snooker.createPlayers();	
		//snooker.getCurrentPlayer().fault();
		snooker.create();

	}
	update () {
		//snooker.graphics.white.sprite.body.velocity.x = 1200;
		snooker.update();

	}
	render () {

	}
}

game.state.add('GameState', GameState);
game.state.start('GameState');