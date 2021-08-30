import { Tiger } from "../models/Tiger.js";
import { Turtle } from "../models/Turtle.js";

var myrtul = new Turtle('Myrtul')
var sherKan = new Tiger('Sher Kan', false)

setInterval(()=>{
  sherKan.isHungry = true
}, 2500)


export class ZooController{


  putTurtleInTigerPit(){
    if(sherKan.isHungry){
      myrtul.legs--
      sherKan.isHungry = false
      if(myrtul.legs <= 0){
        alert('YUMMM she ded')
      }
    }
    console.log(sherKan, myrtul)
  }
}