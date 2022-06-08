import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Teams from "./components/Teams";
// import About from "./components/About";
import Query from "./components/Query";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import About from "./components/About";
// import Teams from "./components/Teams";


function App() {
	return (
		<>
			<Navbar />
			<Intro />
			<About />
			<Teams />
			<Query />
			<Footer />
		</>
	);
}

export default App;
