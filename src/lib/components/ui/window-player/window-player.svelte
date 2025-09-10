<script lang="ts">
    import { audioPlayer } from '$lib/runes/player.svelte'

    let is_enabled = $state(true);

    function closeWindowPlayer() {
        is_enabled = false;
    }
</script>

{#if audioPlayer.isReproducing()}
    <div class="fixed w-full h-[5.1875] bottom-0 left-0 right-0 z-50">
        <div class="h-full py-[0.8rem] px-[1.2rem] bg-[#141414]/90 supports-[backdrop-filter]:bg-[#141414]/70 backdrop-blur-md border-t">
            <div class="h-full mx-auto flex items-center justify-between gap-[4.5rem]">
                <!-- Cover and title  -->
                <div class="max-w-[20rem] flex items-center gap-4 shrink-0">
                    <div class="max-w-[3.5rem] relative cursor-pointer rounded-md overflow-hidden bg-muted aspect-square">
                        <img
                            src="https://www.apple.com/v/apple-podcasts/c/images/overview/discovery_good_inside__eyexj2q4tqc2_large.jpg"
                            alt="Ep"
                            class="w-full object-cover select-none touch-none pointer-events-none"
                        >
                    </div>

                    <div class="self-stretch overflow-hidden flex flex-col justify-center gap-[0.2rem] relative">
                        <strong class="font-medium text-[0.9rem] whitespace-nowrap text-ellipsis">A lenda da Boqueteira Fantasma</strong>
                        <span class="text-[0.8rem]">
                            Blzvini Podcast
                        </span>
                    </div>
                </div>
                <!-- End cover and title  -->

                <!-- Player -->
                <div class="size-full flex flex-col items-center justify-center">
                    <div class="w-full flex items-center gap-[0.7rem]">
                        <span class="text-[0.8rem]">00:01</span>

                        <div class="w-full h-[0.75rem] flex cursor-pointer items-center relative bg-transparent">
                            <div class="w-full h-[3px] bg-white/30 overflow-hidden">

                            </div>
                        </div>

                        <span class="text-[0.8rem]">09:59</span>
                    </div>

                    <div class="relative flex items-center gap-[1.5rem]">
                        <button type="button" class="bg-transparent p-[0.5rem] rounded-full transition-all duration-200 flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-foreground" aria-label="Previous">
                            <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 32 32" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M 8 5 L 8 27 L 10 27 L 10 16.5 L 10.4375 16.8125 L 23.4375 25.8125 L 25 26.90625 L 25 5.09375 L 23.4375 6.1875 L 10.4375 15.1875 L 10 15.5 L 10 5 Z M 23 8.90625 L 23 23.09375 L 12.75 16 Z"></path></svg>
                        </button>

                        <button type="button" class="bg-transparent p-[0.5rem] rounded-full transition-all duration-200 flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-foreground" aria-label="Previous">
                            <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 32 32" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M 8 5 L 8 27 L 10 27 L 10 16.5 L 10.4375 16.8125 L 23.4375 25.8125 L 25 26.90625 L 25 5.09375 L 23.4375 6.1875 L 10.4375 15.1875 L 10 15.5 L 10 5 Z M 23 8.90625 L 23 23.09375 L 12.75 16 Z"></path></svg>
                        </button>

                        <button type="button" class="bg-transparent p-[0.5rem] rounded-full transition-all duration-200 flex items-center justify-center [&>svg]:size-[20px] [&>svg]:stroke-foreground" aria-label="Previous">
                            <svg stroke="currentColor" fill="#ffffff" stroke-width="0" viewBox="0 0 32 32" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M 8 5 L 8 27 L 10 27 L 10 16.5 L 10.4375 16.8125 L 23.4375 25.8125 L 25 26.90625 L 25 5.09375 L 23.4375 6.1875 L 10.4375 15.1875 L 10 15.5 L 10 5 Z M 23 8.90625 L 23 23.09375 L 12.75 16 Z"></path></svg>
                        </button>
                    </div>
                </div>
                <!-- End of Player -->
                
                <!-- Volume  -->
                <div class="w-[20rem] flex items-center gap-4">
                    <button class="[&>svg]:size-[18px] cursor-pointer" type="button" aria-label="Volume">
                        <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M654.768 65.904c-10.432-5.552-23.088-4.928-32.912 1.696L300.768 319.712l-106.624.08c-54.512 0-98.88 38.657-98.88 86.4l1.712 211.137c0 47.536 44.352 86.224 98.863 86.224l106.592.065L621.823 956.37a31.977 31.977 0 0 0 17.905 5.472c5.152 0 10.32-1.249 15.008-3.745a31.951 31.951 0 0 0 17.008-28.256V94.16a32.088 32.088 0 0 0-16.976-28.257zm-47.04 803.728L330.129 645.106a31.97 31.97 0 0 0-17.889-5.473l-116.384-.064c-20.544 0-34.88-11.712-34.88-22.464l-1.712-211.152c0-10.48 14.336-22.16 34.896-22.16l116.4-.08a32.017 32.017 0 0 0 17.855-5.457l279.312-224v715.376zm182.097-521.998c-17.712-2.928-33.937 8.864-36.849 26.305-2.912 17.424 8.88 33.92 26.289 36.832 50.32 8.4 85.472 52.304 85.472 106.753 0 51.84-36.368 96.687-86.496 106.688-17.344 3.44-28.592 20.288-25.12 37.632 3.024 15.215 16.368 25.744 31.344 25.744 2.064 0 4.192-.193 6.288-.624 79.968-15.905 138-87.185 138-169.44-.016-85.025-58.447-156.465-138.928-169.89z"></path></svg>
                    </button>


                </div>
                <!-- End of Volume  -->

                <button
                    type="button"
                    class="cursor-pointer [&>svg]:size-[18px]"
                    aria-label="Close player"
                    onclick={closeWindowPlayer}
                >
                    <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 1024 1024" height="18" width="18" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg>
                </button>
            </div>
        </div>
    </div>
{/if}