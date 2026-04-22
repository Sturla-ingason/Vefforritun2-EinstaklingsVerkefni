<script>
  import Navigation from "$lib/Components/Navigation.svelte";

  let { data } = $props();
</script>

<main>
    <Navigation latestId={data.latestId}/>

    <section class="aboutSection">
        <div class="mainDiv">
            <h1>Um Mig</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Fusce id elit ut ante convallis rhoncus. 
                Donec cursus metus consequat feugiat tempus. 
                Aliquam sed massa imperdiet, sollicitudin nisl ut, 
                condimentum odio. Donec ligula eros, ullamcorper 
                id tempor sit amet, cursus non justo. Sed sem massa,
                ultricies fermentum tellus sit amet, sodales finibus 
                urna. Sed ex nulla, iaculis nec leo ac, egestas tempus 
                est. Nullam porttitor ex et enim consequat interdum. 
                Fusce vehicula eros vel eros dictum facilisis et vitae 
                orci.</p>
        </div>
    </section>
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

    .aboutSection{
        background-color: rgb(162, 162, 162);

        padding: 1rem;
        display: flex;
        flex-direction: column;

        border-radius: 15px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.4);

        grid-column: 4/13;
        grid-row: 1/13;
    }

    .mainDiv{
        background-color: black;
        color: white;

        text-align: center;

        display: flex;
        flex-direction: column;
        flex: 1;

        padding: 1rem;

        border-radius: 15px;

    }

</style>