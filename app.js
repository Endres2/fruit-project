//NOTE collections will need to be on singular and mongoose will make them plural this is noted by (s)

//Require Mongoose
const mongoose = require("mongoose")
//Conect to mongo DB and creates a new database fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB").then(() => console.log('Connected!'));

//Creates the schema for fruits
const fruitSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    rating: {
        type: Number,
        min:1,
        max:10
        },
    review: String
})

//Creates Fruits collection using fruitSchema
const Fruit = mongoose.model("Fruit", fruitSchema);

//Creates a new fruit using fruitsSchema and adds it to Fruit(s) collection
const fruit = new Fruit({
    name:"Apple",
    rating: 10,
    review: "Pretty solid as a fruit."
})
//Saves the fruit record we created (commented out since it will save everyu time we run the file)
//fruit.save();

//Same process as above to create people collection
const personSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const Person = mongoose.model("Person",personSchema )

const person = new Person({
    name:"John",
    age: 37
})

//person.save()

const kiwi = new Fruit({
    name:"Kiwi",
    rating: 2,
    review: "Isn't this a bird??"
})
const banana = new Fruit({
    name:"Banana",
    rating: 6,
    review: "A nice sweet snack"
})
const orange = new Fruit({
    name:"Orange",
    rating: 8,
    review: "Sweet and sour"
})

//Inser all the fruits created above using a model function 
//Fruit.insertMany([kiwi,banana,orange]);

const retrieve = async () => {
    const repo = await Fruit.find({})
    repo.forEach((e)=>{
        console.log(e.name) 
    })
    console.log(repo) 
    mongoose.connection.close().then(console.log("closed connection"))

    
  };
  //retrieve()



const updatePerson= async() =>{
    await Person.updateOne({name:"John"},{age:23})
    console.log("Updated record")
    mongoose.connection.close().then(console.log("closed connection"))

}

//updatePerson()

//Deletes a single fruit filtering on name field
const deleteFruit = async(fruitName)=>{
    try{
        await Fruit.deleteOne({ name: fruitName });
        console.log("Deleted a "+fruitName)
    }catch(err){
        console.log(err)
    }

    mongoose.connection.close().then(console.log("closed connection"));

}

//Deletes a single fruit filtering on name field
const deleteManyFruit = async(fruitName)=>{
    try{
        await Fruit.deleteMany({ name: fruitName });
        console.log("Deleted a "+fruitName)
    }catch(err){
        console.log(err)
    }

    mongoose.connection.close().then(console.log("closed connection"));

}

//deleteFruit("hola")
