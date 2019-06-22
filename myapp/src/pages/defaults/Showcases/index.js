import React from 'react';

import Content from '../../../components/Content';

import Showcases from '../../../components/Showcases/Showcases';

class MainShowcases extends React.Component {
    buildContent() {
        let data = [];

        data.push(<Showcases key="04" />)

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

export default MainShowcases;