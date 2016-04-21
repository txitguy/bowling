/**
 * Pass in bowling data and this will output a score card
 */

'use strict';

let directive = function(Template) {
	return {
		restrict: 'E',
		template: Template.getTemplate('common/scorecard'),
		scope: {
			data: '='
		},
		controller: function($scope) {

			$scope.plays = [];

			let getGames = function() {

				var plays = [];

				// For each game...
				_.forEach($scope.data, (series) => {

					var nSeries = {games: []};

					// Reset the score for this series
					let seriesScore = 0;

					_.forEach(series, (game) => {

						var nGame = {frames: []};

						// Reset the score for this game
						let score = 0;

						// For each frame
						for (let i = 0; i < 10; i++) {

							let nFrame = {};

							// Reset the score for this frame
							let frame = 0;

							// Get the frame score
							if (typeof game[i][0] !== 'undefined') {
								frame += game[i][0].length;
							}
							if (typeof game[i][1] !== 'undefined') {
								frame += game[i][1].length;
							}
							if (typeof game[i][2] !== 'undefined') {
								frame += game[i][2].length;
							}

							// If strike, add total frame score to previous frame
							if (typeof nGame.frames[i - 1] !== 'undefined' &&
								nGame.frames[i - 1].mark === 'strike') {
								nGame.frames[i - 1].score += frame;
								score += frame;

								// If the previous 2 were strikes, add this first ball
								if (typeof nGame.frames[i - 2] !== 'undefined' &&
									nGame.frames[i - 2].mark === 'strike') {
									nGame.frames[i - 2].score += game[i][0].length;
									score += game[i][0].length;
								}
							}

							// If a spare, add the first ball
							if (typeof nGame.frames[i - 1] !== 'undefined' &&
								nGame.frames[i - 1].mark === 'spare') {

								nGame.frames[i - 1].score += game[i][0].length;
								score += game[i][0].length;
							}

							// Mark if the frame was a strike or spare
							if (frame === 10) {
								if (game[i].length === 1) {
									nFrame.mark = 'strike';
								} else if (game[i].length === 2) {
									nFrame.mark = 'spare';
								}
							} else {
								nFrame.mark = 'open';
							}

							// Add frame to the score
							if (typeof game[i] !== 'undefined') {
								score += frame;
							}

							// Create frame object and add it to the game
							nFrame.balls = game[i];
							nFrame.score = score;

							// push
							nGame.frames.push(nFrame);
						}

						// Add game to the series
						seriesScore += score;

						// Create game object and add it to the series
						nGame.score = score;
						nSeries.games.push(nGame);
					});

					nSeries.score = seriesScore;
					plays.push(nSeries);
				});

				$scope.plays = plays;
			};

			getGames();
		}
	};
};

module.exports = directive;