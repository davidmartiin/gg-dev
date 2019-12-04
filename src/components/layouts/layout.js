/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import {inView} from "../../events/events";
import "../../styles/all.scss";

import Header from "../header";
import Footer from "../footer";

let prevScroll = 0;
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            trackingScroll: this.props.trackScroll,
            index: 0,
        };
    }
    updateScroll = ( ev ) => {
        if( this.state.trackingScroll ){
            let scrollPos = window.scrollY + this.state.windowOffset;
            let index = this.state.index;
            const curSection = this.state.sections[index];
            const nextHeight = curSection.offsetTop;

            if( scrollPos >= nextHeight ){
                curSection.classList.add('in-view');
                curSection.dispatchEvent(inView);
                index++;

                this.setState({
                    index: index,
                });

                if( index >= this.state.sections.length ){
                    this.setState({trackingScroll: false});
                    window.removeEventListener('scroll', this.updateScroll, {passive: true});
                }
            }
        }
    }
    initForScrollTracking = () => {
        const sections = Array.from(document.getElementsByTagName('section'));
        const offset = Math.round(window.outerHeight / 2);

        this.setState({
            windowOffset: offset,
            sections: sections,
        });
    }
    componentDidMount(){
        if( this.state.trackingScroll ){
            this.initForScrollTracking();
            window.addEventListener( 'scroll', this.updateScroll, {passive: true} );
        }
    }
    componentWillUnmount(){
        if( this.state.trackingScroll ){
            window.removeEventListener( 'scroll', this.updateScroll );
        }
    }
    render(){
        return (
          <>
            <Header />
            <div>
              <main>{this.props.children}</main>
              <Footer />
            </div>
          </>
        )
    }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
