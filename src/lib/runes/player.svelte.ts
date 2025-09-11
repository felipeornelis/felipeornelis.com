let playerStatus = $state(false);

export const audioPlayer = {
	isReproducing: () => playerStatus === true,

	play: () => (playerStatus = true),
	pause: () => (playerStatus = false)
};
