<script>
    let { link, image, title, desc, offset, scale } = $props();
</script>

<a href="{link}">
    <div class="banner">
        <p class="title">{title}</p>
        <p class="desc">{desc}</p>
        <img src="{image}" alt="Banner here" style={`top: ${offset}px; scale: transform: scale(${scale})`}>
        
    </div>
</a>

<style>
    .banner {
        width: 100%;
        height: 300px;
        background-image: linear-gradient(to left, rgb(255, 222, 222), rgb(255, 78, 78));
        overflow: hidden;
        position: relative;
    }
    p {
        color: white;
        text-align: left;
        margin-left: 20px;
    }
    .title {
        margin-top: 30px;
        font-size: 3rem;
    }
    .desc {
        font-size: 2rem;
    }

    img {
        opacity: 30%;
        position: relative;
        filter: blur(3px);   
    }
</style>