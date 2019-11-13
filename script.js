const Graph = require("./Graph")

let graph = new Graph()
graph.startState()

let openArr = []
let closeArr = []
let searchStatus = false

const bestFS = (from, to) => {

  printResult(openArr, closeArr)
  pos = graph.list.find(v => v.name == from)
  to = graph.list.find(v => v.name == to)
  
  openArr.push(pos)
  printResult(openArr, closeArr)

  while (!searchStatus){
    if (openArr[0].name != to.name){
      if (openArr[0].direction.length != 0){

        openArr[0].direction.forEach(item => openArr.push(item))
        setVisited(closeArr, openArr)
        openArr.sort(compareNumeric)
        printResult(openArr, closeArr)

      } else {
        setVisited(closeArr, openArr)
        printResult(openArr, closeArr)
      }
    } else {
      setVisited(closeArr, openArr)
      printResult(openArr, closeArr)
      searchStatus = true
    }
  }
  printResult(openArr, closeArr)
}

setVisited = (visited, unvisited) => {
  visited.push(unvisited[0])
  unvisited.splice(0, 1)
}

const compareNumeric = (a, b) => {
  if (a.cost > b.cost) return 1
  if (a.cost == b.cost) return 0
  if (a.cost < b.cost) return -1
}

getResult = (arr) => {
  let res = ""
  arr.forEach(item => {
    res += item.name + " "
  })
  return res
}

printResult = (openArr, closeArr) => {
  console.log(`Unvisited : ${getResult(openArr)}`)
  console.log(`Visited : ${getResult(closeArr)}`)
  console.log("")
}

bestFS("S", "I")