<script>
    let open = $state(false);
</script>

<section class="testing">

    <div class="mainDiv">
        <div class="heading">
            <h2>Sturla Ingason Blog</h2>
            <button onclick={() => open = !open} class="hamburger" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        {#if open}
        <nav>
            <button onclick={() => open = false} class="close" aria-label="Close navigation">✕</button>
            <p>testing1</p>
            <p>testing2</p>
        </nav>
        {/if}
    </div>



</section>



<style>

    .testing{
        grid-column: span 13;
    }

    .mainDiv{
        background-color: grey;

        padding: 1rem;

        border-radius: 15px;

        border-radius: 15px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.4);
    }

    .heading{
        background-color: black;
        color: white;
        
        padding: 1rem;

        border-radius: 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .hamburger {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 0.5rem;
    }

    .hamburger span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: white;
        border-radius: 3px;
    }

    .close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        display: block;
        margin-left: auto;
    }

    nav {
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: grey;
        padding: 2rem;
        box-sizing: border-box;
        z-index: 100;
    }

</style>