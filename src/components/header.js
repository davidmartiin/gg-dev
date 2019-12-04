import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types";
import React from "react";

import heart from "../images/icons/heart.svg";
import userSvg from "../images/icons/user.svg";
import ggLogo from "../images/icons/global-gardens-logo.svg";

const Header = ({ siteTitle }) => {
  const {wordpressWpApiMenusMenusItems, wordpressAcfOptions} = useStaticQuery(
    graphql`
      query {
        wordpressWpApiMenusMenusItems(wordpress_id: {eq: 2}) {
          items {
            title
            object_slug
            object_id
            url
            wordpress_id
            type
          }
        }
        wordpressAcfOptions {
            options {
              donate_link
              login_link
            }
        }
      }
    `
  );
  const menuItems = wordpressWpApiMenusMenusItems.items;
  return (
    <header className="main-header flex ai-end">
      <div className="menu-container flex ai-center">
        {menuItems.map( item => {
            const url = item.type === "custom" ? item.url : item.object_slug;

            return (
                <Link
                  key={item.wordpress_id}
                  to={ '/' + url }
                  className="menu-item flex ai-end"
                  activeClassName="active"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></Link>
            )
        })}
        <a
            href={wordpressAcfOptions.options.donate_link}
            key="headerItemDonate"
            className="menu-item flex ai-end"
            target="_blank"
            rel="noreferrer noopener">
            <img src={heart} alt="heart/donate icon" />
            Donate
        </a>
        <a
            href={wordpressAcfOptions.options.login_link}
            key={`headerItemLogin`}
            className={`menu-item flex ai-end`}
            target={`_blank`}
            rel={`noreferrer noopener`}>
            <img src={userSvg} alt="user icon"/>
            Login
        </a>
      </div>
      <Link to={'/'} className="header-logo flex js-end">
        <img src={ggLogo} alt="global-gardens logo"/>
      </Link>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
