<script>
    import NavBar from "$lib/NavBar.svelte";
    import LeftBanner from "./LeftBanner.svelte";
    import RightBanner from "./RightBanner.svelte";

</script>
<NavBar></NavBar>
<div class="body">

    <RightBanner title="Wong Sing Chew by A.K." desc="Read A.K. Wong's writing of his father's life" link="/documents/WongSingChewBio" image="/src/lib/images/documents/BiographyOfWongSingChew1.jpg" offset="-270" scale="1.1"></RightBanner>
    <LeftBanner title="1930 Census" desc="A.K.'s answer to the U.S. Census" link="/documents/1930Census" image="/src/lib/images/documents/1930census.jpg" offset="-250" scale="2"></LeftBanner>
</div>
<style>
    .body {
        margin-top: 55px;
    }
</style>