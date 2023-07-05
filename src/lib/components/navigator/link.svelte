<script lang="ts">
    import { page } from "$app/stores";

    export let label: string;
    export let href: string;
</script>

<li>
    <a
        {href}
        class="text-white text-sm font-medium relative opacity-70 transition-all duration-300 hover:opacity-100 {$page.url.pathname === href ? '!opacity-100' : ''}"
    >
        {label}
    </a>
</li>