<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";

	let { children } = $props();
    import "../app.css";
</script>
<NavBar></NavBar>
<div class="body">
    {@render children()}
</div>

<style>
    .body {
        margin-top: 55px;
    }
</style>