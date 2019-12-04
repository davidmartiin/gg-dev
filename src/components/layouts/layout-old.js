/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "../../styles/all.scss";

import Header from "../header";
import Footer from "../footer";

const LayoutOld = ({ children }) => {
  const data = useStaticQuery(graphql`
    query OldSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

LayoutOld.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutOld
