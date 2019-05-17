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
    label: 'Node: '+i + ' Dist: ',
    size: "15",
    x: Math.random(),
    y: Math.random(),
    color: '#444'
  });
for (i = 1; i < input_graph.length; i++)
{
  console.log('n'+input_graph[i][0])
  g.edges.push({
    id: 'e' + input_graph[i][0]+input_graph[i][1],
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
    defaultEdgeLabelSize:13,
    edgeLabelSize:"fixed",
    defaultLabelSize:13,
    labelSize:"fixed",
    maxEdgeSize: 4,
    maxNodeSize: 12,
    minEdgeSize: 2,
    minNodeSize: 12,
  }
});
// Initialize the dragNodes plugin:
var dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);
dragListener.bind('startdrag', function(event) {
  // console.log(event);
});
dragListener.bind('drag', function(event) {
  // console.log(event);
});
dragListener.bind('drop', function(event) {
  // console.log(event);
});
dragListener.bind('dragend', function(event) {
  // console.log(event);
});
function func()
{
  step=result[0][step_no]
  step_no+=1
  console.log(step,step_no);
  queue=document.getElementById("draw_queue");
  queue.innerHTML='';
  for(edge in s.graph.edges())
  {
    if(s.graph.edges()[edge]["id"][1]!='n')
      s.graph.edges()[edge]["color"]="rgb(118, 182, 255)";
    s.refresh();
  }
  for(node in s.graph.nodes())
  {
      
      s.graph.nodes()[node]["color"]='#444';
      if(node=='0')
        s.graph.nodes()[node]["color"]='rgb(2, 109, 248)';

      s.refresh();

  }  
  for(node in s.graph.nodes())
  {
      
      s.graph.nodes()[node]["label"]="Node: "+node+" Dist: "+step["dist"][node];
  }
  for(edges in s.graph.edges)
  {
      s.graph.edges()[edge]["color"]="rgb(118, 182, 255)";
      s.refresh();
  }
  if(step["new_dist"]!=step["old_dist"]  )
  {
    flag=0;
    for(edge in s.graph.edges())
    {
      if (s.graph.edges()[edge]["id"]=='e0'+step["adj_node"])
      {
        if (s.graph.edges()[edge]["label"]==step["new_dist"])
          flag=1;
      }
      if(s.graph.edges()[edge]["id"]=='en0'+step["adj_node"]){
        s.graph.edges()[edge]["label"]=''+step["new_dist"];
        flag=1;
        s.refresh();
      }
    }
 

    if(flag==0){
    s.graph.addEdge
    ({
      id: 'en' + step["min_dist_router"]+step["adj_node"],
      source: 'n0',
      target: 'n'+step["adj_node"],
      size: "2",
      length:"1",
      label: ''+step["new_dist"],
      type:"curvedArrow",
      color: "rgba(48, 250, 75, 0.596)"
    });
    s.refresh();
  }
}

if(step["adj_node"]!="")
{
  for(node in s.graph.nodes())
  {
      
      s.graph.nodes()[node]["color"]='#444';
      if(node=='0')
        s.graph.nodes()[node]["color"]='rgb(2, 109, 248)';

  }  
  s.graph.nodes()[step["adj_node"]]["color"]="rgb(253, 230, 16)";
  s.graph.nodes()[step["min_dist_router"]]["color"]="rgb(100, 202, 45)";
  s.refresh();  
  edge_name_1='e0'+step["min_dist_router"];
  edge_name_2='e'+step["min_dist_router"]+step["adj_node"];
  for(edge in s.graph.edges())
  {
    if(s.graph.edges()[edge]["id"]==edge_name_1)
      s.graph.edges()[edge]["color"]="rgb(253, 230, 16)";
    else if(s.graph.edges()[edge]["id"]==edge_name_2)
      s.graph.edges()[edge]["color"]="rgb(253, 230, 16)";
    else if(s.graph.edges()[edge]["id"][1]!='n')
      s.graph.edges()[edge]["color"]="rgb(118, 182, 255)";
    s.refresh();
  }
  s.refresh();

}
for(x in step["settled"])
{
  s.graph.nodes()[step["settled"][x]]["color"]="rgb(40, 6, 78)";
  if(x=='0')
        s.graph.nodes()[x]["color"]='rgb(2, 109, 248)';
  s.refresh();
}

// for(x in step["adjacent_nodes"])
// {
//   s.graph.nodes()[step["adjacent_nodes"][x]]["color"]="rgb(216, 133, 25)";
//   s.refresh();
// }
  s.refresh();

  if( step["queue"].length>0)
  {
    for (q in step["queue"])
    {   
        queue_element=document.createElement("button");
        queue_element.class="ele";
        queue_element.innerText=step["queue"][q][0];
        queue.appendChild(queue_element);
    }
  }
  settled=document.getElementById("draw_settled");
  settled.innerHTML='';
  
  if( step["settled"].length>0)
  {
    for (q in step["settled"])
    {   
      settled_element=document.createElement("button");
      settled_element.class="ele";
      settled_element.innerText=step["settled"][q][0];
      settled.appendChild(settled_element);
    }
  }
    dist=document.getElementById("draw_dist_0");
    dist.innerHTML='';
    
    for (dis in step["dist"])
    {
        dist_element=document.createElement("div");
        dist_element.innerHTML=dis[0];
        dist_element.innerHTML+="&emsp;:&emsp;"+step["dist"][dis[0]]+"<br>";
        dist.appendChild(dist_element);
    }
    node=document.getElementById("draw_node");
    node.innerHTML='';
    
    node_name=document.createElement("button");
    node_name.class="ele";
    node_name.innerText=step["min_dist_router"];
    node.appendChild(node_name);

    node=document.getElementById("draw_current_node");
    node.innerHTML='';
    if(step["adj_node"]!='')
    {
    node_name=document.createElement("div");
    node_name.innerHTML="<h4>Current Adjacent Node</h4><button class='ele'>"+ step["adj_node"];
    node_name.innerHTML+="</button><br><br>Old Distance : "+step["old_dist"];
    node_name.innerHTML+="<br>Distance including Node <b><big>"+step["min_dist_router"]+"</big></b> : "+step["dist_with"];
    node_name.innerHTML+="<br>New Distance : "+step["new_dist"];

    node.appendChild(node_name);
    }
  
}
