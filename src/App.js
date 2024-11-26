import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HomeVisitBanner from './components/HomeVisitBanner/HomeVisitBanner';
import BookingSection from './components/BookingSection/BookingSection';
import HealthPackages from './components/HealthPackages/HealthPackages';
import PopularTests from './components/PopularTests/PopularTests';
import HealthRisks from './components/HealthRisks/HealthRisks';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import LatestBlogs from './components/LatestBlogs/LatestBlogs';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroSection />
      <div className="main-content">
        <HomeVisitBanner />
        <WhyChooseUs />
        <HealthPackages />
        <PopularTests />
        <BookingSection />
        <HealthRisks />
        <Testimonials />
        <LatestBlogs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
