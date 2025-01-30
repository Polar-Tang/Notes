import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import path from 'path'

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
		const splitMap = str.split((' ')).map((element, index) => {
			if (element.match(URLreg)) {
				return (<Link className='inline' key={index} href={`${element}`}> {element}</Link>)
			} else {
				return (<span className='inline' key={index}> {element}</span>)
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
				  <Link className="inline" key={index} href={`/blog/${element}`}>
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

const whatRegex = (child: React.ReactNode | null ) => { 
	if (typeof child === 'object' && child !== null) {
		Object.values(child).map((item) => {
			console.log("THis is the item type ", typeof item) // Output:
			//THis is the item type  object
			//THis is the item type  string

			if (typeof item != "object" && item.match(/\[\[(.*?)\]\]/g)){
				console.log("The element we pass to test the regex: ", item) // The element we pass to test the regex:   is a [[test]]
				return newNodeLinks(item, /\[\[(.*?)\]\]/g)
			}
		})
	}
	return child
}

function transformLinks(tag: string) {
	const Linking = ({ children }) => {
		if (typeof children != "object" && children.match(/\[\[(.*?)\]\]/g)) {
			return React.createElement(
				`${tag}`,
				[
					React.createElement(`${tag}`),
				],
				newNodeLinks(children, /\[\[(.*?)\]\]/g)
			)
		}
		if (typeof children != "object" && children.match(URLreg)) {
			return React.createElement(
				`${tag}`,
				[
					React.createElement(`${tag}`),
				],
				newNodeLinks(children, URLreg)
			)

		}

		return React.createElement(
			`${tag}`,
			[
				React.createElement(`${tag}`)
			],
			whatRegex(children)
		)
	}
	return Linking
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
	// span: transformLinks("span"),

}

export function CustomMDX(props) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	)
}
