import React from 'react';

import Content from '../../../components/Content';

import AboutUs from '../../../components/AboutUs/AboutUs';

class MainAboutUs extends React.Component {
    buildContent() {
        let data = [];

        data.push(<AboutUs key="01" />)

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

export default MainAboutUs;