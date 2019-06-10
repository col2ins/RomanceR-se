import React from 'react';

import Content from '../../../components/Content';

import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import OurSuccess from './OurSuccess/OurSuccess';
import Showcases from './Showcases/Showcases';
import PartyPreparing from './PartyPreparing/PartyPreparing';
import Products from './Products/Products';
import Testimonials from './Testimonials/Testimonials';
import Blog from './Blog/Blog';

class HomePage extends React.Component {
    buildContent() {
        let data = [];

        data.push(<AboutUs key="01" />)
        data.push(<Services key="02" />)
        data.push(<OurSuccess key="03" />)
        data.push(<Showcases key="04" />)
        data.push(<PartyPreparing key="05" />)
        data.push(<Products key="06" />)
        data.push(<Testimonials key="07" />)
        data.push(<Blog key="08" />)

        return data;
    }
    render() {
        return (
            <div className="app-home-page">
                <Content data={this.buildContent()} />
            </div>
        )
    }
}

export default HomePage;