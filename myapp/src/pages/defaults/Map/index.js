import React from 'react';

import Content from '../../../components/Content';

import Map from '../../../components/Map/Map';

class MainMap extends React.Component {
    buildContent() {
        let data = [];

        data.push(<Map key="09" />)

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

export default MainMap;