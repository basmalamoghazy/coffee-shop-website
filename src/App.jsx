import Hero from './components/Hero';
import Categories from './components/Categories';
import MenuSection from './components/MenuSection';
import CtaSection from './components/CtaSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

import { coffeeMenu, dessertMenu } from './data';

function App() {
  return (
    <>
      <Hero />
      <Categories />
      
      {/* Reusable Menu Section for Coffee */}
      <MenuSection 
        id="menu" 
        subtitle="Freshly Brewed" 
        title="OUR SPECIAL COFFEE" 
        items={coffeeMenu} 
      />

      {/* Reusable Menu Section for Desserts */}
      <MenuSection 
        id="desserts" 
        subtitle="Sweet Treats" 
        title="OUR SPECIAL DESSERT" 
        items={dessertMenu} 
        customStyle={{ paddingTop: '20px' }}
      />

      <CtaSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;