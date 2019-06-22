import React from 'react';

import Content from '../../../components/Content';

import Support from '../../../components/Support/Support';

class MainSupport extends React.Component {
    buildContent() {
        let data = [];

        data.push(<Support key="04" />)

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