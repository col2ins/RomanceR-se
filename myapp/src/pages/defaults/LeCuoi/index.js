import React from 'react';

import Content from '../../../components/Content';

// import AboutUs from './AboutUs/AboutUs';
import Blog from '../../../components/Blog/Blog';
// import Partners from '../../../components/Partners/Partners';


class HomePage extends React.Component {
    buildContent() {
        let data = [];

        // data.push(<AboutUs key="01" />)
        data.push(<Blog key="08" />)
        // data.push(<Partners key="09" />)

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