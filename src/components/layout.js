import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Switch from "./switch"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`

  // const isHomePage = location.pathname === rootPath

  const [isDark, setIsDark] = useState(document.body.dataset.theme === 'dark');

  const onChangeTheme = () => {
    const mode = !isDark;
    setIsDark(mode);
    document.body.dataset.theme = mode ? "dark" : "light";
  }

  return (
    <div className="bg-primary text-on-primary">
      <header className="container m-auto py-10 flex justify-between">
        <h1 className="bg-on-primary text-primary text-2xl font-semibold px-2">
          <Link to={`/`}>
            DDJ
          </Link>
        </h1>
        
        <ul className="flex items-center">
          <li className="pl-8"><Link to={`/vlog`}>Vlog</Link></li>
          <li className="pl-8"><Link to={`https://github.com/Turkyden/p6p7`} target="_blank">p6p7</Link></li>
          <li className="pl-8"><Link to={`/blog`}>专栏</Link></li>
          <li className="pl-8"><Link to={`/work`}>作品</Link></li>
          <li className="pl-8"><Link to={`/about`}>关于</Link></li>
          <li className="pl-8 flex items-center">
            <Switch checked={isDark} onChange={onChangeTheme} />
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
