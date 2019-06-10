import React from 'react';

import Content from '../../../components/Content';

import Miai from '../../../components/Miai/Miai';

class MainMiai extends React.Component {
    buildContent() {
        let data = [];

        data.push(<Miai key="10" />)

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

export default MainMiai;