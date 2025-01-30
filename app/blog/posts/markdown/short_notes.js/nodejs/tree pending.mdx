Is pending to do a tree.
```tsx
type Post = {
  slug: string;
  [key: string]: any;
};

type Tree = {
  [key: string]: Post | Tree;
};

export function groupPostsByFolder(posts: Post[]): Tree {
  const tree: Tree = {};

  console.log(posts); // ALL THE POSTS
  posts.forEach((post) => {
    const segments = post.slug.split('/').filter(Boolean);
    let current = tree;

    segments.forEach((segment, index) => {
      if (!current[segment]) {
        current[segment] = index === segments.length - 1 ? post : {};
      }
      current = current[segment] as Tree;
    });
  });

  return tree;
}
```