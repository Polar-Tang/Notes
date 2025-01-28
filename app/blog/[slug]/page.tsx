import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  let groupedPosts = groupPostsByFolder(posts)

  console.log('Folder Structure:', groupedPosts);

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

console.log("Global scope")

export default function Blog({ params }) {
  const posts = getBlogPosts();

  const folderStructure = groupPostsByFolder(posts);

  let post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  console.log('Folder Structure:', folderStructure); 
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article dangerouslySetInnerHTML={{ __html: post.content }} className="prose">
        <CustomMDX  source={post.content} />
      </article>
    </section>
  )
}



export function groupPostsByFolder(posts) {
  const tree = {};

  posts.forEach((post) => {
    const segments = post.slug.split('/').filter(Boolean)
    let current = tree;

    segments.forEach((segment, index) => {
      if (!current[segment]) {
        current[segment] = index === segments.length - 1 ? post : {};
      }
      current = current[segment];
    });
  });

  return tree;
}
