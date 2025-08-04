<script>
    let {image, title, date, desc} = $props();
</script>

<div class="body">
    <img src="{image}" alt="Image of {title}">
    <div class="text">
        <p class="title">{title}</p>
        <p class="date">{date}</p>
        <p class="desc">{desc}</p>
    </div>
</div>
<style>
    .body {
        width: 100%;
    }

    img {
        width: 90%;
        margin-left: 5%;
    }

    .text {
        width: 50%;
        margin-left: 25%;
        padding-bottom: 20%;
    }

    .title {
        font-size: 3.2rem;
        text-align: center;
    }

    .date {
        font-size: 2rem;
        text-align: center;
        color: rgb(104, 104, 104);
    }

    .desc {
        font-size: 1.2rem;
    }

    p {
        color: black;
    }
</style>