import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NetflixNav from "./components/NetflixNav";
import MainContent from "./components/MainContent";

function App() {
  return (
    <main className="App">
      <NetflixNav />
      <MainContent />
    </main>
  );
}

export default App;
