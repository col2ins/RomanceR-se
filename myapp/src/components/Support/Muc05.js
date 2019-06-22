import React from "react";
import { Container, Table } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container className="margin-top-secondary">
        <Table striped bordered hover style={{ textAlign: "center" }}>
          <thead>
            <tr className="montserrat-semibold color-dark-blue">
              <th />
              <th>Kể từ ngày giao hàng</th>
              <th>
                Sản phẩm lỗi <br />
                <i style={{ fontSize: "smaller" }}>(do nhà cung cấp)</i>
              </th>
              <th>Sản phẩm không lỗi</th>
              <th>
                Sản phẩm lỗi <br />
                <i style={{ fontSize: "smaller" }}> (do người sử dụng)</i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3" className="montserrat-semibold color-dark-blue">
                Hoa cưới
              </td>
              <td>48h đầu tiên</td>
              <td>
                Đổi mới <br />
                Trả không thu phí
              </td>
              <td>Không hỗ trợ đổi/trả</td>
              <td>Không hỗ trợ đổi/trả</td>
            </tr>
            <tr>
              <td>7 ngày tiếp theo</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Sau 7 ngày</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Title;
