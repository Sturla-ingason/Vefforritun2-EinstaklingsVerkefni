<script>
    let { latestId } = $props();
</script>


<div class="mainDiv">
    <section class="headerName">
        <h2><a href="/">Sturla Ingason Blogg</a></h2>
    </section>

    <section class="navigation">

        <div>
            <h3>Articles</h3>
            <ul>
                <li><a href="/Blog/{latestId}">What's the latest</a></li>
                <li><a href="/AllBlogs">All the blogs</a></li>
            </ul>
        </div>

        <div>
            <h3>Um Mig</h3>
            <ul>
                <li><a href="/AboutMe">Who Am I?</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Experience">Experience</a></li>
            </ul>
        </div>

    </section>
</div>


<style>
    .mainDiv{
        background-color: rgb(162, 162, 162);
        display: flex;
        flex-direction: column;

        grid-column: 1/4;
        grid-row: 1/13;

        border-radius: 15px;
        box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.4);
    }

    .headerName{
        background-color: black;
        color: white;
        text-align: center;

        margin: 1rem;
        padding: 2rem;

        border-radius: 15px;
    }

    .navigation{
        background-color: black;
        color: white;

        border-radius: 15px;

        margin: 1rem;
        padding: 1rem;

        flex: 1;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    ul{
        list-style-type: none;
    }

    li{
        padding: 0.5rem;
    }


</style>