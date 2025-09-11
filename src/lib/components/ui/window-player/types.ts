export const PlayerOperations = {
	play: 'play', // starts or resumes the audio
	pause: 'pause', // stops the audio at its current position
	stop: 'stop', // stops and restarts the audio
	previous: 'previous', // skips to the beginning of the current track or to the previous track if it's playing a playlist
	next: 'next', // skips to the next track if playing in a playlist
	rewind: 'rewind', // jumps backward by a few secons
	backward: 'backward', // jumps backward by a few secons
	fastForward: 'fastForward', // jumps forward by a few secons
	forward: 'forward' // jumps forward by a few secons
} as const;

export type ButtonType = keyof typeof PlayerOperations;
