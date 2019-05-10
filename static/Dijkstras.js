console.log(result);
console.log(input_graph);

var i,
    s,
    N = input_graph[0][1],
    E = input_graph[0][0],
    g = {
      nodes: [],
      edges: []
    };
// Generate a random graph:
for (i = 0; i < N; i++)
  g.nodes.push({
    id: 'n' + i,
    label: ''+i,
    size: "15",
    x: Math.random(),
    y: Math.random(),
    color: '#444'
  });
for (i = 1; i < input_graph.length; i++)
{
  console.log('n'+input_graph[i][0])
  g.edges.push({
    id: 'e' + i,
    source: 'n'+input_graph[i][0],
    target: 'n'+input_graph[i][1],
    size: "4",
    length:"1",
    label: ''+input_graph[i][2],
    type:"arrow",
    color: "rgb(118, 182, 255)"
  });
}  
// sigma.renderers.def = sigma.renderers.canvas
// Instantiate sigma:


s = new sigma({
  graph: g,
  renderer: {
    container: document.getElementById('graph-container'),
    type: sigma.renderers.canvas,
},
  settings:
  {
    maxEdgeSize: 4,
    maxNodeSize: 10,
    minEdgeSize: 4,
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