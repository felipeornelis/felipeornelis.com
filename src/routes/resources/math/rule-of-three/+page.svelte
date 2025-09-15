<script lang="ts">   
	import { Button } from "$lib/components/button/index.js";
    import { Head, type HeadProps } from "$lib/components/head";
	import { Input } from "$lib/components/ui/input";
	import { Copy } from "@lucide/svelte";

    let { data } = $props();

    let metadata: HeadProps = {
        title: 'Regra de 3',
        description: 'Ferramenta para calcular automaticamente proporção usando regra de 3 simples',
    }

    let value_1 = $state(undefined) as number | undefined;
    let value_2 = $state(undefined) as number | undefined;
    let value_3 = $state(undefined) as number | undefined;
    let value_4 = $derived((!value_1 || !value_2 || !value_3) ? 'X' : ((value_3 * value_2) / value_1).toFixed(2))
    // let value_4 = $derived.by(() => {
    //     console.log(value_1)
    //     if (!value_1 || !value_2 || !value_3) return 'X';

    //     return ((value_3 * value_2) / value_1).toFixed(2)
    // }) as string | number;

    async function copy_to_clipboard(value: string): Promise<void> {
        if (!window) return;

        if (!value_1 || !value_2 || !value_3) return;

        //const content = await navigator.clipboard.readText()
        await navigator.clipboard.writeText(value);

    }
</script>

<Head {...metadata}/>

<section class="w-full flex flex-col gap-3">
    <header class="flex gap-3 mb-4">
        <hgroup class="flex flex-col gap-3">
            <h1 class="text-2xl font-semibold lg:text-3xl">
                Regra de 3
            </h1>

            <p class="text-muted-foreground">
                A regra de três simples é um método matemático usado para descobrir um valor desconhecido em problemas de proporção entre duas grandezas. Essa técnica é aplicávle em diversas áreas, como física, química e no cotidiano, para resolver situações práticas onde grandezas são diretamente ou inversamente proporcionais.
            </p>
        </hgroup>
    </header>

    <div class="relative">
        <div class="grid grid-cols-2 gap-1.5 [&>input]:border [&>input]:p-4">
            <Input type="number" name="value_1" bind:value={value_1}  />
            <Input type="number" name="value2" bind:value={value_2} />
            <Input type="number" name="value3" bind:value={value_3} />

            <div class="flex items-center h-full gap-1.5">
                <Input type="text" name="value4" bind:value={value_4} readonly disabled class="select-none h-full w-full min-w-0 text-center text-accent ring-2"/>

                <Button onclick={() => copy_to_clipboard(value_4)}>
                    <Copy size={14}/>
                </Button>
            </div>
        </div>
    </div>

</section>