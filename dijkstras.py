import math
def dijkstra(graph,queue):
     dist={}
     steps=[]
     previous={}
     settled=[]
     for vertice in graph.vertices:
         dist[vertice]=math.inf
     dist[graph.source]=0
     queue.insert(0,graph.source)
     while queue.length:
          #min dist node
          step={"dist":dist.copy(),"min_dist_router":queue.queue[0][1],"queue":queue.queue[:],"adjacent_nodes":None,"adj_node":None,"old_dist":None,"new_dist":None}
          steps.append(step.copy())
          min_dist_router=queue.remove()
          min_dist_router=min_dist_router[1]
          # print(min_dist_router)
          step["queue"]=queue.queue[:]
          steps.append(step.copy())

          settled.append(min_dist_router)
          edge_distance =-1
          new_edge_distance =-1
          # print(settled)
          # print(graph.adjacency_list)
          
          step["dist"]=dist.copy()
          step["min_dist_router"]=min_dist_router
          step["adjacent_nodes"] = list(graph.adjacency_list[min_dist_router].keys())
          for adjacent_node in graph.adjacency_list[min_dist_router].keys():
               steps.append(step.copy())      
               if adjacent_node not in settled:
                    # print("adj",adjacent_node)
                    step["queue"]=queue.queue.copy()
                    step["adj_node"]=adjacent_node  
                    edge_distance=graph.adjacency_list[min_dist_router][adjacent_node]
                    new_edge_distance=dist[min_dist_router]+edge_distance
                    step["old_dist"]=edge_distance
                    step["new_dist"]=new_edge_distance
                    if new_edge_distance<dist[adjacent_node]:
                         dist[adjacent_node]=new_edge_distance
                         if adjacent_node in previous:
                              previous[adjacent_node].append(min_dist_router)
                         else:
                              previous[adjacent_node]=[min_dist_router]

                         # print("here",adjacent_node,new_edge_distance,edge_distance,min_dist_router )
                         queue.insert(dist[adjacent_node],adjacent_node)
                    steps.append(step.copy())
     
     for key in previous.keys():
          previous[key].append(key) 
     for step in steps:
          new_queue=[]
          for node in step["queue"]:
               new_queue.append([node[1],node[0]])
          step["queue"]=new_queue
          for key in step["dist"].keys():
               if step["dist"][key]==math.inf:
                    step["dist"][key]='inf'
          for key in step.keys():
               if step[key]==None:
                    step[key]=''
          print(step)
     return(dist,previous,steps)
                    

     


