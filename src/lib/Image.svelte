<script>
    let { src, w, h, title, desc, } = $props();
</script>

<div style="width: {w}%; height: {h}%;">
    <a href="{src}" >
        <img src="{src}" alt="{title}">
    </a>
</div>


<style>
    img {
        max-height: 100%;
        max-width: 100%;
    }
</style>