// ----- 1st cmd ----- 
// (1)npm init -y 
// (2)npm i mongodb
 
// ----- 2nd cmd ----- 
// (1)mongod
const mongoose = require("mongoose")
 
mongoose.connect("mongodb://localhost:27017/fruitsDB").then(() => console.log('Connected!'));

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
})

//fruit.save();

const personSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const Person = mongoose.model("Person",personSchema )

const person = new Person({
    name:"John",
    age: 37
})

person.save()