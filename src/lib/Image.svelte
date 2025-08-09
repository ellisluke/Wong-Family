<script>
    import { Modal, Content, Trigger } from "sv-popup";

    let { src, w, h, title, desc, } = $props();
</script>

<div style="max-width: {w}%; max-height: {h}%; object-fit: cover;">
    <Modal basic big={true}>
        <Content class="p-4">
            <div class="img-container">
                <a href="{src}">
                    <img src="{src}" alt="A pop up of {title}" class="modal-img">
                </a>
            </div>
            <div class="text-container">
                <p class="title">{title}</p>
                <p class="desc">{desc}</p>
            </div>
        </Content>
        <Trigger>
            <img src="{src}" alt="{title}" class="trigger-img">
        </Trigger>
    </Modal>
    
</div>


<style>
    .trigger-img {
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

    .modal-img {
        max-height: 400px;
        max-width: 100%;
    }

    .img-container {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .text-container {
        width: 50%;
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 30px 10px 10px 10px;
        z-index: -1;
        max-height: 400px;
        overflow: scroll;
    }

    .title {
        font-size: 24px;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        .img-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .text-container {
            width: 100%;
            position: relative;
            max-height: 300px;
            overflow: scroll;
        }
    }
</style>