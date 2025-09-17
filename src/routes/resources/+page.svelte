<script lang="ts">
	import { Head, type HeadProps } from "$lib/components/head";

    //import { } from "$lib/components/ui";

    let { children } = $props();

    let metadata: HeadProps = {
        title: 'Recursos',
        description: 'Recursos e ferramentas que podem úteis para o dia-a-dia.'
    }
</script>

<Head {...metadata} />

<section class="w-full flex flex-col gap-3">
    <header class="flex gap-3 mb-4">
        <hgroup class="flex flex-col gap-3">
            <h1 class="text-2xl font-semibold lg:text-3xl">
                Regra de 3
            </h1>

            <p class="text-muted-foreground">
                Recursos
            </p>
        </hgroup>
    </header>

    <div class="relative flex flex-col gap-10">
        <div>
            <p>Este site oferece recursos e ferramentas gratuitos para serem utilizados em tarefas cotidianas.</p>
        </div>
    </div>
</section>