import React from 'react';

import Content from '../../../components/Content';

import WeddingParty from '../../../components/WeddingParty/WeddingParty';

class MainWeddingParty extends React.Component {
    buildContent() {
        let data = [];

        data.push(<WeddingParty key="12" />)

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

export default MainWeddingParty;