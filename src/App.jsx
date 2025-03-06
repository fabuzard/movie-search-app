import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
function App() {
  return (
    <div className="bg-[#D3F0F4] bg-cover">
      <div className="px-28">
        <Navbar />
        <Hero/>
        <MovieList/>
      </div>
    </div>
  );
}

export default App;
