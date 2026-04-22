<script>
    import { goto } from '$app/navigation';
    let { title, url, id } = $props();
</script>

<section class="mainSection">
    <div class="mainDiv" role="button" tabindex="0" onclick={() => goto(`/Projects/${id}`)} onkeydown={(e) => e.key === 'Enter' && goto(`/Projects/${id}`)}>
        <h3>{title}</h3>
        {#if url}
            <a href={url} target="_blank" rel="noopener noreferrer" class="link" onclick={(e) => e.stopPropagation()}>View Project</a>
        {/if}
    </div>
</section>

<style>
    .mainSection {
        background-color: rgb(162, 162, 162);

        padding: 1rem;
        flex: 1;
        display: flex;
        flex-direction: column;

        border-radius: 15px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.4);
    }

    .mainDiv {
        background-color: black;
        color: white;

        padding: 1rem;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-radius: 15px;
        cursor: pointer;
    }

    .mainDiv:hover {
        background-color: rgb(30, 30, 30);
    }

    .link {
        padding: 0.4rem 1rem;
        background-color: white;
        color: black;
        border-radius: 8px;
        text-decoration: none;
        font-weight: bold;
        white-space: nowrap;
    }

    .link:hover {
        background-color: rgb(220, 220, 220);
    }
</style>
