import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Teams from "./components/Teams";
import Query from "./components/Query";
import Awards from "./components/Awards";
import Quote from "./components/Quote";
import Events from "./components/Events";

function App() {
	return (
		<>
			<Navbar />
			<Intro />
			<About />
			<Teams />
			<Awards />
			<Events />
			<Quote />
			<Query />
			<Footer />
		</>
	);
}

export default App;
