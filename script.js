const Graph = require("./Graph")

let graph = new Graph()
graph.startState()

const compareNumeric = (a, b) => {
  if (a.cost > b.cost) return 1
  if (a.cost == b.cost) return 0
  if (a.cost < b.cost) return -1
}

const bestFS = (from, to) => {
  let openArr = []
  let closeArr = []
  let searchStatus = false
  pos = graph.list.find(v => v.name == from)
  to = graph.list.find(v => v.name == to)
  
  openArr.push(pos)

  while (!searchStatus){
    if (openArr[0].name != to.name){
      if (openArr[0].direction.length != 0){
        
        openArr[0].direction.map(item => openArr.push(item))
        closeArr.push(openArr[0])
        openArr.splice(0, 1)
        openArr.sort(compareNumeric)

      } else {
        closeArr.push(openArr[0])
        openArr.splice(0, 1)
      }
    } else {
      closeArr.push(openArr[0])
      openArr.splice(0, 1)
      searchStatus = true
    }
  }
  
  let open = ""
  openArr.forEach(item => {
    open += item.name + " "
  })
  console.log(open)

  let close = ""
  closeArr.forEach(item => {
    close += item.name + " "
  })
  console.log(close)

}

bestFS("S", "I")