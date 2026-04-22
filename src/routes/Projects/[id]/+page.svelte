<script>
    import Navigation from "$lib/Components/Navigation.svelte";

    let { data } = $props();
</script>

<main>
    <Navigation latestId={data.latestId}/>

    <section class="aboutSection">
        <div class="mainDiv">
            <div class="topBar">
                <button class="back" onclick={() => history.back()}>← Back</button>
                {#if data.project.url}
                    <a href={data.project.url} target="_blank" rel="noopener noreferrer" class="link">View Project</a>
                {/if}
            </div>
            <h1>{data.project.title}</h1>
            <p>{data.project.content}</p>
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

    .aboutSection {
        background-color: rgb(162, 162, 162);

        padding: 1rem;
        display: flex;
        flex-direction: column;

        border-radius: 15px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.4);

        grid-column: 4/13;
        grid-row: 1/13;
    }

    .mainDiv {
        background-color: black;
        color: white;

        display: flex;
        flex-direction: column;
        flex: 1;

        padding: 1rem;

        border-radius: 15px;
    }

    h1 {
        text-align: center;
    }

    .topBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .link {
        padding: 0.4rem 1rem;
        background-color: white;
        color: black;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
    }

    .link:hover {
        background-color: rgb(220, 220, 220);
    }

    .back {
        padding: 0.4rem 1rem;
        background-color: white;
        color: black;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
    }

    .back:hover {
        background-color: rgb(220, 220, 220);
    }
</style>
