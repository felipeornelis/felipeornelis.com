<script lang="ts">
	export let as: 'button' | 'a' = 'button';
</script>

<svelte:element
	this={as}
	class="rounded-[45px] flex items-center justify-center px-5 py-3 bg-[#2884FF] gap-[15px] text-white text-[17px] font-semibold select-none"
	{...$$restProps}
>
	<slot />
</svelte:element>
