import React from 'react';
import { Container } from 'react-bootstrap';

class Title extends React.Component {
  render() {
    return (
      <Container className="text-align-center">
        <h5 className="h5-masthead montserrat-extrabold color-dark-blue">05</h5>
        <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
          Nhận xét của khách hàng
        </h2>
        <p className="h5-masthead montserrat-medium color-dark-75">
          Sự hài lòng của khách hàng là thành công của chúng tôi
        </p>
      </Container>
    );
  }
}

export default Title;
