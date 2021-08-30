import { Turtle } from "../models/Turtle.js"
// FIXME IMPORTANT                      ^^ do not forget .js                                     

var leo = new Turtle('Leo')
console.log('here he is', leo)

export class TurtlesController{

  takeDamage(){
    leo.legs--
    if(leo.legs <= 0){
      alert('he ded')
    }
  }
}