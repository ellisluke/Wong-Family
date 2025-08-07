import type { Node, Edge } from '@xyflow/svelte';

export const initialNodes: Node[] = [
  // First Two Wongs
  { id: '1', position: { x: 0, y: 0 }, type: 'memberNode', data: { text: 'Wong Sing Chew', image: '/images/home-tree/Wong Sing Chew.jpg', top: false, right: false, bottom: true, left: false}},
  { id: '2', position: { x: 200, y: 0 }, type: 'memberNode', data: { text: 'Wong Hee Yee', image: '/images/home-tree/Wong Hee Yee.jpg', top: false, right: false, bottom: true, left: false}},
  // { id: '100', position: { x: 1000, y: 400 }, data: { label: 'base style 4' } }

  // First Gen Wongs
  { id: '3', position: { x: 50, y: 300 }, type: 'memberNode', data: { text: '1st Gen Wongs', image: '/images/home-tree/1stGenWongs.jpg', top: true, right: false, bottom: true, left: false}},
  { id: '4', position: { x: -600, y: 600 }, type: 'memberNode', data: { text: 'Sun Hoo Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '5', position: { x: -350, y: 600 }, type: 'memberNode', data: { text: 'Sun Moi Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '6', position: { x: -100, y: 600 }, type: 'memberNode', data: { text: 'Ah Kwo Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '7', position: { x: 250, y: 600 }, type: 'memberNode', data: { text: 'Kahn Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '8', position: { x: 550, y: 600 }, type: 'memberNode', data: { text: 'Sun Lin Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '9', position: { x: 800, y: 600 }, type: 'memberNode', data: { text: 'Sun Hop Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},

  // First Gen Wongs Spouses
  { id: '10', position: { x: -600, y: 900 }, type: 'memberNode', data: { text: 'Dai Sun Ching', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '11', position: { x: -350, y: 900 }, type: 'memberNode', data: { text: 'Tong Sing Ching', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '12', position: { x: -100, y: 900 }, type: 'memberNode', data: { text: 'Sun Lin Auyong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '13', position: { x: 250, y: 900 }, type: 'memberNode', data: { text: 'Mew Lee Tong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '14', position: { x: 550, y: 900 }, type: 'memberNode', data: { text: 'Edwin Luke', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},
  { id: '15', position: { x: 800, y: 900 }, type: 'memberNode', data: { text: 'Richard Luke', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false}},


];

export const initialEdges: Edge[] = [
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    type: "step-edge"
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: "step-edge"
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: "step-edge"
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    type: "step-edge"
  },
  {
    id: 'e3-6',
    source: '3',
    target: '6',
    type: "step-edge"
  },
  {
    id: 'e3-7',
    source: '3',
    target: '7',
    type: "step-edge"
  },
  {
    id: 'e3-8',
    source: '3',
    target: '8',
    type: "step-edge"
  },
  {
    id: 'e3-9',
    source: '3',
    target: '9',
    type: "step-edge"
  },
];
