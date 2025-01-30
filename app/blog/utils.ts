import fs from 'fs'
import path from 'path'

type Metadata = {
	title: string
	publishedAt: string
	summary: string
	image?: string
}

function getMDXFiles(dir) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function getMDXFolders(dir) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function getAllMDXFiles(dir: string): string[] {
	let files = fs.readdirSync(dir);
	let mdxFiles: string[] = [];

	files.forEach((file) => {
		let filePath = path.join(dir, file);
		let stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			mdxFiles = mdxFiles.concat(getAllMDXFiles(filePath));
		} else if (path.extname(file) === '.mdx') {

			mdxFiles.push(filePath);
		}
	});

	return mdxFiles;
}


function getMDXData(dir: string) {
	let mdxFiles = getAllMDXFiles(dir);
	return mdxFiles.map((filePath) => {

		const content = fs.readFileSync(filePath, 'utf8');

		let slug = filePath
		.replace(path.join(process.cwd(), 'app', 'blog', 'posts'), '')
		.replace(/\.mdx$/, '');
		let lastSegments: string[] | null = slug.match(/([^/]+)$/g)
		let lastSegment: string | undefined = lastSegments?.at(0) 


		if (!slug.startsWith('/')) slug = '/' + slug;

		return {
			lastSegment,
			slug,
			content
		};
	});
}


export function getBlogPosts() {
	return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}
