import React from 'react'

import {Container, Row} from 'react-bootstrap';

class Content extends React.Component {
    render() {
        return (
            <div className="page-content app-content">
                <Container>
                    <Row>
                        {this.props.data}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Content;