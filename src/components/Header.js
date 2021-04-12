import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="is-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" activeClassName="is-active">
            Create Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/edit" activeClassName="is-active">
            Edit Expense
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="is-active">
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
