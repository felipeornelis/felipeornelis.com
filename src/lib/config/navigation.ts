import type { Component } from 'svelte';

type NavigationItem = {
	url: string;
	label: string;
	available: boolean;
	icon?: Component;
};

export const items: NavigationItem[] = [
	{
		url: '/collection',
		label: 'Coletânea',
		available: false
	},
	{
		url: '/resources',
		label: 'Recursos',
		available: true
	},
	{
		url: '/posts',
		label: 'Publicações',
		available: true
	},
	{
		url: '/bookmarks',
		label: 'Marcadores',
		available: true
	},
	{
		url: '/projects',
		label: 'Acervo',
		available: true
	}
];
