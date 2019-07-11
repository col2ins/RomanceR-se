import React from "react";
import { Container } from "react-bootstrap";

class Content extends React.Component {
  render() {
    return (
      <Container>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title=""
              height="1920"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=ho%20chi%20minh&t=&z=19&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Content;
