import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixNav from "./components/NetflixNav";
import MainContent from "./components/MainContent";
import NetflixFooter from "./components/NetflixFooter";

function App() {
  return (
    <main className="App">
      <NetflixNav />
      <MainContent />
      <NetflixFooter />
    </main>
  );
}

export default App;
