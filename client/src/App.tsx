import { Route, Switch } from 'wouter';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import OnlineOrdering from './components/OnlineOrdering';
import ReservationSystem from './components/ReservationSystem';
import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './pages/Admin';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Header />
            <main>
              <Hero />
              <About />
              <Menu />
              <Gallery />
              <Reviews />
              <OnlineOrdering />
              <ReservationSystem />
              <LocationMap />
              <Contact />
            </main>
            <Footer />
          </Route>
        </Switch>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;