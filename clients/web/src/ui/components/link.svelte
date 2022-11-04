<script lang="ts">
	export let href: string;
	export let label: string;
</script>

<a
	class="
        relative text-[20px] text-[#35b7fd]
        after:w-0 after:h-[2px] after:absolute after:bottom-0 after:right-0 after:bg-[#35b7fd] after:transition-all after:duration-150 after:top-[27px]
        hover:after:w-full hover:after:left-0"
	{href}
	{...$$props}
>
	{label}
</a>
