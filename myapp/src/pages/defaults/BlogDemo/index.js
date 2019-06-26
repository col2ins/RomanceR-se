import React from 'react';

import Content from '../../../components/Content';

import BlogDemo from '../../../components/BlogDemo/BlogDemo';

class MainSupport extends React.Component {
    buildContent() {
        let data = [];

        data.push(<BlogDemo key="15" />)

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

export default MainSupport;