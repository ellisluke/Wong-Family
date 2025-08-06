<script>
    let { link, image, title, desc, offset, scale } = $props();
</script>

<a href="{link}">
    <div class="banner">
        <p class="title">{title}</p>
        <p class="desc">{desc}</p>
        <img src="{image}" alt="Banner image here" style={`top: ${offset}px; scale: transform: scale(${scale})`}>
        
    </div>
</a>

<style>
    .banner {
        width: 100%;
        height: 300px;
        background-image: linear-gradient(to right, rgb(255, 222, 222), rgb(155, 0, 0));
        overflow: hidden;
        position: relative;
    }
    p {
        color: white;
        text-align: right;
        margin-right: 20px;
    }
    .title {
        margin-top: 30px;
        font-size: 3rem;
    }
    .desc {
        font-size: 2rem;
    }

    img {
        opacity: 40%;
        position: relative;
        filter: blur(3px);   
    }
</style>