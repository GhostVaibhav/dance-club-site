import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import About from "./components/About";
import Teams from "./components/Teams";
=======
// import About from "./components/About";
import Query from "./components/Query";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
>>>>>>> ff0531e7ae34d1337f420d71c1d8de899f62300b

function App() {
	return (
		<>
			<Navbar />
<<<<<<< HEAD
			<About />
			<Teams />
			Kuch bhi aise hi
=======
			{/* <About /> */}
			<Intro />
			<Query />
>>>>>>> ff0531e7ae34d1337f420d71c1d8de899f62300b
			<Footer />
		</>
	);
}

export default App;
