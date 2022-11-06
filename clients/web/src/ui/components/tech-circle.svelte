<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let name: string;
	export let background: string;
	export let icon: typeof SvelteComponent;
</script>

<div
	class="
        w-[31px] h-[31px] rounded-full flex items-center justify-center border-2 border-[#10151B] transition {background}
        hover:-translate-y-1.5
    "
	title={name}
>
	<span>
		<svelte:component this={icon} />
	</span>
</div>
