import { TurtlesController } from "./controllers/TurtlesController.js"
import { ZooController } from "./controllers/ZooController.js"


// ENTRY POINT
console.log('hello is it working?????')

var turtlesController = new TurtlesController()
var zooController = new ZooController()

window['app'] = {
  controllers:{
    turtlesController,
    zooController
  }
}