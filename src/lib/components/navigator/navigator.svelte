<script lang="ts">
    import Link from './link.svelte'

    const links = [
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Technology', href: '/technology' },
        { label: 'Knowledge', href: '/knowledge' },
        { label: 'About', href: '/about' },
    ]
</script>

<header class="w-full h-16 bg-[#121116]/80 backdrop-blur-md fixed top-0 left-0 px-6">
    <div class="max-w-5xl h-full mx-auto flex items-center justify-between">
        <div>
            <img src="/logo.svg" alt="Felipe Ornelis logo" />
        </div>

        <nav>
            <ul class="h-full flex items-center gap-12">
                {#each links as link}
                    <Link {...link} />
                {/each}
            </ul>
        </nav>
    </div>
</header>