Import mongoose to the main JavaScript
```js
import mongoDB from './config/db.config.js'

const port = 3000
const app = express()

app.listen(port, () => {
console.log(`Example app listening on local host http://localhost:${port}`)
})
```

### ORM
```SH
npm install mongoose --save
```

### connect
#### Connect to local:
```js
// db.config.js
import mongoDB from 'mongoose'
  
const MONGO_URL = 'mongodb://localhost:27017/users'

mongoDB.connect(MONGO_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then (() => {
console.log('Database connected')
})
.catch((err) => {
console.log("EL ERROR INDESCRIPTIBLE: ",err)
})

export default mongoDB
```

#### Schema
In mongoose everything it's derivated to a schema, takes an object as an argument and we should initialize it.
```js
const kittySchema = new mongoose.Schema({
  name: String
});
```

### Model
Now we defined the schema, it's time to compile it into a model
```ts
model(modelName: string, schemaObj: mongoose.Schema): Object
```
where the model name will be the name of the collection in the MONGO_URL we've defined
#### Example: 
```js
const Kitten = mongoose.model('Kitten', kittySchema);
```
Now we initialize a model to create an object taht will ocuppy a space in the collection.
```js
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name);
```
###### Define methods
Utilizing the schema we also could utilize the method `method` to define methods (LOL)
```js
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema)
```
Once create the metod, wherever we create a new instance of the model, we could access to that method
```js
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
```
Utilize it the model:
```js
import Kitten from '../models/user.models.js'

export const registerController = async (req, res) => {
	const { name, moustach, cole}

	const kitten = new Kitten({
	name: name,
	moustach: moustach,
	color: value
	})
	await kitten.save()
	}
```