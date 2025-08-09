<script lang="ts">
  import { Position, useSvelteFlow, type NodeProps, Handle } from '@xyflow/svelte';
  import { Modal, Content, Trigger } from "sv-popup";
 
  let { id, data }: NodeProps = $props();
 
  let { updateNodeData } = useSvelteFlow();
</script>

{#if data.top}
  <Handle type="target" position={Position.Top} />
{/if}

{#if data.left}
  <Handle type="target" position={Position.Left} />
{/if}

{#if data.right}
  <Handle type="source" position={Position.Right} />
{/if}

{#if data.bottom}
  <Handle type="source" position={Position.Bottom} />
{/if}
 
<div class="member-node nodrag">
  <Modal basic>
    <Content>
      <div class="modal-container">
        <a href="{data.image}">
          <img src={data.image} alt={data.text} draggable="false" class="modal-img">
        </a>
      </div>
      <p class="modal-name">{data.text}</p>
    </Content>
    <Trigger>
      <img src={data.image} alt={data.text} draggable="false" style="max-width: {300 * data.scale}px; max-height {200 * data.scale}px;">
      <p>{data.text}</p>
    </Trigger>
  </Modal>
</div>

<style>
  .member-node {
    border: 2px solid black;
    background-color: white;
  }

  p {
    text-align: center;
  }

  .modal-img {
    max-height: 500px;
    max-width: 100%;
  }

  .modal-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-name {
    font-size: 30px;
  }

</style>