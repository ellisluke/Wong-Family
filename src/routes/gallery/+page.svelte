<script>
    import Image from "$lib/Image.svelte";

    let gallery = [
        {title: "Test", desc: "testing 123", src: "/images/documents/1930census.jpg" },
        {title: "Test2", desc: "testing 123", src: "/images/documents/SecondGenWongs.jpg" },
        {title: "Test3", desc: "testing 123", src: "/images/documents/1930census.jpg" },
        {title: "Test4", desc: "testing 123", src: "/images/documents/SecondGenWongs.jpg" },
    ]

</script>

<p>This gallery includes significant images (new and old) of Wong family members. 
    See the <a href="/about">about</a> page for instructions on how to submit images to this gallery.</p>


<div class="gallery">
    {#each gallery as image}
        <div class="gallery-image">
            <Image title={image.title} desc={image.desc} src={image.src} w=100 h=100></Image>
        </div>
    {/each}
</div>

<style>
    .gallery {
        width: 100%;
        height: 100%;
        background-color: blue;
    }
    .gallery-image {
        height: 300px;
        width: 30%;
        border: 2px black solid;
        margin-left: 1%;
        margin-top: 1%;
        float: left;
        overflow: hidden;
    }
</style>