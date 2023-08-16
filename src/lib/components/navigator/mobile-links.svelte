<script>
    import { navigation } from "$lib/config/navigation";
	import { HorizontalMenu, X } from "$lib/icons/elements";
    import { mobileMenu } from '$lib/stores/mobile-menu'

    function handleOnClick() {
        mobileMenu.toggle();
    }
</script>

<button on:click|preventDefault={handleOnClick}>
    {#if !$mobileMenu}
        <HorizontalMenu size={32} color="#ffffff" />
    {:else}
        <X size={32} color="#ffffff" />
    {/if}
</button>

{#if $mobileMenu}
<div aria-hidden={!$mobileMenu}>
    <ul>
        {#each navigation as { label, href }}
            <a
                {href}
                class="nav-link"
                on:click={() => mobileMenu.close()}
            >
                {label}
            </a>
        {/each}
    </ul>
</div>
{/if}

<style lang="scss">
    button {
        z-index: 40;
        
        @media screen and (min-width: 840px) {
            display: none;
        }
    }

    div {
        z-index: 30;
        position: absolute;
        inset: 0;
        width: 100%;
        min-height: 100vh;
        background: #000;
        color: #fff;
        display: flex;
        align-items: flex-start;

        @media screen and (min-width: 840px) {
            display: none;
        }

        & ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            row-gap: 1.125rem;
        }
    }
</style>
