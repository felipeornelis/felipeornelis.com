<script lang="ts">
    import type { PageProps } from "./$types";
	import { marked } from 'marked';
	import { Head, type HeadProps } from '$lib/components/head';
    import * as Post from '$lib/components/views/post'

    let { data }: PageProps = $props();

    const wpm = 250
    const words = data.post.content.split(' ').length;
    const readTime = Math.round(words / wpm);

    let metadata: HeadProps = {
        title: data.post.title,
        thumbnail: data.post.image,
    }
</script>

<Head {...metadata} />

<Post.Root author={data.post.author.name} role={data.post.author.role}>
    <Post.Header
        title={data.post.title}
        publishedAt={data.post.publishedAt}
        image={data.post.image}
        {readTime}
    />

    <Post.Content>
        {@html marked.parse(data.post.content)}
    </Post.Content>
</Post.Root>
