import React from 'react';

import Content from '../../../components/Content';

import EngagementParty from '../../../components/EngagementParty/EngagementParty';

class MainEngagementParty extends React.Component {
    buildContent() {
        let data = [];

        data.push(<EngagementParty key="14" />)

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

export default MainEngagementParty;