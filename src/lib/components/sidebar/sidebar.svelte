<script lang="ts">
    import { Github, Linkedin, Twitter } from '$lib/icons';    

    const networks = [
        {
            icon: Twitter,
            href: 'https://twitter.com/felipeornelis'
        },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/felipeornelis'
        },
        {
            icon: Github,
            href: 'https://github.com/felipeornelis'
        }
    ]
</script>

<aside class="w-20 h-full flex flex-col items-center justify-center shrink-0 border-r bg-white border-r-slate-900">
    <ul class="flex flex-col gap-14">
        {#each networks as { icon, href }}
            <li class="p-2 bg-transparent w-full h-full rounded-full transition-all duration-300 cursor-pointer group hover:bg-dark">
                <a
                    {href}
                    target="_blank"
                    rel="noreferrer nofollow"
                >
                    <svelte:component this={icon} color="#121116" size={24} class="group-hover:fill-white"/>
                </a>
            </li>
        {/each}
    </ul>
</aside>