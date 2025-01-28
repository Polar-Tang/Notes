import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import { groupPostsByFolder } from 'app/blog/[slug]/page';

type Post = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
  };
  slug: string;
  content: string;
};

type FolderStructure = {
  [key: string]: FolderStructure | Post;
};
// Recursive function to render the folder structure
function renderFolderStructure(folder: any) {
  return Object.entries(folder).map(([key, value]: [string, FolderStructure | Post]) => {
    // Check if the current value is a "post" (it has metadata) or a nested folder
    if (value.metadata) {
      // Render a single post
      return (
        <Link
          key={value.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog${value.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            {/* <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(value.metadata.publishedAt, false)}
            </p> */}
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {value.metadata.title}
            </p>
          </div>
        </Link>
      );
    } else {
      // Render a folder with nested content
      return (
        <div key={key} className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-neutral-700 dark:text-neutral-300">
            {key} {/* Folder name */}
          </h2>
          <div className="pl-4">{renderFolderStructure(value)}</div>
        </div>
      );
    }
  });
}

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  // Group posts into folder structure
  const folderStructure = groupPostsByFolder(allBlogs);

  return (
    <div>
      {renderFolderStructure(folderStructure)}
    </div>
  );
}
