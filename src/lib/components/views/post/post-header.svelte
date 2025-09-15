<script lang="ts">
    import { Calendar, Timer } from "@lucide/svelte";

    interface Props {
        image?: string;
        title: string;
        publishedAt: Date;
        readTime: number;
    }

    let { 
        image = 'https://doce.sh/img/icons/rust.svg',
        title, 
        publishedAt,
        readTime
    }: Props = $props();

    const extense_publish_date = new Intl.DateTimeFormat('pt-br', {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(publishedAt)
</script>

<header class="flex gap-3 flex-col md:flex-row">
    <div class="size-12 shrink-0">
        <img alt="" class="size-12" src={image}>
    </div>

    <hgroup class="flex flex-col gap-4">
        <h1 class="text-2xl font-semibold lg:text-3xl">
            {title}
        </h1>
        <div class="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-3 text-sm [&_svg]:size-4">
            <div class="flex items-center gap-1.5">
                <Calendar />

                <p>Publicado em <span class="text-foreground/60">{extense_publish_date}</span></p>
            </div>

            <span class="text-foreground/70 hidden md:block">•</span>

            <div class="flex items-center gap-1.5">
                <Timer />

                <p><span class="text-foreground/60">{readTime} minutos</span> de leitura</p>
            </div>
        </div>
    </hgroup>
</header>