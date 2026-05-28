import Hero from "../components/home/Hero";
import FeaturedTrips from "../components/home/FeaturedTrips";
import CategoryShowcase from "../components/home/CategoryShowcase";
import Testimonials from "../components/home/Testimonials";
import NewsletterCTA from "../components/home/NewsletterCTA";

const HomePage = () => (
  <div className="page-enter">
    <Hero />
    <FeaturedTrips />
    <CategoryShowcase />
    <Testimonials />
    <NewsletterCTA />
  </div>
);

export default HomePage;
