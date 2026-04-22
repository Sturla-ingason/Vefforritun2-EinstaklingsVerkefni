
<script>
    import Navigation from "$lib/Components/Navigation.svelte";
    import News from "$lib/Components/News.svelte";

    let { data } = $props();
</script>

<main>
    <Navigation latestId={data.latestId}/>

    <section class="newsSection">

        <div class="newsDiv">
            <header>
                <h1>{data.latest?.title ?? 'No posts yet'}</h1>
            </header>
            <section class="textDiv">
                <p>{data.latest?.excerpt ?? ''}</p>
            </section>
        </div>

    </section>

    <section class="newsColumn">
        {#each data.rest as post (post.id)}
            <News name={post.title} excerpt={post.excerpt} id={post.id}/>
        {/each}
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

    .newsSection{

        background-color: rgb(162, 162, 162);
        display: flex;
        flex-direction: column;

        grid-column: 4/9;
        grid-row: 1/13;

        border-radius: 15px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.4);

    }

    .newsDiv{
        background-color: black;
        color: white;

        border-radius: 15px;

        margin: 1rem;

        flex: 1;
    }

    .newsColumn {
        grid-column: 9 / 13;
        grid-row: 1 / 13;
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        gap: 1rem;
    }


    .textDiv{
        padding-inline: 2rem;
    }

    header{
        text-align: center;
        padding: 1rem
    }


</style>