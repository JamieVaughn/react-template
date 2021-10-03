import React from 'react'

type Props = {
  label: string
}

export const Navbar: React.FunctionComponent<Props> = (props) => {
  return (
    <header>
      <div>logo {props.label}</div>
      <nav>
        <ul>
          <li>docs</li>
          <li>profile</li>
          <li>login</li>
        </ul>
      </nav>
    </header>
  )
}
