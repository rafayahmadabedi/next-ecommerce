import React from 'react'
import Footer from './footer'
import NavBar from './navBar'

function Layout({children}) {
    return (
        <content>
            <NavBar />
                {children}
            <Footer />
        </content>
    )
}

export default Layout
