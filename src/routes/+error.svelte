<script lang="ts">
    import '../app.css';
</script>

<svelte:head>
    <title>Page not found - Felipe Ornelis</title>
</svelte:head>

<section class="app">
    <div>
        <h1>Page not found</h1>
        <p>This website is currently under construction.</p>
        <p>hello@felipeornelis.com</p>
    </div>
</section>

<style>
    .app {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .app div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .app div h1 {
        font-weight: bold;
        letter-spacing: -0.2rem;
        font-size: 3rem;
        text-align: center;
        font-family: Inter, sans-serif;
    }

    .app div p {
        font-family: Inter, sans-serif;
        text-align: center;

    }
</style>