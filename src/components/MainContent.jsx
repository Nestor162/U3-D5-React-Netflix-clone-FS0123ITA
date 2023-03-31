import { Container } from "react-bootstrap";
import Filters from "./Filters";
import MovieCarousel from "./MovieCarousel";

const MainContent = () => (
  <>
    <Filters />
    <Container>
      <h3 className="text-white">Trending</h3>
      <MovieCarousel />
    </Container>
  </>
);

export default MainContent;
