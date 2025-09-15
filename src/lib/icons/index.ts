import type { Component } from 'svelte';
import type { IconProps } from '@lucide/svelte';
import ElevatorIcon from './elevator-icon.svelte';

export type IconComponent = Component<IconProps, {}, ''>;

export { ElevatorIcon };
