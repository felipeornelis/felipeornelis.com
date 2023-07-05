<script>
    import { Sidebar, Metadata } from '$lib/components';

    import '$lib/styles/app.css';
</script>

<Metadata />

<div class="w-screen h-screen flex">
    <Sidebar />

    <main class="w-full h-full flex flex-col justify-between items-center px-10 lg:px-40 py-10">
        <div></div>

        <slot/>

        <footer class="w-full flex flex-col items-center gap-1">
            <span class="text-[#fffffd] font-poppins text-center text-sm lg:text-base">hello@felipeornelis.com</span>
            <p class="text-[#5b5a67] font-poppins text-center text-sm lg:text-base">&copy; Felipe Ornelis 2023. All rights reserved.</p>
        </footer>
    </main>
</div>