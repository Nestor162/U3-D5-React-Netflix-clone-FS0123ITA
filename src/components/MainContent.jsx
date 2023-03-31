import { Container } from "react-bootstrap";
import Filters from "./Filters";
import MovieCarousel from "./MovieCarousel";

const MainContent = () => (
  <>
    <Filters />
    <Container>
      <MovieCarousel />
    </Container>
  </>
);

export default MainContent;
