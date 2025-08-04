<script>
    let { src, w, h, title, desc, } = $props();
</script>

<div style="max-width: {w}%; max-height: {h}%; object-fit: cover;">
    <a href="{src}" >
        <img src="{src}" alt="{title}">
    </a>
</div>


<style>
    img {
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }
</style>