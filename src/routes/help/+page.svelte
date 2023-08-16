<script>
	import Metadata from "$lib/components/metadata/metadata.svelte";
</script>

<Metadata
    title="Help"
    description="Quick information to guide you on this website"
/>

<section>
    <header>
        <h1>Help</h1>
        <time datetime="2023-08-07">Quick information to guide you on this website.</time>
    </header> 

    <div>
        <p><strong>What is this website about?</strong></p>
        <p>It's a quite simple space on internet where information about web development, development experience, user experience, quality assurance and data protection legislation is shared.</p>

        <p><strong>Who is the maintainer?</strong></p>
        <p>Felipe Ornelis is the only maintainer of this website. No one else have access to any stored data. All content generated here reflects his opinion only.</p>
    </div>
</section>


<style lang="scss">
    section {
        margin-bottom: 5.75rem;
        max-width: var(--max-content-width);
        margin-left: auto;
        margin-right: auto;
        padding-top: calc(var(--navigator-height) + 3rem);
        padding-left: 1.25rem;
        padding-right: 1.25rem;

        & header {
            & h1 {
                text-align: left;
                font-size: 3rem;
                font-weight: var(--semibold);
                letter-spacing: -0.075rem;                
            }

            & time {
                text-align: left;
                font-size: var(--font-large);
                font-weight: var(--medium);
                color: #52525B;
            }

            & h1 + time {
                margin-top: 0.75rem;
            }
        }

        & div {
            margin-top: 3.125rem;

            & p {
                font-size: 18px;
                text-align: justify;
            }
        }
    }
</style>