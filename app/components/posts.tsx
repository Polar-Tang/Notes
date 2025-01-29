import Link from 'next/link';
import { getBlogPosts } from 'app/blog/utils';
import { groupPostsByFolder } from 'app/blog/[...slug]/page';
import { clsx } from 'clsx'

type Post = {
  
  slug: string;
  content: string;
};

type FolderStructure = {
  [key: string]: FolderStructure | Post;
};

function renderFolderStructure(folder: any) {
  // {console.log(folder)}
  return (
    <>
    {/* <summary className="cursor-pointer text-lg font-bold">{folder.name}</summary> */}
    {folder.children ? (
      <details key={folder.slug} className="mb-2">
      <summary className="cursor-pointer text-lg font-bold">{folder.name}</summary>
      <div className="pl-4">
        {folder.children.map((child: any) => renderFolderStructure(child))}
      </div>
    </details>
    ) : (
      <Link
        href={`/blog${folder.slug}`}
        className="text-neutral-900 dark:text-neutral-100 tracking-tight"
      >
        {folder.name}
      </Link>
    )}
    
    </>
  );
}


export function BlogPosts() {
  let allBlogs = getBlogPosts();

  // Group posts into folder structure
  const folderStructure = groupPostsByFolder(allBlogs);

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-gray-100 dark:bg-gray-900 p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Blog Posts</h2>
      <div>{renderFolderStructure(folderStructure)}</div>
    </aside>
  );
}
