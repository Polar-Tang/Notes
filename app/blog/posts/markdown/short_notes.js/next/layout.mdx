A layout is like a layer at the background. Another pages will be rendered above the nearest layout, for example, here, the layout of dashboard it's shared between the another routes:
![[Pasted image 20250126233538.png]]The main layout is in the root from `app` directory. And it is used to define the `<html>` and `<body>` tags and other globally shared UI.
A **root layout** is the top-most layout in the root `app` directory
The syntaxis is as following:
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```
It recives a desestructured children as an argument, here's the function signature:
```tsx
func RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{ team: string }> }): React.ReactNode
```
##### Children
`children` is a prop that will be populated with the components in the `page.tsx` file

##### Children
`params` A promise to resolve the route more [dynamic route](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes), for example if we got
```
app/
  dashboard/
    [team]/
      layout.tsx
      page.tsx
```
Example:
```tsx
export default async function Layout({ children, params }: { 
  children: React.ReactNode; 
  params: Promise<{ team: string }>; 
}) {
  const resolvedParams = await params; // Resolve the promise
  const team = resolvedParams.team;

  return (
    <div>
      <h1>Team: {team}</h1>
      {children}
    </div>
  );
}
```