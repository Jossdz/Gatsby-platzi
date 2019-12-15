import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img
        src="https://i.postimg.cc/L8VFy7xK/logo-pasarela-r.png"
        alt="logopasarela"
      />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/cart">
            <span>
              <img
                src="https://i.postimg.cc/L6wpMxLt/cart.png"
                alt="Catálogo"
              />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
