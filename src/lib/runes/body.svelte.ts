let canBodyScroll = $state(true);

export const bodyScroll = {
	canScroll: () => canBodyScroll === true,
	enable: () => (canBodyScroll = true),
	disable: () => (canBodyScroll = false)
};
