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
import Loading from './Assets/Images/Loading.gif';

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <img src={Loading} alt="" />
        </div>
      }
    >
      {/* <Sidebar /> */}
      <main className="main">
        <Home />
        <About />
        <Portfolio />
        <Resume />
        {/* <Services /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
      </main>
    </Suspense>
  );
}

export default App;
