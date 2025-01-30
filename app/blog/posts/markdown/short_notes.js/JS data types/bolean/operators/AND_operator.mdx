The and operator it's a selection of two bolean values 

I don't understand the callback, actually i do, it's an object when you use their method to apply them in a scalable way, but the thing i don't get it's how to call them, because your code is throwing `ReferenceError: validate is not defined` error, this is all inside a try:

```
`
if (findProduct === -1){
            response
            .setStatus(404)
            .setOk(false)
            .setMessage(`The property it's invalid`)
            .build()
            return res.status(404).json(response)
        }
        
        // create a refence
        const elIndicado = productsJSON[findProduct]

        const arrerr = []

        const allowed_properties = {
            'name': {
                validate: (name) => name && typeof name === 'string' && name.trim() !== '',
                error: 'El título debe ser un valor string no vacío'
            },
            'price': {
                validate: (price) => typeof price === 'number' && price > 0,
                error: 'El precio debe ser un número válido mayor a 0'
            },
            'category': {
                validate: (category) => category && typeof category === 'string' && category.trim() !== '',
                error: 'La categoría debe ser un valor string no vacío'
            },
            'stock': {
                validate: (stock) => typeof stock === 'number' && stock >= 0,
                error: 'El stock debe ser un número no negativo'
            },
        };
        
        for(let property in req.body){

            const prop_value = req.body[property]
            
            console.log(prop_value.property)

            console.log(property)

            // console.log(allowed_properties.hasOwnProperty(prop_value))
            console.log(allowed_properties.hasOwnProperty(property))
            //
            //console.log(productsJSON.findIndex()
            //const isUndefined = (allowed_properties[property].validate(prop_value))
            if(!allowed_properties.hasOwnProperty(property)) {    
                console.log(validate)
                arrerr.push(`La propiedad '${prop_value}' no es válida`);

            } else {
                const isValid = allowed_properties[property].validate(req.body[property])
                if (!isValid) {
                    arrerr.push(allowed_properties[property].error);
                }
            }
        }
        
        if (arrerr.length > 0) {
                console.log("from arr length")
                const response = new ResponseBuilder()
                .setOk(false)
                .setStatus(400)
                .setPayload({ errors: arrerr })
                .build();
            return res.status(400).json(response);
        }
        
        for (let property in req.body) {
            elIndicado[property] = req.body[property];
        }
        

    await filesystem.promises.writeFile('./public/products.json', JSON.stringify({ ...fileJSON, productsJSON }, null, 2));



        // Write the updated data to the file
        
        response
        .setStatus(200)
        .setPayload( elIndicado )
        .setMessage('El producto ha sido modificado')
        .build()
            return res.status(200).json(response)
```

I'm doing something here, 
```js
 const allowed_properties = {

            'name': {

                validate: (name) => name && typeof name === 'string' && name.trim() !== '',

                error: 'El título debe ser un valor string no vacío'

            },

            'price': {

                validate: (price) => typeof price === 'number' && price > 0,

                error: 'El precio debe ser un número válido mayor a 0'

            },

            'category': {

                validate: (category) => category && typeof category === 'string' && category.trim() !== '',

                error: 'La categoría debe ser un valor string no vacío'

            },

            'stock': {

                validate: (stock) => typeof stock === 'number' && stock >= 0,

                error: 'El stock debe ser un número no negativo'

            },

        };

        for(let property in allowed_properties){

  

            const prop_value = req.body[property]

            console.log(prop_value.property)

  

            console.log(property)

  

            // console.log(allowed_properties.hasOwnProperty(prop_value))

            console.log(req.body.hasOwnProperty(property))

            //

            //console.log(productsJSON.findIndex()

            //const isUndefined = (allowed_properties[property].validate(prop_value))

            if(!req.body.hasOwnProperty(property)) {    

                let validate = allowed_properties[property].validate

                console.log(validate)

                arrerr.push(`La propiedad '${prop_value}' no es válida`);

  

                const response = new ResponseBuilder()

                .setOk(false)

                .setStatus(400)

                .setPayload({ errors: arrerr })

                .build();

                return res.status(400).json(response);

  

            }

        }
```

How do i caprute invalid values from the req.boy?
```json
{

    "xys": "rukaido",

    "xyz": 800,

    "qwerty": "noob",

    "asd": 4

  

}
```