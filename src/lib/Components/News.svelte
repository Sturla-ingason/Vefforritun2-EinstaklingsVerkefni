<script>
    import { goto } from '$app/navigation';
    let { name, excerpt, id } = $props();
</script>

<section class="mainSection">
    <div class="mainDiv" role="button" tabindex="0" onclick={() => goto(`/Blog/${id}`)} onkeydown={(e) => e.key === 'Enter' && goto(`/Blog/${id}`)}>
        <h3>{name}</h3>
        <p>{excerpt}</p>
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

        border-radius: 15px;
        cursor: pointer;
    }

    .mainDiv:hover {
        background-color: rgb(30, 30, 30);
    }
</style>
