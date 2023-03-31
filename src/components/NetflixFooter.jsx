import { Col, Row } from "react-bootstrap";

const NetflixFooter = () => (
  <footer className="container mt-big">
    <div className="ms-2rem mb-2">
      <i className="bi bi-facebook fs-4 me-3 text-white-50" />
      <i className="bi bi-instagram fs-4 me-3 text-white-50" />
      <i className="bi bi-twitter fs-4 me-3 text-white-50" />
      <i className="bi bi-youtube fs-4 me-3 text-white-50" />
    </div>
    <Row>
      <Col xs={3}>
        <ul>
          <li className="lh-lg">
            <a className="text-white-50" href="#">
              Audio and Subtitles
            </a>
          </li>
          <li className="lh-lg">
            <a className="text-white-50" href="#">
              Media Center
            </a>
          </li>
          <li className="lh-lg">
            <a className="text-white-50" href="#">
              Privacy
            </a>
          </li>
          <li className="lh-lg">
            <a className="text-white-50" href="#">
              Contact us
            </a>
          </li>
          <li className="lh-lg">
            <button type="button" className="btn btn-outline-secondary btn-sm mt-4 rounded-0">
              Service Code
            </button>
          </li>
        </ul>
      </Col>
      <Col xs={3}>
        <ul>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Audio Description
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Investor relations
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Legal notices
            </a>
          </li>
        </ul>
      </Col>
      <Col xs={3}>
        <ul>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Help Center
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Jobs
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Cookie Preferences
            </a>
          </li>
        </ul>
      </Col>
      <Col xs={3}>
        <ul>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Gift Cards
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Term of Use
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#">
              Corporate Information
            </a>
          </li>
        </ul>
      </Col>
    </Row>
    <p className="text-white-50 small ps-2rem">© 1997-2019 Netflix, inc. (i.OdOOfcda2fdt9cOde)</p>
  </footer>
);

export default NetflixFooter;
