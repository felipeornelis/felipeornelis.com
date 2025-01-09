<script lang="ts">
    import { SearchBoxInput } from '$lib/components/search-box';
    import { 
        SpotlightCardRoot,
        SpotlightCardHeading,
        SpotlightCardContent
    } from '$lib/components/spotlight-card';

    let search = $state('');
</script>

<section class="px-5">
    <div class="max-w-default mx-auto flex flex-col space-y-24">
        <div class="max-w-[576px] mx-auto">
            <h1 class="text-center pt-[64px] font-medium text-[40px] text-wrap">
                A página que você tentou acessar não foi encontrada.
            </h1>
        </div>

        <!-- form  text-xs top-[0.7rem] -->
        <SearchBoxInput bind:value={search} />

        <!-- end form  -->

        <div class="w-full flex items-center justify-between gap-8">
            {#each {length:3}}
                <SpotlightCardRoot>
                    <SpotlightCardHeading>
                        CreepyMind Club
                    </SpotlightCardHeading>

                    <SpotlightCardContent>
                        Faça parte do nosso clube de vantagens e desfrute de todo o conteúdo exclusivo.
                    </SpotlightCardContent>
                </SpotlightCardRoot>
            {/each}
        </div>
    </div>
</section>

