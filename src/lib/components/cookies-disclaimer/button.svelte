<script>
	import { cookiesConsent } from "$lib/services/cookies-disclaimer";
    import { cookiesDisclaimer } from "$lib/stores/cookies-disclaimer";
    
    function handleOnClick() {
        cookiesDisclaimer.close();
        cookiesConsent.set(true);
    }
</script>

<button on:click={handleOnClick}>
    <slot />
</button>

<style>
    button {
        font-size: 14px;
        color: #ffffff;
        background: #000000;
        padding: 0.875rem 1.875rem;
        font-weight: var(--semibold);
        border-radius: 9999px;
        text-align: center;
        column-gap: 0.8rem;
        border: 1px solid #252525;
    }
</style>