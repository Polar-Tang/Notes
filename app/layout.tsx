import { BlogPosts } from './components/posts'
import './global.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html
      lang="en"
      
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {/* <Navbar /> */}
          <BlogPosts />
          
          {children}
          {/* <Footer /> */}
          {/* <SpeedInsights /> */}
        </main>
      </body>
    </html>
  )
}
