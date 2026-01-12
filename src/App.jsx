import "./App.css";

import Logo from "./assets/logo.png";
import Header from './assets/GlowNest/Header.jpeg';
import Featured1 from './assets/GlowNest/Featured1.jpeg';
import Featured2 from './assets/GlowNest/Featured2.jpeg';
import Footer from './assets/GlowNest/Footer.jpeg';
import CTA from './assets/GlowNest/CTA.jpeg';

import ImageCarousel from "./component/ImageCarousel";


function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="GlowNest Smart Home logo" />
        <h1>GlowNest Smart Homes</h1>
      </header>

      <section className="heroSection">
        <ImageCarousel />
        <h2>Smarter Living Starts at Home</h2>
        <p>
          GlowNest brings intelligent lighting, security, and comfort together
          in one seamless smart home system.
        </p>
        <button>Get Started</button>
      </section>

      <section className="featuresSection">
        <div className="featureCard">
          <img src={Featured1} alt="" />
          <h2>All-In-One Smart Control</h2>
          <p>
            Control your lights, temperature, and security from a single
            intuitive app.
          </p>
        </div>

        <div className="featureCard">
          <img src={Featured2} alt="" />
          <h2>Energy-Efficient Design</h2>
          <p>
            Reduce energy waste with automated schedules and smart sensors.
          </p>
        </div>

        <div className="featureCard">
          <img src={Featured1} alt="" />
          <h2>Works With Your Life</h2>
          <p>
            Compatible with Alexa, Google Home, and most modern smart devices.
          </p>
        </div>
      </section>

      <section className="ctaSection">
        <img src={CTA} alt="" />
        <h2>Upgrade Your Home Today</h2>
        <p>
          Join thousands of homeowners creating safer, smarter, and more
          efficient spaces with GlowNest.
        </p>
        <button className="secondary">Request a Demo</button>
      </section>

      <footer className="footer" />
    </div>
  );
}

export default App;
