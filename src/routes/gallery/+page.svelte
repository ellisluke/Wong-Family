<script>
    import Image from "$lib/Image.svelte";

    import {gallery} from "./gallery.js";

</script>

<p>This gallery includes significant or rare images (new and old) of Wong family members. 
    See the <a href="/about">about</a> page for instructions on how to submit images to this gallery.</p>


<div class="gallery">
    {#each gallery as image}
        <div class="gallery-image">
            <Image title={image.title} desc={image.desc} src={image.src} w=100 h=100></Image>
        </div>
    {/each}
</div>

<style>
    p {
        font-size: 18px;
        margin-top: 80px;
        margin-bottom: 20px;
        margin-left: 10%;
        width: 80%;
    }
    a {
        text-decoration: underline;
    }
    .gallery {
        width: 100%;
        height: 100%;
    }
    .gallery-image {
        height: 300px;
        width: 32%;
        border: 2px black solid;
        margin-left: 1%;
        margin-top: 1%;
        float: left;
        overflow: hidden;
    }

    @media screen and (max-width: 1000px) {
        .gallery-image {
            width: 49%;
        }
    }
    @media screen and (max-width: 768px) {
        .gallery-image {
            width: 98%;
        }
    }
</style>