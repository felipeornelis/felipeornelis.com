<script>
	import { Heading, Metadata, Section } from "$lib/components";
</script>

<Metadata
    title="About me"
    description="I'm passionate about innovation, continuous learning and pizza."
/>

<div>
    <h1>
        <span>Hello, there!</span>
        <span>I'm <span class="author-name">Felipe Ornelis</span></span>
    </h1>

    <p>Creating reliable solutions and passionate about innovation, continuous learning and pizza.</p>
</div>

<Section variant>
    <p>I am a dedicated and passionate software developer, driven by a deep-seated love for innovation and a relentless pursuit of knowledge. With a strong foundation in web application development and a keen focus on crafting impactful and user-centric solutions, I have honed my skills in a diverse range of technologies.</p>

    <p>My journey in software development has led me to delve into the realm of RESTful APIs, where I've excelled at creating seamless connections between applications, enabling them to communicate effortlessly. My toolkit boasts an array of powerful technologies, including Svelte, React, Sass, TypeScript, Node.js, Go, and Docker. These tools are not just technologies to me; they are instruments that allow me to <strong>turn ideas into reality</strong>.</p>

    <p>My experience extends beyond the code, as I've also ventured into the world of quality assurance. With a background as a test analyst and test leader, I have developed a knack for ensuring the reliability and functionality of software through rigorous functional, automated, and regression testing. This holistic perspective enables me to create solutions that not only perform flawlessly but also stand up to the demands of the real world.</p>

    <p>Driven by a thirst for innovation and a quest for excellence, I am eager to be a part of a dynamic and forward-thinking environment. I believe that my skills are best utilized in collaboration, where my contributions can amplify the creativity and efficiency of the team. I thrive on challenges that push me to my limits, and I welcome opportunities that allow me to grow both as a professional and as an individual.</p>

    <p>As I navigate the ever-evolving landscape of software development, my goal remains clear: to stand out as a top-tier developer who not only writes code but crafts experiences, who not only solves problems but empowers change. Let's connect and explore how our shared passions and aspirations can drive innovation to new heights.</p>
</Section>

<Section>
    <Heading
        title="Let's work together"
        description="Drop me a message and I will get back to you as soon as possible."
    />

    <div class="contact">
        <span>
            hello@felipeornelis.com
        </span>
    </div>
</Section>

<style lang="scss">
    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        row-gap: 2.75rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;

        & h1 {
            font-size: 2.75rem;
            font-weight: var(--bold);
            letter-spacing: -0.125rem;
            max-width: var(--max-boundary);
            margin-left: auto;
            margin-right: auto;
            padding-top: calc(var(--navigator-height) + 1rem);
            text-align: center;
            display: flex;
            flex-direction: column;

            & .author-name {
                background: linear-gradient(to right, rgb(165, 180, 252), rgb(192, 132, 252));
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            @media screen and (min-width: 640px) {
                & {
                    font-size: 4rem;
                }
            }
        }

        & p {
            max-width: var(--max-lg);
            text-align: center;
            font-size: var(--font-normal);
            font-weight: var(--medium);
            color: #52525B;

            @media screen and (min-width: 640px) {
                & {
                    font-size: var(--font-large);
                }
            }
        }       
    }

    :global(section) p {
        $max-width: 43rem;

        max-width: $max-width;
        margin-left: auto;
        margin-right: auto;
        text-align: justify;
        font-size: var(--font-normal);

        @media screen and (min-width: 640px) {
            & {
                font-size: 1.125rem;
            }
        }
    }

    .contact {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: #0C0C0C;
        border: 1px solid #252525;
        margin-top: 3.125rem;
        padding-top: 5.125rem;
        padding-bottom: 5.125rem;

        & span {
            font-weight: var(--bold);
            font-size: 18px;

            @media screen and (min-width: 840px) {
                font-size: 24px;
            }
        }
    }
</style>