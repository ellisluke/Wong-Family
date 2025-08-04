<script>
    import { fly } from 'svelte/transition';
    import { Hamburger } from 'svelte-hamburgers';
    let open = $state(false);
</script>

<nav class="desktop-nav">
    <svg class="family-crest" data-name="Layer 1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20,5H13V4a1,1,0,0,0-2,0V5H4A1,1,0,0,0,4,7H15.88214a14.49252,14.49252,0,0,1-3.94067,7.95227A14.42561,14.42561,0,0,1,8.66406,9.67041a1.0002,1.0002,0,0,0-1.88867.65918,16.41412,16.41412,0,0,0,3.68012,5.95825,14.29858,14.29858,0,0,1-5.769,2.73511A1.00015,1.00015,0,0,0,4.89941,21a1.01758,1.01758,0,0,0,.21485-.023,16.297,16.297,0,0,0,6.831-3.31885A16.38746,16.38746,0,0,0,18.78711,20.977a1,1,0,0,0,.42578-1.9541,14.38226,14.38226,0,0,1-5.78955-2.73316A16.4802,16.4802,0,0,0,17.89233,7H20a1,1,0,0,0,0-2Z" fill="#ffffff"/></svg>
    <a href="/"><div>HOME</div></a>
    <a href="/about"><div>ABOUT</div></a>
    <a href="/documents"><div>DOCS</div></a>
    <a href="/gallery"><div>GALLERY</div></a>
</nav>

<nav class="hamburger-nav">
    <svg class="family-crest" data-name="Layer 1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20,5H13V4a1,1,0,0,0-2,0V5H4A1,1,0,0,0,4,7H15.88214a14.49252,14.49252,0,0,1-3.94067,7.95227A14.42561,14.42561,0,0,1,8.66406,9.67041a1.0002,1.0002,0,0,0-1.88867.65918,16.41412,16.41412,0,0,0,3.68012,5.95825,14.29858,14.29858,0,0,1-5.769,2.73511A1.00015,1.00015,0,0,0,4.89941,21a1.01758,1.01758,0,0,0,.21485-.023,16.297,16.297,0,0,0,6.831-3.31885A16.38746,16.38746,0,0,0,18.78711,20.977a1,1,0,0,0,.42578-1.9541,14.38226,14.38226,0,0,1-5.78955-2.73316A16.4802,16.4802,0,0,0,17.89233,7H20a1,1,0,0,0,0-2Z" fill="#ffffff"/></svg>
    <div class="hamburger">
        <Hamburger
            bind:open
            type="collapse"
            title="Toggle nav links"
            ariaControls="nav"
            --color="white"
        />
    </div>
        {#if open}
            <div class="hamburger-menu" transition:fly={{ y: -15 }}>
                <ul id="nav" class="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/documents">Documents</a></li>
                </ul>
            </div>
        {/if}
    
    
</nav>

<style>
    .desktop-nav {
        visibility: visible;
        padding-left: 35%;
        /* display: flex;
        justify-content: center; */
    }
    .hamburger-nav {
        visibility: hidden;
    }
    .hamburger {
        position: absolute;
        right: 10px;
    }

    .hamburger-menu {
        position: absolute;
        left: 0px;
        top: 55px;
        width: 100%;
        color: white;
        background-color: rgb(155, 0, 0);
        font-size: 5rem;
        text-align: right;
        padding-right: 5%;
    }
    nav {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 55px;
        background-color: rgb(155, 0, 0);
    }

    .desktop-nav a div {
        width: 15%;
        min-width: 100px;
        height: 55px;
        background-color: rgb(155, 0, 0);
        display: flex;
        justify-content: center; 
        align-items: center; 
        float: left;
        color: white;
    }

    .desktop-nav a div:hover {
        transition: ease 0.2s;
        background-color: rgb(136, 1, 1);
        
    }

    .family-crest {
        height: 50px;
        width: 50px;
        position: absolute;
        top: 3px;
        left: 3px;
    }

    @media only screen and (max-width: 600px) {
        .desktop-nav {
            visibility: hidden;
        }
        .hamburger-nav {
            visibility: visible;
        }
        
    }   
</style>