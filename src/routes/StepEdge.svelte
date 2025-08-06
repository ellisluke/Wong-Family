<script lang="ts">
  import { BaseEdge, getSmoothStepPath, getStraightPath, type EdgeProps } from '@xyflow/svelte';
 
  let { id, sourceX, sourceY, targetX, targetY }: EdgeProps = $props();

  function step(x1 : number, y1 : number, x2 : number, y2 : number) {
    const path = `M ${x1} ${y1} L ${x1} ${(y2-y1)/2} L ${x2} ${(y2-y1)/2} L ${x2} ${y2}`;
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    return [path, midX, midY];
  }
  step(sourceX, sourceY, targetX, targetY)
  let [edgePath, midX, midY] = $derived(
    getSmoothStepPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
    })
  );
</script>
 
<BaseEdge {id} path={edgePath} />