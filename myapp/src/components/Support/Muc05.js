import React from "react";
import { Container, Table } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container className="margin-top-secondary">
        <Table responsive="lg" style={{ textAlign: "center" }}>
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
              <td className="montserrat-medium color-dark-75">48h đầu tiên</td>
              <td className="montserrat-medium color-dark-75">
                Đổi mới <br />
                Trả không thu phí
              </td>
              <td rowSpan="6" className="montserrat-medium color-dark-75">
                Không hỗ trợ đổi/trả
              </td>
              <td rowSpan="3" className="montserrat-medium color-dark-75">
                Không hỗ trợ đổi/trả
              </td>
            </tr>
            <tr>
              <td className="montserrat-medium color-dark-75">
                7 ngày tiếp theo
              </td>
              <td rowSpan="2" className="montserrat-medium color-dark-75">
                Không hỗ trợ đổi/trả{" "}
              </td>
            </tr>
            <tr>
              <td className="montserrat-medium color-dark-75">Sau 7 ngày</td>
            </tr>
            <tr>
              <td rowSpan="3" className="montserrat-semibold color-dark-blue">
                Phụ kiện trang trí
              </td>
              <td className="montserrat-medium color-dark-75">48h đầu tiên</td>
              <td rowSpan="2" className="montserrat-medium color-dark-75">
                Đổi mới <br />
                Trả không thu phí
              </td>
              <td rowSpan="3" className="montserrat-medium color-dark-75">
                {" "}
                Bảo hành hoặc sửa chữa có thu phí{" "}
              </td>
            </tr>
            <tr>
              <td className="montserrat-medium color-dark-75">
                7 ngày tiếp theo
              </td>
            </tr>
            <tr>
              <td className="montserrat-medium color-dark-75">Sau 7 ngày</td>
              <td className="montserrat-medium color-dark-75">
                Không hỗ trợ đổi/trả{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Title;
