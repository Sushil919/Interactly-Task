import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: '3', position: { x: 0, y: 200 }, data: { label: '3' } },
  { id: '4', position: { x: 0, y: 300 }, data: { label: '4' } },
];
const initialEdges = [];

export default function Home() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);;

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const onConnect = useCallback(
    // (params) => setEdges((eds) => addEdge(params, eds)),
    // [setEdges],/
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
  const CreateNode = () => {
    const newNode = { id: `${nodes.length + 1}`, position: { x: Math.random() * 250, y: Math.random() * 250 }, data: { label: `${nodes.length + 1}` } }
    setNodes((prev) => prev.concat(newNode))
    // setElements((els) => els.concat(newNode));
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <button onClick={() => CreateNode()}>Create Node</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}



