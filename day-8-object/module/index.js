import {
  hello, 
  name as myName
} from "./greeting.js"
import Orang from "./Person.js"

let person1 = new Orang("Alpha", "Jl 123")

hello(myName)
console.log(myName);
console.log(person1);
