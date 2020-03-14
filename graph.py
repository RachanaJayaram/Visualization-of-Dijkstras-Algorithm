class graph:
    def __init__(self, vertices, edges):
        self.vertices_count = vertices
        self.vertices = []
        self.edges_count = edges
        self.source = None
        self.dest = None
        self.adjacency_list = {}

    def addEdge(self, from_edge, to_edge, weight):
        if from_edge not in self.vertices:
            self.vertices.append(from_edge)

        if to_edge not in self.vertices:
            self.vertices.append(to_edge)

        if from_edge in self.adjacency_list.keys():
            self.adjacency_list[from_edge][to_edge] = weight
        else:
            self.adjacency_list[from_edge] = {}
            self.adjacency_list[from_edge][to_edge] = weight

        if to_edge not in self.adjacency_list.keys():
            self.adjacency_list[to_edge] = {}

    def set_source_dest(self, source, dest):
        self.source = source
        self.dest = dest
