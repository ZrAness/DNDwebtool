import './Header.css'
import type { ReactNode } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

type CustomLinkProps = {
  to: string
  children: ReactNode
}

function Header() {
  return (
    <div className='NavBar'>
      <div></div>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Combat">Combat</CustomLink>
        <CustomLink to="/Classes">Classes</CustomLink>
        <CustomLink to="/Species">Species</CustomLink>
      </ul>
      <div></div>
    </div>
  )
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Header
