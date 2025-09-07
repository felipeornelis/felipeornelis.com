<script lang="ts">
    interface Props {
        title: string;
        publishedAt: Date;
        cover: string;
    }

    let { title, publishedAt, cover }: Props = $props();
</script>

<div class="size-80 aspect-square rounded relative overflow-hidden group/card">
    <div class="bg-black/30 absolute size-full z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <a href="/" class="absolute inset-0 z-[15] bg-none">x</a>

        <span class="inline-flex rounded-full items-center bg-white text-black p-[0.1rem] pr-4 font-semibold text-[0.875rem] translate-y-[15px] transition-transform duration-300 gap-[0.4rem] opacity-0 group-hover/card:opacity-100 group-hover/card:translate-y-0">
            <svg stroke="currentColor" fill="#000000" stroke-width="0" viewBox="0 0 1024 1024" height="38" width="38" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg>
            Ouvir agora
        </span>
    </div>

    <div class="size-full relative bg-muted">
        <img src={cover} alt="Episode cover" class="w-full aspect-square rounded-md overflow-hidden object-cover">
    </div>
</div>