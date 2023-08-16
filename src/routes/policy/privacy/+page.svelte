<script>
	import { Metadata } from "$lib/components";
</script>

<Metadata
    title="Privacy Policy"
    description="Information about privacy policy"
/>

<section>
    <header>
        <h1>Privacy Policy</h1>
        <time datetime="2023-08-15">Last updated in 15 Aug 2023</time>
    </header> 

    <div>
        <p>Felipe Ornelis is commited to upholding your privacy rights as legal entity based in Brazil under the corporation designation "FELIPEORNELIS.COM".</p>

        <p>This privacy policy is fully compliant with Brazil's General Data Protection Law (LGDP), <strong>law No. <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank">13709/18</a></strong>. By accessing https://felipeornelis.com and associated subdomains, you indicate your consent to operate within the confines of this legal jurisdiction and adhere to the tenets of this and other applicable policies. Should any aspect of these practices be in disagreement with your preferences, we kindly request that you refrain from utilising the aforementioned websites.</p>
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