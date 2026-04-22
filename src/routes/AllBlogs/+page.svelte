<script>
  import Navigation from "$lib/Components/Navigation.svelte";
  import News from "$lib/Components/News.svelte";

  let { data } = $props();
</script>

<main>
    <Navigation latestId={data.latestId}/>

    <section class="newsColumn">
        <div class="posts">
            {#each data.posts as post (post.id)}
                <News name={post.title} excerpt={post.excerpt} id={post.id}/>
            {/each}
        </div>

        <section class="paginationSection">
            <div class="pagination">
                {#if data.page > 1}
                    <a href="/AllBlogs?page={data.page - 1}">← Previous</a>
                {/if}
                <span>Page {data.page} of {data.totalPages}</span>
                {#if data.page < data.totalPages}
                    <a href="/AllBlogs?page={data.page + 1}">Next →</a>
                {/if}
            </div>
        </section>

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

    .newsColumn {
        grid-column: 4 / 13;
        grid-row: 1 / 13;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-height: 0;
    }

    .posts {
        flex: 1;
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        gap: 1rem;
        min-height: 0;
    }

    .paginationSection {
        background-color: rgb(162, 162, 162);

        padding: 1rem;

        border-radius: 15px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.4);
    }

    .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: black;
        color: white;
        border-radius: 15px;
    }

    .pagination a {
        color: white;
        text-decoration: none;
    }

</style>