console.log(result);
console.log(input);

var i,
    s,
    N = input[0][1],
    E = input[0][0],
    g = {
      nodes: [],
      edges: []
    };
// Generate a random graph:
for (i = 0; i < N; i++)
  g.nodes.push({
    id: 'n' + i,
    label: 'Node ' + i,
    x: Math.random(),
    y: Math.random(),
    size: "10",
    color: '#666'
  });
for (i = 0; i < E; i++)
  g.edges.push({
    id: 'e' + i,
    source: 'n' + (Math.random() * N | 0),
    target: 'n' + (Math.random() * N | 0),
    size: "3",
    length:"1",
    type:"arrow",
    color: '#ccc'
  });
// sigma.renderers.def = sigma.renderers.canvas
// Instantiate sigma:


s = new sigma({
  graph: g,
  container: 'graph-container',
  settings:
  {
    maxEdgeSize: 3,
    maxNodeSize: 10,
    minEdgeSize: 3,
    minNodeSize: 10,
  }
});
// Initialize the dragNodes plugin:
var dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);
dragListener.bind('startdrag', function(event) {
  console.log(event);
});
dragListener.bind('drag', function(event) {
  console.log(event);
});
dragListener.bind('drop', function(event) {
  console.log(event);
});
dragListener.bind('dragend', function(event) {
  console.log(event);
});