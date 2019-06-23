import React from "react";
import { Container } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container>
        <h5 className="h5-masthead montserrat-extrabold color-dark-blue">06</h5>
        <h2 className="h2-masthead playfairdisplay-bolditalic color-very-soft-orange">
          Dự toán chi phí lễ cưới hỏi{" "}
        </h2>
        <p className="h5-masthead montserrat-medium color-dark-75">
          Trả lời các câu hỏi dưới đây giúp Romance Rosé nắm bắt được yêu cầu cụ
          thể cho ngày cưới của hai bạn, từ đó việc ngân sách dự trù thuận tiện
          và nhanh chóng{" "}
        </p>
      </Container>
    );
  }
}

export default Title;
