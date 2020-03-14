import math


def dijkstra(graph, queue):
    dist = {}
    steps = []
    previous = {}
    settled = []
    for vertice in graph.vertices:
        dist[vertice] = math.inf
    dist[graph.source] = 0
    queue.insert(0, graph.source)
    print(queue.sort())
    while queue.length:
        step = {"dist": dist.copy(), "min_dist_router": queue.sort()[0][1], "queue": queue.sort()[
            :], "adjacent_nodes": None, "adj_node": None, "old_dist": None, "dist_with": None, "new_dist": None, "settled": settled.copy()}
        steps.append(step.copy())

        min_dist_router = queue.remove()
        min_dist_router = min_dist_router[1]

        step["queue"] = queue.sort()[:]
        step["settled"] = settled[:]
        steps.append(step.copy())

        settled.append(min_dist_router)

        edge_distance = -1
        new_edge_distance = -1

        step["dist"] = dist.copy()
        step["min_dist_router"] = min_dist_router
        step["adjacent_nodes"] = list(
            graph.adjacency_list[min_dist_router].keys())

        for adjacent_node in graph.adjacency_list[min_dist_router].keys():
            steps.append(step.copy())
            if adjacent_node not in settled:

                step["queue"] = queue.sort().copy()
                step["adj_node"] = adjacent_node

                edge_distance = graph.adjacency_list[min_dist_router][adjacent_node]
                new_edge_distance = dist[min_dist_router]+edge_distance

                step["old_dist"] = dist[adjacent_node]
                step["dist_with"] = new_edge_distance

                if new_edge_distance < dist[adjacent_node]:
                    dist[adjacent_node] = new_edge_distance

                    if adjacent_node in previous:
                        previous[adjacent_node].append(min_dist_router)
                    else:
                        previous[adjacent_node] = [min_dist_router]

                    if adjacent_node not in [node[1] for node in queue.sort()]:
                        queue.insert(dist[adjacent_node], adjacent_node)

                step["new_dist"] = dist[adjacent_node]
                step["dist"] = dist.copy()
                steps.append(step.copy())

    step = {"dist": dist.copy(), "min_dist_router": None, "queue": queue.sort()[
        :], "adjacent_nodes": None, "adj_node": None, "old_dist": None, "dist_with": None, "new_dist": None, "settled": settled.copy()}

    steps.append(step.copy())

    for key in previous.keys():
        previous[key].append(key)
    for step in steps:
        new_queue = []
        for node in step["queue"]:
            new_queue.append([node[1], node[0]])
        step["queue"] = new_queue
        for key in step["dist"].keys():
            if step["dist"][key] == math.inf:
                step["dist"][key] = 'inf'
        for key in step.keys():
            if step[key] == None:
                step[key] = ''
        print(step)
    return(dist, previous, steps)
