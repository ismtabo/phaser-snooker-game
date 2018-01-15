import { Player } from '../model/player';

export class PlayerController{
	constructor() {
		this.players = [];
	}

	createPlayer(name){
		var player = new Player(name);
	}
}