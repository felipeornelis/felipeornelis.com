<script lang="ts">
	import { page } from "$app/state";
	import { LandPlot } from "@lucide/svelte";
    import { cva } from "class-variance-authority"

    //import { } from "$lib/components/ui";

    let { children } = $props();

    const anchor = cva('inline-flex items-center gap-1.5 [&>svg]:size-5 text-sm', {
        variants: {
            status: {
                active: 'text-accent',
                inactive: 'text-muted-foreground',
            }
        },
        defaultVariants: {
            status: 'inactive'
        }
    });

    const resources: { label: string; url: string; }[] = [
        {
            label: 'Introdução',
            url: '/resources',
        }
    ]
    
</script>


<div class="flex flex-col max-w-default mx-auto">
    <div class="flex flex-1 items-start justify-between">
        <div class="block w-3xs sticky  overscroll-auto border-r bg-none pt-24 overflow-y-auto h-[calc(100vh-64px)] pb-24 scheme-dark [scrollbar-width:thin]">
            <div class="h-full flex flex-col space-y-3">
                    <a
                        href="/resources"
                        draggable="false"
                        class={anchor({ status: page.url.pathname === '/resources' ? 'active': 'inactive'})}
                    >
                        Introdução
                    </a>

                    <a
                        href="/resources/math/rule-of-three"
                        draggable="false"
                        class={anchor({ status: page.url.pathname === '/resources/math/rule-of-three' ? 'active': 'inactive'})}
                    >
                        Regra de 3
                    </a>
            </div>
        </div>

        <div class="flex min-w-0 w-full flex-col justify-center min-h-full pt-24">
            <div></div>
            <div class="flex justify-center flex-1">
                <article class="w-[60rem] min-w-[8rem] max-w-full min-h-full px-5 ">
                    {@render children()}
                </article>

                <!-- <aside class="sticky top-[3.25rem] order-2 max-h-full flex-col flex gap-[1.5rem] h-fit w-[15rem] overflow-y-auto wrap-break-word [scrollbar-width:thin]">
                    oie
                </aside> -->
            </div>
        </div>
    </div>
</div>

