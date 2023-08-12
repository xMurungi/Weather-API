/** Class representing a Stack. */

class Stack {

    constructor() {
      this._storage = {};
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push() {
  
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
  
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
  
    }
  }
  
  const myStack = new Stack();
  
  console.log(myStack);




  class Serenity{

    constructor(){
        this.Space = {
            name: "Serenity",
            age: 16,
            school: "mahill"
        };
    }

    show(){
        console.log(this.Space.name)
    }

  }


  const SereClass = new Serenity();
  console.log(SereClass); 

  console.log(`This object has ${SereClass.Space.name} as a value.`);




