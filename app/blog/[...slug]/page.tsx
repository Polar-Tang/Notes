import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug.split('/').filter(Boolean), // Convert to an array
  }));
}



export default function Blog({ params }) {
  const posts = getBlogPosts()

  // const folderStructure = groupPostsByFolder(posts)
  console.log("These are the post, ", posts)
  let post = posts.find((post) =>  post.slug === "/".concat(params.slug.join('/')))

  console.log("THIS IS THE POST ", post)
  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.slug.replace('/', '')}
      </h1>
      <article className="prose">
        <CustomMDX  source={post.content} />
      </article>
    </section>
  )
}


type FolderNode = {
  name: string; // Folder or file name
  slug: string; // Relative path from the root
  children?: FolderNode[]; // Only present for folders
};

export function groupPostsByFolder(posts: { slug: string }[]): FolderNode {
  const root: FolderNode = {
    name: 'root', // Root folder
    slug: '/',
    children: [],
  };
  posts.forEach((post) => {
    const segments = post.slug.split('/').filter(Boolean); // Split the slug into parts (folders and file)
    let current = root;
    
    segments.forEach((segment, index) => {
      // Check if we're at the last segment (file) or folder
      const isFile = index === segments.length - 1;
      
      // Find or create the current node
      let child = current.children?.find((node) => node.name === segment);
      
      if (!child) {
        child = {
          name: segment,
          slug: `/${segments.slice(0, index + 1).join('/')}`, // Build the slug incrementally
          ...(isFile ? {} : { children: [] }), // Files won't have children
        };
        
        current.children?.push(child);
      }
      
      // Move deeper into the tree if it's a folder
      if (!isFile) {
        current = child;
      }
    });
  });
  

  return root;
}