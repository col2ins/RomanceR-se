import React from 'react';

import Content from '../../../components/Content';

import Products from '../../../components/Products/Products';

class MainAboutUs extends React.Component {
    buildContent() {
        let data = [];

        data.push(<Products key="16" />)

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