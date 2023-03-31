import Carousel from "react-bootstrap/Carousel";
import MovieCards from "./MovieCards";
import { Row } from "react-bootstrap";

function MovieCarousel(props) {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <Row>
          <MovieCards query={props.query} />
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <MovieCards query={props.query} />
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default MovieCarousel;
