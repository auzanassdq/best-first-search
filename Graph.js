const Vertex = require("./Vertex");

class Graph {
  constructor() {
    this.list = [];
  }

  addEdge(from, to, cost) {
    from = this.list.find(v => v.name == from);
    to = this.list.find(v => v.name == to);

    from.direction.push(to);
    to.cost = cost;
  }

  startState() {
    let arr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "S"
    ];
    for (let i = 0; i < arr.length; i++) {
      let v = new Vertex(arr[i]);
      this.list.push(v);
    }

    this.addEdge("S", "A", 3);
    this.addEdge("S", "B", 6);
    this.addEdge("S", "C", 5);
    this.addEdge("A", "D", 9);
    this.addEdge("A", "E", 8);
    this.addEdge("B", "F", 12);
    this.addEdge("B", "G", 14);
    this.addEdge("C", "H", 7);
    this.addEdge("H", "I", 5);
    this.addEdge("H", "J", 6);
    this.addEdge("I", "K", 1);
    this.addEdge("I", "L", 10);
    this.addEdge("I", "M", 2);
  }
}

module.exports = Graph;
