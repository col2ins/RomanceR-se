import React from "react";
import { Container, Form, Button } from "react-bootstrap";

class Title extends React.Component {
  render() {
    return (
      <Container className="margin-top-secondary">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
              className="montserrat-medium color-dark-75"
            />
          </Form.Group>
          <Form.Group controlId="formBasicNormalText">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Số điện thoại liên hệ{" "}
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="Số điện thoại"
              className="montserrat-medium color-dark-75"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
            />{" "}
            <Form.Text className="text-muted h1-masthead montserrat-mediumitalic color-dark-75">
              (Chúng tôi cam kết không chia sẻ số điện thoại và email của bạn
              với bên thứ ba){" "}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicNormalText">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Tên cô dâu & chú rể
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Họ và tên"
              className="montserrat-medium color-dark-75"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
            />{" "}
          </Form.Group>
          <Form.Group controlId="formBasicNormalDate">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Ngày cưới dự định{" "}
            </Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              className="montserrat-medium color-dark-75"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
            />{" "}
          </Form.Group>
          <Form.Group controlId="formBasicNormalText">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Địa điểm tổ chức dự định{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Địa chỉ"
              className="montserrat-medium color-dark-75"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
            />{" "}
          </Form.Group>
          <Form.Group controlId="formBasicNormalText">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Dịch vụ yêu cầu{" "}
            </Form.Label>
            <Form.Control
              as="select"
              className="montserrat-medium color-dark-75"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
            >
              <option>Lễ dạm ngõ</option>
              <option>Lễ ăn hỏi</option>
              <option>Lễ cưới</option>
              <option>Trọn gói ba lễ (dạm ngõ - ăn hỏi - thành hôn)</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Mô tả phong cách trang trí ưa thích{" "}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Mô tả (tối đa 300 từ)"
              maxLength="300"
              className="montserrat-medium color-dark-75"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                borderRadius: "0",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicNormalText">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Đặt lịch hẹn{" "}
            </Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              className="montserrat-medium color-dark-75"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
            />{" "}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Yêu cầu khác{" "}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Yêu cầu khác (tối đa 300 từ)"
              maxLength="300"
              className="montserrat-medium color-dark-75"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                borderRadius: "0",
                border: "1px solid rgba(237, 178, 155, 0.25)"
              }}
            />
          </Form.Group>
          <Form.Group controlId="exampleFormControlFile1">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Tập tin đính kèm{" "}
            </Form.Label>
            {/* <div>
              <span className="montserrat-medium color-very-soft-orange">
                <i
                  className="dripicons-paperclip color-very-soft-orange"
                  aria-hidden="true"
                />
                Đính kèm
              </span>
            </div> */}
            <Form.Control
              type="file"
              className="montserrat-medium color-dark-75 form-control-file"
              style={{ marginBottom: "1.875rem" }}
            />{" "}
          </Form.Group>
          <Button
            className="btn-bg-primary"
            style={{ borderColor: "#edb29b" }}
            type="submit"
          >
            Gửi
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Title;
