import { Route, Switch } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Switch>
          <Route path="/">
            <Hero />
            <About />
            <Menu />
            <Gallery />
            <Reviews />
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;