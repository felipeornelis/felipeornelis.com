<script lang="ts">
	export let as: 'div' | 'article' | 'section' = 'article';
</script>

<svelte:element
	this={as}
	class="
        w-[370px] h-[252px] bg-[#10151B]  border-light-gray border-solid border-[1px] rounded-[14px] transition duration-200 cursor-pointer 
        hover:border-[#35b7fd]"
>
	<slot />
</svelte:element>
