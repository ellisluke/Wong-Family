import type { Node, Edge } from '@xyflow/svelte';

const genY = [-100, 800, 1500]
const scale = [1.1, 0.8, 0.6]
const marriageX = 280;

const offset = {
  SunHoo: -2000,
  SunMoi: -1000,
  AhKwo: 0,
  Kahn: 1000,
  SunLin: 1600,
  SunHop: 2400,
}

export const initialNodes: Node[] = [
  // First Two Wongs
  { id: '1', position: { x: 0, y: genY[0] }, type: 'memberNode', data: { text: 'Wong Sing Chew', image: '/images/home-tree/Wong Sing Chew.jpg', top: false, right: false, bottom: true, left: false, scale: scale[0]}},
  { id: '2', position: { x: 400, y: genY[0] }, type: 'memberNode', data: { text: 'Wong Hee Yee', image: '/images/home-tree/Wong Hee Yee.jpg', top: false, right: false, bottom: true, left: false, scale: scale[0]}},
  // { id: '100', position: { x: 1000, y: 400 }, data: { label: 'base style 4' } }

  // First Gen Wongs
  { id: '3', position: { x: 200, y: 450 }, type: 'memberNode', data: { text: '1st Gen Wongs', image: '/images/home-tree/1stGenWongs.jpg', top: true, right: false, bottom: true, left: false, scale: scale[0]}},
  { id: '4', position: { x: offset.SunHoo, y: genY[1] }, type: 'memberNode', data: { text: 'Sun Hoo Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false, scale: scale[1]}},
  { id: '5', position: { x: offset.SunMoi, y: genY[1] }, type: 'memberNode', data: { text: 'Sun Moi Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false, scale: scale[1]}},
  { id: '6', position: { x: offset.AhKwo, y: genY[1] }, type: 'memberNode', data: { text: 'Ah Kwo Wong', image: '/images/home-tree/AhKwoWong.jpg', top: true, right: false, bottom: true, left: false, scale: scale[1]}},
  { id: '7', position: { x: offset.Kahn, y: genY[1] }, type: 'memberNode', data: { text: 'Kahn Wong', image: '/images/home-tree/KahnWong.jpg', top: true, right: true, bottom: true, left: false, scale: scale[1]}},
  { id: '8', position: { x: offset.SunLin, y: genY[1] }, type: 'memberNode', data: { text: 'Sun Lin Wong', image: '/images/home-tree/TBD.jpg', top: true, right: true, bottom: true, left: false, scale: scale[1]}},
  { id: '9', position: { x: offset.SunHop, y: genY[1] }, type: 'memberNode', data: { text: 'Sun Hop Wong', image: '/images/home-tree/SunHopWong.jpg', top: true, right: true, bottom: true, left: false, scale: scale[1]}},

  // First Gen Wongs Spouses
  { id: '10', position: { x: offset.SunHoo + marriageX, y: genY[1] }, type: 'memberNode', data: { text: 'Dai Sun Ching', image: '/images/home-tree/TBD.jpg', top: false, right: false, bottom: true, left: false, scale: scale[1]}},
  { id: '11', position: { x: offset.SunMoi + marriageX, y: genY[1] }, type: 'memberNode', data: { text: 'Tong Sing Ching', image: '/images/home-tree/TBD.jpg', top: false, right: false, bottom: true, left: false, scale: scale[1]}},
  { id: '12', position: { x: offset.AhKwo + marriageX, y: genY[1] }, type: 'memberNode', data: { text: 'Sun Lin Auyong', image: '/images/home-tree/SunLinAuyong.jpg', top: false, right: false, bottom: true, left: false, scale: scale[1]}},
  { id: '13', position: { x: offset.Kahn + marriageX, y: genY[1] }, type: 'memberNode', data: { text: 'Mew Lee Tong', image: '/images/home-tree/MewLeeTong.jpg', top: false, right: false, bottom: true, left: false, scale: scale[1]}},
  { id: '14', position: { x: offset.SunLin + marriageX, y: genY[1] }, type: 'memberNode', data: { text: 'Edwin Luke', image: '/images/home-tree/TBD.jpg', top: false, right: false, bottom: true, left: false, scale: scale[1]}},
  { id: '15', position: { x: offset.SunHop + marriageX, y: genY[1] }, type: 'memberNode', data: { text: 'Richard Luke', image: '/images/home-tree/TBD.jpg', top: false, right: false, bottom: true, left: false, scale: scale[1]}},

  // AK Wong Second Gen Wongs
  { id: '16', position: { x: offset.AhKwo + 130, y: 1250 }, type: 'memberNode', data: { text: 'A.K. Wong Children', image: '/images/home-tree/AKWongs.jpg', top: true, right: false, bottom: true, left: false, scale: scale[1]}},
  { id: '17', position: { x: offset.AhKwo - 500, y: genY[2] }, type: 'memberNode', data: { text: 'Lavinia Wong', image: '/images/home-tree/LaviniaWong.jpg', top: true, right: false, bottom: false, left: false, scale: scale[2]}},
  { id: '18', position: { x: offset.AhKwo - 200, y: genY[2] }, type: 'memberNode', data: { text: 'Alana Wong', image: '/images/home-tree/TBD.jpg', top: true, right: false, bottom: true, left: false, scale: scale[2]}},
  { id: '19', position: { x: offset.AhKwo + 100, y: genY[2] }, type: 'memberNode', data: { text: 'Fung Chun Wong', image: '/images/home-tree/TBD.jpg', top: true, right: false, bottom: false, left: false, scale: scale[2]}},
  { id: '20', position: { x: offset.AhKwo + 400, y: genY[2] }, type: 'memberNode', data: { text: 'Livingston Wong', image: '/images/home-tree/LivingstonWong.jpg', top: true, right: false, bottom: true, left: false, scale: scale[2]}},
  { id: '21', position: { x: offset.AhKwo + 700, y: genY[2] }, type: 'memberNode', data: { text: 'Alvin Wong', image: '/images/home-tree/AlvinWong.jpg', top: true, right: false, bottom: true, left: false, scale: scale[2]}},

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
  {
    id: 'e6-16',
    source: '6',
    target: '16',
    type: "step-edge"
  },
  {
    id: 'e12-16',
    source: '12',
    target: '16',
    type: "step-edge"
  },
  {
    id: 'e16-17',
    source: '16',
    target: '17',
    type: "step-edge"
  },
  {
    id: 'e16-18',
    source: '16',
    target: '18',
    type: "step-edge"
  },
  {
    id: 'e16-19',
    source: '16',
    target: '19',
    type: "step-edge"
  },
  {
    id: 'e16-20',
    source: '16',
    target: '20',
    type: "step-edge"
  },
  {
    id: 'e16-21',
    source: '16',
    target: '21',
    type: "step-edge"
  },
];
