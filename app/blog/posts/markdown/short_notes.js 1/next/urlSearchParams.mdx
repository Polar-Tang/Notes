`URLSearchParams` is a Web API that provides utility methods for manipulating the URL query parameters. Instead of creating a complex string literal, you can use it to get the params string like `?page=1&query=a`.

```jsx
export default function Search() { 
	const searchParams = useSearchParams();  // use Parms
	function handleSearch(term: string) { 
		const params = new URLSearchParams(searchParams); // get the params

		// set the params if these exist
		if (term) { 
			params.set('query', term); 
		} else { 
			params.delete('query'); 
		}
	} // ...
}
	```

```jsx
'use client'; 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() { 
	const searchParams = useSearchParams();  // use Parms
	const pathname = usePathname(); // get the url with no delimiters
	const { replace } = useRouter(); // update the uri at the moment

	function handleSearch(term: string) { 
		const params = new URLSearchParams(searchParams); // get the params

		// set the params if these exist
		if (term) { 
			params.set('query', term); 
		} else { 
			params.delete('query'); 
		}
		replace(`${pathname}?${params.toString()}`); // Update the page without reloading
		return (
			<div className="relative flex flex-1 flex-shrink-0">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input 
				className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				placeholder={placeholder}
				defaultValue={searchParams.get('query')?.toString()} // at last set the default value
			/>
			<MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
	</div>
);

}
```