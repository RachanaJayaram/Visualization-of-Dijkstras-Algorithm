# Visualization of Dijkstra's algorithm
4th Semester Design and Analysis of Algorithms Project
<br>

Dijkstra's algorithm is used to find the shortest path from a single source vertex to all other vertices in a given graph.
<br>
<br>
This is a teaching tool that is used for easy visualization of Dijkstra's algorithm implemented using the Sigma JS library for graph drawing. 
<br> 
Run 
<code> python server.py </code> to start the applicaton. /Dijkstras1 is the flask endpoint for visualization of example 1 (in.in), /Dijkstras2 is the endpoint for visualization of example 2 (in1.in).
<hr>
<h4> Input format </h4>
First line contains N - number of nodes, E - number of edges: <br>


*N E* <br>
The following E lines contain 3 integers describing each edge of the graph: <br>
*EdgeSource EdgeDestination EdgeWeight* <br>
The last line contains a source and destination for which the shortest path needs to be returned :<br>
*Src Dest* <br>

<br>
<b>Example</b> <br>
5 6 <br>
0 1 9 <br>
0 2 1 <br>
0 3 5 <br>
0 4 3 <br>
2 1 2 <br>
2 3 1 <br>
0 3 <br>

<hr>

<h2> Screenshots </h2>
The node under consideration is colored blue.

The current adjacent node is colored yellow.

If a shorter path is found between two nodes it is showed with a green curved edge. 


![2](screenshots/2.PNG)
![3](screenshots/3.PNG)
![5](screenshots/5.PNG)
![6](screenshots/6.PNG)
