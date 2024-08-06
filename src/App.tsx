import { Suspense } from 'react';
import {
  Sidebar,
  Home,
  About,
  Portfolio,
  Resume,
  // Services,
  // Pricing,
  Testimonials,
} from './Constant/';

function App() {
  return (
    <Suspense fallback="Loading">
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        {/* <Services /> */}
        <Portfolio />
        {/* <Pricing /> */}
        <Testimonials />
      </main>
    </Suspense>
  );
}

export default App;
