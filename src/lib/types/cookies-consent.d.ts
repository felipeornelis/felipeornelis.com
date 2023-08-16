export type CookiesConset = {
	set: (value: boolean) => void;
	get: () => boolean | null;
};
