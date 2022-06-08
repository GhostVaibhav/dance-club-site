import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import Query from "./components/Query";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
	return (
		<>
			<Navbar />
			{/* <About /> */}
			<Intro />
			<Query />
			<Footer />
		</>
	);
}

export default App;
