<script>
  import MobileNavigation from "$lib/MobileComponents/MobileNavigation.svelte";
</script>

<main>
    <MobileNavigation/>



</main>


<style>

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