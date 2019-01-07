import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'

import pagesHeaderStyle from '../../../assets/jss/dashboard/components/pagesHeaderStyle.js'

class PagesHeader extends React.Component {
  render() {
    const { classes, color } = this.props
    const appBarClasses = cx({
      [' ' + classes[color]]: color
    })
    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <Hidden smDown>
            <div className={classes.flex}>
              <span
                dangerouslySetInnerHTML={{
                  __html: `<a href="/" style="background-image: none; height: 32px;">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 250.1 70"
                         className="logo" height="32" fill="#fff">
                        <g>
                            <path
                                d="M88.3,14.3c-6.8,0-12.1,3.5-14.9,8.2c-2.2,3.7-3,7.9-3,12.6c0,5.6,1.6,10.8,4.9,14.6c3,3.6,7.5,5.9,13.1,5.9 c3.7,0,7.2-1.1,10-3c3.2-2.2,5.5-5.8,6.1-9.7H98c-0.5,2.1-1.2,3.2-2.3,4.3c-1.6,1.7-4.2,2.6-7.3,2.6c-3,0-5.4-1-7.2-2.8 c-2.4-2.4-3.8-6.3-3.8-9.9h27.9l0.1-4c0.1-5.3-1.8-10.4-5-13.9C97.4,16.2,93.4,14.3,88.3,14.3z M77.5,31.5 c0.2-5.8,3.7-11.6,10.8-11.6c3.5,0,6.1,1.4,7.8,3.6c1.6,2.1,2.4,5.1,2.4,8H77.5z"></path>
                            <path
                                d="M128,14.4c-4.4,0-9.5,2.2-11.8,6.1l-1.2-5.1h-5.1V70h6.6V50.1c2.1,3.6,7.2,5.6,11.4,5.6c4.6,0,8.2-1.6,10.8-4 c4-3.8,6-10,6-16.8c0-6.5-1.9-12.5-5.7-16.3C136.6,16,132.8,14.4,128,14.4z M126.9,50.2c-2.9,0-4.8-1.2-6.4-2.6 c-3.3-2.9-4.4-7.6-4.4-12.5s1.1-9.7,4.4-12.5c1.6-1.4,3.5-2.6,6.4-2.6c8.8,0,11.1,7.9,11.1,15.1C138,42.3,135.7,50.2,126.9,50.2z"></path>
                            <path
                                d="M167.3,14.3c-6.8,0-12.1,3.5-14.9,8.2c-2.2,3.7-3,7.9-3,12.6c0,5.6,1.6,10.8,4.9,14.6c3,3.6,7.5,5.9,13.1,5.9 c3.7,0,7.2-1.1,10-3c3.2-2.2,5.5-5.8,6.1-9.7H177c-0.5,2.1-1.2,3.2-2.3,4.3c-1.6,1.7-4.2,2.6-7.3,2.6c-3,0-5.4-1-7.2-2.8 c-2.4-2.4-3.8-6.3-3.8-9.9h27.9l0.1-4c0.1-5.3-1.8-10.4-5-13.9C176.4,16.2,172.4,14.3,167.3,14.3z M156.5,31.5 c0.2-5.8,3.7-11.6,10.8-11.6c3.5,0,6.1,1.4,7.8,3.6c1.6,2.1,2.4,5.1,2.4,8H156.5z"></path>
                            <path
                                d="M206.8,14.3c-6.8,0-12.1,3.5-14.9,8.2c-2.2,3.7-3,7.9-3,12.6c0,5.6,1.6,10.8,4.9,14.6c3,3.6,7.5,5.9,13.1,5.9 c3.7,0,7.2-1.1,10-3c3.2-2.2,5.5-5.8,6.1-9.7h-6.5c-0.5,2.1-1.2,3.2-2.3,4.3c-1.6,1.7-4.2,2.6-7.3,2.6c-3,0-5.4-1-7.2-2.8 c-2.4-2.4-3.8-6.3-3.8-9.9h27.9l0.1-4c0.1-5.3-1.8-10.4-5-13.9C215.9,16.2,211.9,14.3,206.8,14.3z M196,31.5 c0.2-5.8,3.7-11.6,10.8-11.6c3.5,0,6.1,1.4,7.8,3.6c1.6,2.1,2.4,5.1,2.4,8H196z"></path>
                            <polygon
                                points="250.1,20.4 248.6,15.6 234.7,20.5 233.5,15.4 228.4,15.4 228.4,54.7 235,54.7 235,26.8 	"></polygon>
                            <rect x="44" y="47.5" width="7.3" height="7.3"></rect>
                            <rect x="44" y="15.3" width="7.3" height="7.3"></rect>
                            <rect x="61.2" y="15.3" width="7.3" height="7.3"></rect>
                            <rect x="26.9" y="15.3" width="7.3" height="7.3"></rect>
                            <rect x="52.6" y="31.4" width="7.3" height="7.3"></rect>
                            <rect x="35.4" y="31.4" width="7.3" height="7.3"></rect>
                            <rect x="13.3" width="7.3" height="7.3"></rect>
                            <rect width="6.6" height="54.6"></rect>
                            <rect x="13.6" y="15.3" width="6.6" height="39.4"></rect>
                        </g>
                    </svg>
                </a>`
                }}
              />
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

PagesHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger'])
}

export default withStyles(pagesHeaderStyle)(PagesHeader)
