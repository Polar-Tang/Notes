import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import path from 'path'
import { Children } from 'react';
import fs from "fs"
// import randImage from '../images/Pasted image 20241106195251.png'

function Table({ data }) {
	let headers = data.headers.map((header, index) => (
		<th key={index}>{header}</th>
	))
	let rows = data.rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	))

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

function CustomLink(props) {
	let href = props.href

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith('#')) {
		return <a {...props} />
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
	return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
	let codeHTML = highlight(children)
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str) {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
	const Heading = ({ children }) => {
		let slug = slugify(children)
		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: 'anchor',
				}),
			],
			children
		)
	}

	Heading.displayName = `Heading${level}`

	return Heading
}
let URLreg: RegExp = /https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/g;


const newNodeLinks = (str: string, regex: RegExp) => {
	// If it's URL
	if (regex.toString() === URLreg.toString()) {
		const splitMap = str.split((/\n| /g)).map((element, index) => {
			if (element.match(URLreg)) {
				return (<Link className='inline' key={index} href={`${element}`}> {element}</Link>)
			} else {
				return (<span className='inline' key={index} > {element} </span>)
			}
		})
		return splitMap
	}

	if (regex.toString() === /\!\[\[(.*?)\]\]/g.toString()) {
	// console.log("This are the.......................... ... images path", fs.readdirSync('../images/Pasted image 20241106195251.png'))
	
	const splitMap = str.split((regex)).map((element, index) => {

		if (index % 2 === 1) {
			console.log("Element splitted: ", element) // Element splitted:  test
			return (
				<Image alt={`image ${index}`} width={50} height={50} className="inline" src='/images/Pasted image 20241106195251.png' rel="noopener noreferrer" key={index}/>
			);
		} else {
			return <span className="inline" key={index}>{element}</span>;
		}
	})
	return splitMap
	
	}
	

	// If it's internal link
	if (regex.toString() === /\[\[(.*?)\]\]/g.toString()) {
		const splitMap = str.split((regex)).map((element, index) => {

			if (index % 2 === 1) {
				let lastSegments = element.match(/([^/]+)$/g);
				console.log("Element splitted: ", element) // Element splitted:  test
				return (
					<Link className="inline" target="_blank" rel="noopener noreferrer" key={index} href={`/blog/${element}`}>
						{lastSegments ? lastSegments[0] : element}
					</Link>
				);
			} else {
				return <span className="inline" key={index}>{element}</span>;
			}
		})
		return splitMap
	}


}

const whatRegex = (child: string) => {

	const new_child = child.split(' ').map((word) => {
		if (word.includes("\n")){
		return <>
		{word}
		<br/>
		</>
		}
		if (word.match(/\[\[(.*?)\]\]/g|URLreg)) {
			return newNodeLinks(word, /\[\[(.*?)\]\]/g)
		}
		if (word.match(URLreg)) {
			return newNodeLinks(word, URLreg)
		}

	})
	return new_child
}

function transformLinks(tag: string) {
	const Linking = ({ children }) => {
		// if (typeof children === 'object' ) {
		return TransformHTMLTag(children, tag)
		// }
		
		// if (typeof children === 'string' && children.match(URLreg)) {
			// 	console.log(children)
			// 	return [
				// 		React.createElement(
					// 		`${tag}`,
					// 		[],
					// 		newNodeLinks(children, URLreg)
					// 	)]
					// }
					
					// return React.createElement(
						// 	`${tag}`,
						// 	[
							// 		React.createElement(`${tag}`)
							// 	],
							// 	whatRegex(children)
							// )
						}
						return Linking
					}
					
					const TransformHTMLTag = (children: React.ReactNode | null, tag: string) => {
						
						return Children.map(children, (item) => {
							if (children=== null){
								return
							}
							// if (typeof children === 'object' && children !== null) {
								// 	return Object.fromEntries(
									// 		Object.entries(children).map(([key, value]) => ({
										// 			key,
										// 			transformedValue: TransformHTMLTag(value, tag)
										// 		}))
										// 	);	
										// } 
										if (typeof item === 'string' && item.match(/\!\[\[(.*?)\]\]/g)) {
											
											return [
												React.createElement(
													`${tag}`,
													[],
													newNodeLinks(item, /\!\[\[(.*?)\]\]/g)
												)
											];
										}
										if (typeof item === 'string' && item.match(/\[\[(.*?)\]\]/g)) {
											return [
												React.createElement(
													`${tag}`,
													[],
													newNodeLinks(item, /\[\[(.*?)\]\]/g)
												)
												
			];
		}
		if (typeof item === 'string' && item.match(URLreg)) {
			return [
				React.createElement(
					`${tag}`,
					[],
					newNodeLinks(item, URLreg)
				)]
		}

		// if (typeof item === "object"){
		// 	TransformHTMLTag(item, "em")
		// }

		return item;
	});
}

let components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Image: RoundedImage,
	a: CustomLink,
	code: Code,
	Table,
	li: transformLinks("li"),
	p: transformLinks("p"),
	em: transformLinks("em"),
	strong: transformLinks("strong"),
	span: transformLinks("span"),

}

export function CustomMDX(props) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	)
}
