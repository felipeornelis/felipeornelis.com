<script lang="ts">
	import { page } from "$app/state";
	import { cn } from "$lib/utils";
	import { LandPlot, Menu } from "@lucide/svelte";
    import { Drawer } from "vaul-svelte";
    import { cva } from "class-variance-authority"

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
        },
        {
            label: 'Regra de 3',
            url: '/resources/math/rule-of-three'
        }
    ]
</script>


<div class="flex flex-col max-w-default mx-auto">
    <div class="flex flex-1 items-start justify-between">
        <div class="hidden md:block w-3xs sticky  overscroll-auto border-r bg-none pt-24 overflow-y-auto h-[calc(100vh-64px)] pb-24 scheme-dark [scrollbar-width:thin]">
            <div class="h-full flex flex-col space-y-3">
                {#each resources as { label, url }}
                    <a
                        href={url}
                        draggable="false"
                        class={anchor({ status: page.url.pathname === url ? 'active': 'inactive'})}
                    >
                        {label}
                    </a>
                {/each}
            </div>
        </div>

        <div class="flex min-w-0 w-full flex-col justify-center min-h-full pt-14 md:pt-24">
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



<Drawer.Root shouldScaleBackground>
    <Drawer.Trigger>
        <!-- {#snippet child({ props })} -->
            <div class="fixed bottom-7 md:bottom-12 left-7 z-50 block">
                <button
                    type="button"
                    class={cn("p-3 bg-background/60 text-foreground border rounded [&>svg]:stroke-muted-foreground [&>svg]:stroke-1 [&>svg]:size-6 cursor-pointer hover:border-primary! z-[51] transition-all duration-300 [&>svg]:border-0 backdrop-blur-md")}
                    aria-label="Abrir menu de recursos"
                >
                    <Menu />
                </button>
            </div>
        <!-- {/snippet} -->
    </Drawer.Trigger>
		<Drawer.Portal>
			<Drawer.Overlay class="fixed inset-0 bg-background/20 backdrop-blur-md" />
			<Drawer.Content class="fixed bottom-0 left-0 right-0 mt-24 flex h-[50%] flex-col rounded-t-[10px] bg-background z-50 pt-px border-t">
				<div class="flex-1 rounded-t-[10px] bg-background p-4">
					<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-muted"></div>
					<div class="mx-auto max-w-md">
						<Drawer.Title class="mb-4 font-medium">Navegação de recursos</Drawer.Title>
						
                        <div class="h-full flex flex-col space-y-3">
                            {#each resources as { label, url }}
                                <!-- <Drawer.Close>
                                    {#snippet child({ props })} -->
                                        <a
                                            href={url}
                                            draggable="false"
                                            class={cn("px-3 py-2 rounded text-foreground", page.url.pathname == url && "border border-primary! text-accent bg-primary/10")}
                                        >
                                            {label}
                                        </a>
                                    <!-- {/snippet}
                                </Drawer.Close> -->
                            {/each}
                    <!-- <a
                        href="/resources"
                        draggable="false"
                        class={anchor({ status: page.url.pathname === '/resources' ? 'active': 'inactive'})}
                        data-dialog-close
                    >
                        Introdução
                    </a>

                    <a
                        href="/resources/math/rule-of-three"
                        draggable="false"
                        class={anchor({ status: page.url.pathname === '/resources/math/rule-of-three' ? 'active': 'inactive'})}
                        data-dialog-close
                    >
                        Regra de 3
                    </a> -->
            </div>
					</div>
				</div>
			</Drawer.Content>
		</Drawer.Portal>
	</Drawer.Root>

