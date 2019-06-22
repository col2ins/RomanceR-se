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
              style={{ background: "#fff", marginBottom: "1.875rem" }}
              className="montserrat-medium color-dark-25"
            />
            <Form.Text className="text-muted h1-masthead montserrat-mediumitalic color-dark-25">
              (Chúng tôi cam kết không chia sẻ email của bạn với bên thứ ba){" "}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicNormalText">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Tiêu đề
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Tiêu đề"
              className="montserrat-medium color-dark-25"
              style={{ background: "#fff", marginBottom: "1.875rem" }}
            />{" "}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Nội dung
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Nội dung"
              className="montserrat-medium color-dark-25"
              style={{
                background: "#fff",
                marginBottom: "1.875rem",
                borderRadius: "0"
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicNormalText">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Mã đơn hàng{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Mã đơn hàng"
              className="montserrat-medium color-dark-25"
              style={{ background: "#fff", marginBottom: "1.875rem" }}
            />{" "}
          </Form.Group>
          <Form.Group controlId="formBasicNormalText">
            <Form.Label className="h5 h5-masthead montserrat-semibold color-dark-blue">
              Vấn đề cần hỗ trợ{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Vấn đề"
              className="montserrat-medium color-dark-25"
              style={{ background: "#fff", marginBottom: "1.875rem" }}
            />{" "}
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
              className="montserrat-medium color-dark-25 form-control-file"
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
