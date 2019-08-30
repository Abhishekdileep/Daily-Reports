const EventEmitter = require('events'); //Basically importing the events file from the node files itself
const eventEmitter = new EventEmitter();//Creating a new Object that is of a Event Emitter type
/* Here we are Trying to write a code for an Event that occurs ie
 'Tutorial' and the display it using a console message*/


 eventEmitter.on('tutorial',(num1,num2)=>{
    console.log('Tutorials Event has occured');
    console.log(num1 + num2 );
});
eventEmitter.emit('tutorial',1,2); 

/* This is used here to call the event 
, and in this case we also pass the parameters with it as well */


class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}


/*The Above was a Defination for the Person Class and it was Extended by EventEmitter and has rthe name 
as a Privat member to Access*/


let abhi = new Person('Abhishek');  //Creation of the Object abhi of class Person
let kaushik = new Person('Kaushik');

/* Here i am define what will happen on emit function when Called  for Name Event*/
abhi.on('name',()=>{
    console.log("The Name that this called is "+abhi.name);
});
kaushik.on('name',()=>{
    console.log("The Name that this called is "+kaushik.name);
});

//The Event Name is Emitted

abhi.emit('name');
kaushik.emit('name');