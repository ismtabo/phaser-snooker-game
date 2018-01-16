import 'pixi';
import 'p2';
import Phaser from 'phaser';
import { Snooker } from './controllers/snooker';


var game = new Phaser.Game(1080, 860, Phaser.AUTO);
game.state.add('Snooker', Snooker);
game.state.start('Snooker');