<script lang="ts">
    import { Carousel, Controls } from "flowbite-svelte";
    
    let {images, title, date, description} = $props();
</script>

<div class="page">
    <div class="document-container">
        <Carousel {images} class="carousel">
            <Controls />
        </Carousel>
    </div>
    <div class="document-details">
        <div class="title">{title}</div>
        <div class="date">{date}</div>
        <div class="desc">{description}</div>
    </div>
</div>

<style>
    .page {
        width: 100%;
        display: flex;
        flex-wrap: wrap; /* Allows wrapping */  
        justify-content: flex-start; /* Aligns items to the left */
    }
    .document-container {
        width: 50%;
        height: 1000px;
        background-color: blue;
    }
    .carousel {
        width: 100%;
        height: 100%;
    }
    .carousel img {
        height: 100%;
    }

    .document-details {
        padding-left: 2%;
        width: 48%;
        height: 500px;
        background-color: red;
    }

    .title {
        width: 100%;
        height: 50px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 20px;
        background-color: green;
        color: black;
    }

    .date {
        width: 100%;
        height: 30px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 15px;
        background-color: orange;
        color: gray;
    }

    .desc {
        width: 100%;
        height: 300px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
        background-color: purple;
        color: black;
    }
</style>