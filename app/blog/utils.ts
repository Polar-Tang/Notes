import fs from 'fs'
import path from 'path'

type Metadata = {
	title: string
	publishedAt: string
	summary: string
	image?: string
}

// FORMAT THAT METADATA
function parseFrontmatter(fileContent: string) {
	let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
	let match = frontmatterRegex.exec(fileContent)
	let frontMatterBlock = match![1]
	let content = fileContent.replace(frontmatterRegex, '').trim()
	let frontMatterLines = frontMatterBlock.trim().split('\n')
	let metadata: Partial<Metadata> = {}

	frontMatterLines.forEach((line) => {
		let [key, ...valueArr] = line.split(': ')
		let value = valueArr.join(': ').trim()
		value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
		metadata[key.trim() as keyof Metadata] = value
	})

	return { metadata: metadata as Metadata, content }
}

// GET ALL MDX
function getMDXFiles(dir) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function getMDXFolders(dir) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

// GET THE CONTENT OF THE FILE
function readMDXFile(filePath: string) {
	console.log("Let's read this ", filePath)
	let rawContent = fs.readFileSync(filePath, 'utf-8')
	return parseFrontmatter(rawContent)
	// ---
	// title: "Sample Title"
	// publishedAt: "2023-10-01"
	// summary: "This is a summary."
	// image: "image.png"
	// ---
	// This is the main content of the file.
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
		console.log("Adding file:", filePath);
		mdxFiles.push(filePath);
	  }
	});
  
	return mdxFiles;
  }
  

  function getMDXData(dir: string) {
	let mdxFiles = getAllMDXFiles(dir); // Use the recursive function
	return mdxFiles.map((filePath) => {
	  let { metadata, content } = readMDXFile(filePath);
  
	  // Generate slug by removing the base directory and the file extension
	  let slug = filePath
		.replace(path.join(process.cwd(), 'app', 'blog', 'posts'), '') // Remove base dir
		.replace(/\.mdx$/, ''); // Remove extension
  
	  // Ensure slugs start with a '/'
	  if (!slug.startsWith('/')) slug = '/' + slug;
  
	  return {
		metadata,
		slug,
		content,
	  };
	});
  }
  

// utilize get md data and pass the directory path
export function getBlogPosts() {
	return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function formatDate(date: string, includeRelative = false) {
	let currentDate = new Date()
	if (!date.includes('T')) {
		date = `${date}T00:00:00`
	}
	let targetDate = new Date(date)

	let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
	let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
	let daysAgo = currentDate.getDate() - targetDate.getDate()

	let formattedDate = ''

	if (yearsAgo > 0) {
		formattedDate = `${yearsAgo}y ago`
	} else if (monthsAgo > 0) {
		formattedDate = `${monthsAgo}mo ago`
	} else if (daysAgo > 0) {
		formattedDate = `${daysAgo}d ago`
	} else {
		formattedDate = 'Today'
	}

	let fullDate = targetDate.toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})

	if (!includeRelative) {
		return fullDate
	}

	return `${fullDate} (${formattedDate})`
}
