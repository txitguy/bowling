/**
 * Bowling Stats
 */

'use strict';

/**
 * @ngInject
 */
let ctrl = function Controller() {

	this.games = [
		[
			[
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[]
			]
		]
	];

	this.pins = [];

	this.currentGame = 1;
	this.currentFrame = 1;
	this.currentBall = 1;

	let addGame = function() {
		this.games[0].push([[], [], [], [], [], [], [], [], [], []]);
	};

	let nextFrame = () => {
		if (this.currentFrame < 10) {
			this.currentFrame++;
			this.currentBall = 1;
		} else {
			this.currentGame++;
			this.currentFrame = 1;
			this.currentBall = 1;
			addGame();
		}
		console.log(this.games);
	};

	this.markStrike = function() {
		this.games[0][this.currentGame - 1][this.currentFrame - 1].push([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		nextFrame();
	};
};

module.exports = ctrl;