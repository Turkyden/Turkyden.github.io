import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  // const isHomePage = location.pathname === rootPath

  return (
    <div className="w-full text-white">
      <header className="container m-auto py-10 flex justify-between">
        <h1 className="bg-white text-gray-900 text-2xl font-semibold px-2">
          <Link to={`/`}>
            DDJ
          </Link>
        </h1>
        
        <ul className="flex">
          <li className="pl-8"><Link to={`/vlog`}>Vlog</Link></li>
          <li className="pl-8"><Link to={`/blog`}>专栏</Link></li>
          <li className="pl-8"><Link to={`/work`}>作品</Link></li>
          <li className="pl-8"><Link to={`/about`}>关于</Link></li>
          <li className="pl-8">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>
          </li>
        </ul>
        
      </header>
      <main className="container m-auto">{children}</main>
      <footer className="text-center py-10 text-gray-700">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
