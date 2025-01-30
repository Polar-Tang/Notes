
example:
```jsx
import { createElement } from 'react';  

function Greeting({ name }) {  
	return createElement(  
		'h1',  
		{ className: 'greeting' },  
		'Hello'  
	);  
}
```

#### Parameters}

- `type`: The name of the tag (e.g. `div`, `span`)    
- `props`: React will create an element with props matching the `props` you have passed. 
    
- **optional** `...children`: Zero or more child nodes. They can be any React nodes, including React elements, strings, numbers, [portals](https://react.dev/reference/react-dom/createPortal), empty nodes (`null`, `undefined`, `true`, and `false`), and arrays of React nodes.
    

#### [Returns](https://react.dev/reference/react/createElement#returns "Link for Returns")

`createElement` returns a React element object with a few properties:

- `type`: The `type` you have passed.
- `props`: The `props` you have passed except for `ref` and `key`.
- `ref`: The `ref` you have passed. If missing, `null`.
- `key`: The `key` you have passed, coerced to a string. If missing, `null`.

Usually, you’ll return the element from your component or make it a child of another element. Although you may read the element’s properties, it’s best to treat every element as opaque after it’s created, and only render it.