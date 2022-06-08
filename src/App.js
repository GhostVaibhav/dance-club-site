import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Teams from "./components/Teams";
import Query from "./components/Query";

function App() {
	return (
		<>
			<Navbar />
			<Intro />
			{/* <About /> */}
			{/* <Teams /> */}
			<Query />
			<Footer />
		</>
	);
}

export default App;
