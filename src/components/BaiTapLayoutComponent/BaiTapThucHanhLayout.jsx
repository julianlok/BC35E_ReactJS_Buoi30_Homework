import React, { Component } from 'react'
import Banner from './Banner'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class
    extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}
