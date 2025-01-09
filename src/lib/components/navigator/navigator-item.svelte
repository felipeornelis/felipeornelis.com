<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
    import { page } from '$app/state';
	import { navigator_item, type NavigatorItemProps } from './variant';


    interface Props extends HTMLAnchorAttributes{
        label: string;
    }

    let { label, href, ...props }: Props = $props();
</script>

<a
    {href}
    draggable="false"
    class={navigator_item({ status: page.url.pathname === href ? 'active' : 'inactive' })}
    {...props}
>
        {label}
</a>