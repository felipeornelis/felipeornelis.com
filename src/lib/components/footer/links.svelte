<script>
	import Networks from "./networks.svelte";
</script>

<div>
    <Networks />

    <ul>
        <li>
            <a href="/help" class="nav-link">Help</a>
        </li>
        <li>
            <a href="/policy/privacy" class="nav-link">Privacy Policy</a>
        </li>
    </ul>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 840px) {
            flex-direction: row;
        }

        & ul {
            margin-left: 1.25rem;
            margin-top: 1.25rem;

            @media screen and (min-width: 840px) {
                margin-top: 0;
            }
            
            & li + li {
                margin-left: 0.5rem;
            }
        }
    }
</style>