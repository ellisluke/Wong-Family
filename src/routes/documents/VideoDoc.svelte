<script>
    let { link, title, date, desc } = $props();
</script>

<div class="container">
    <div class="video-container">
        <iframe width="100%" height="100%" src="{link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="info-container">
        <p class="title">{title}</p>
        <p class="date">{date}</p>
        <p class="desc">{desc}</p>
    </div>
</div>

<style>
    .container {
        width: 100%;
        padding: 5% 5% 5% 5%;
    }

    .video-container {
        width: 80%;
        aspect-ratio: 1.5;
        margin-left: 10%;
    }

    .info-container {
        margin-top: 30px;
        margin-bottom: 10%;
    }

    .title {
        text-align: center;
        font-size: 28px;
        font-weight: bold;
    }

    .date {
        text-align: center;
        font-size: 20px;
        color: gray;  
    }
    
    .desc {
        width: 80%;
        margin-left: 10%;
        margin-top: 20px;
        font-size: 18px;
    }

</style>