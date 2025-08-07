<script lang="ts">
    import { 
        SvelteFlow, 
        Background, 
        Controls,
        type EdgeTypes,
        type Node, 
        type Edge } from '@xyflow/svelte';

    import MemberNode from './MemberNode.svelte';
    
    import StepEdge from './StepEdge.svelte';

    import '@xyflow/svelte/dist/base.css';

    import { initialNodes, initialEdges } from './nodes-and-edges';

    let nodes = $state.raw<Node[]>(initialNodes);
    let edges = $state.raw<Edge[]>(initialEdges);

    const nodeTypes = { memberNode: MemberNode };

    const edgeTypes: EdgeTypes = {
        'step-edge': StepEdge
    }
</script>

<div style:width="95vw" style:height="90vh" class="tree-container">
    <SvelteFlow 
        {nodeTypes}
        {edgeTypes}
        bind:nodes 
        bind:edges 
        fitView>
        <Background />
        <Controls />
    </SvelteFlow>
</div>

<style>
    .tree-container {
        margin-left: 2.5%;
    }
</style>
