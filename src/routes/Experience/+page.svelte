
<script>
    import Navigation from "$lib/Components/Navigation.svelte";

  let { data } = $props();
</script>


<main>

    <Navigation latestId={data.latestId}/>

</main>


<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    main {
        background-color: antiquewhite;

        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;

        height: 100vh;
        overflow: hidden;
    }
</style>