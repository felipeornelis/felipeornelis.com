<script>
    /** @type {boolean} */
    export let variant = false;
</script>

<section class:variant>
    <div>
        <slot />
    </div>
</section>

<style lang="scss">
    section {
        background-color: var(--section-bg-color);
        padding-left: 1.25rem;
        padding-right: 1.25rem;

        &.variant {
            background-color: var(--section-alternative-bg-color);
            border-style: solid;
            border-color: #252525;
            border-top-width: 1px;
            border-bottom-width: 1px;
            border-left-width: 0;
            border-right-width: 0;
        }

        & div {
            max-width: var(--max-boundary);
            margin-left: auto;
            margin-right: auto;
            padding-top: 3.75rem;
            padding-bottom: 3.75rem;
        }
    }
</style>