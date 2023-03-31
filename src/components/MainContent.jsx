import { Container } from "react-bootstrap";
import Filters from "./Filters";
import MovieCarousel from "./MovieCarousel";

const MainContent = () => (
  <>
    <Filters />
    <Container>
      <h3 className="text-white pt-3">Trending Now</h3>
      <MovieCarousel query="s=one%20piece" />
    </Container>
  </>
);

export default MainContent;
