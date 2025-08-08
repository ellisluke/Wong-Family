<script lang="ts">
  import { Position, useSvelteFlow, type NodeProps, Handle } from '@xyflow/svelte';
 
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
    <img src={data.image} alt={data.text} draggable="false" style="max-width: {300 * data.scale}px; max-height {200 * data.scale}px;">
  <p>{data.text}</p>
</div>

<style>
  .member-node {
    border: 2px solid black;
    background-color: white;
  }

  .member-node p {
    text-align: center;
  }
</style>