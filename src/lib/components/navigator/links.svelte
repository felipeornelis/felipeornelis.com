<script>
	import { navigation } from "$lib/config/navigation";
</script>

<nav>
    {#each navigation as { label, href }}
        <a {href} class="nav-link">{label}</a>
    {/each}
</nav>

<style lang="scss">
    nav {
        display: none;

        @media screen and (min-width: 840px) {

            & {
                display: flex;
                align-items: center;

                & a + a {
                    margin-left: 0.125rem;
                }
            }

        }        
    }
</style>