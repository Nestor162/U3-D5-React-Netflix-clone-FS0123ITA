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
            <a className="text-white-50" href="#link">
              Audio and Subtitles
            </a>
          </li>
          <li className="lh-lg">
            <a className="text-white-50" href="#link">
              Media Center
            </a>
          </li>
          <li className="lh-lg">
            <a className="text-white-50" href="#link">
              Privacy
            </a>
          </li>
          <li className="lh-lg">
            <a className="text-white-50" href="#link">
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
            <a className="text-white-50 lh-lg" href="#link">
              Audio Description
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#link">
              Investor relations
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#link">
              Legal notices
            </a>
          </li>
        </ul>
      </Col>
      <Col xs={3}>
        <ul>
          <li>
            <a className="text-white-50 lh-lg" href="#link">
              Help Center
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#link">
              Jobs
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#link">
              Cookie Preferences
            </a>
          </li>
        </ul>
      </Col>
      <Col xs={3}>
        <ul>
          <li>
            <a className="text-white-50 lh-lg" href="#link">
              Gift Cards
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#link">
              Term of Use
            </a>
          </li>
          <li>
            <a className="text-white-50 lh-lg" href="#link">
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
