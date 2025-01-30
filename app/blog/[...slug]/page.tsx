import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug.split('/').filter(Boolean), 
  }));
}



export default function Blog({ params }) {
  const posts = getBlogPosts()

  
  // console.log("These are the post, ", posts)
  let post = posts.find((post) =>  {
    
    
    return decodeURI(post.slug) === decodeURI("/".concat(params.slug.join('/')))
  })

  // console.log("THIS IS THE POST ", post)
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
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.lastSegment}
      </h1>
      <article className="prose">
        <CustomMDX  source={post.content} />
      </article>
    </section>
  )
}


type FolderNode = {
  name: string; 
  slug: string; 
  children?: FolderNode[]; 
};

export function groupPostsByFolder(posts: { slug: string }[]): FolderNode {
  const root: FolderNode = {
    name: 'root', 
    slug: '/',
    children: [],
  };
  posts.forEach((post) => {
    const segments = post.slug.split('/').filter(Boolean); 
    let current = root;
    
    segments.forEach((segment, index) => {
      
      const isFile = index === segments.length - 1;
      
      let child = current.children?.find((node) => node.name === segment);
      
      if (!child) {
        child = {
          name: segment,
          slug: `/${segments.slice(0, index + 1).join('/')}`, 
          ...(isFile ? {} : { children: [] }), 
        };
        
        current.children?.push(child);
      }   
      
      if (!isFile) {
        current = child;
      }
    });
  });
  console.log("THis is the tree", root)  

  return root;
}