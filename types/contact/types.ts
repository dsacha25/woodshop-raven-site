export interface ContactFormData {
	name: string;
	email: string;
	interest: string;
	description: string;
}

export enum SelectBoxOptions {
	BOXES = 'boxes',
	INCENSE = 'incense',
	CHARCUTERIE = 'charcuterie',
	PIPES = 'pipes',
	GAMES = 'games',
	KINK = 'kink',
	WOODBURINING = 'woodburning',
	MADE_TO_ORDER = 'made to order',
}
