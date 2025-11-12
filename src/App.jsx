import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedImages from './components/FeaturedImages';
import Story from './components/Story';
import SignatureRooms from './components/SignatureRooms';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedImages />
      <Story />
      <SignatureRooms />
      <Amenities />
      <Location />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
