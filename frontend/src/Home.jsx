import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './Home.css';

function Home() {
  const swappingText = ["iPhone X", "iPhone 12", "Galaxy S10"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        () => Math.floor(Math.random() * (swappingText.length))
      );
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Your <span>{swappingText[currentTextIndex]}</span>, </h1>
          <h1>ready for a second life.</h1>
          <p>Find out how your device can be restored easily, at home!</p>
          <button className="hero-button">
            Take me there!
          </button>
        </div>
      </section>

      <section className="main-section dark">
        <div className="container">
          <h2>placeholder</h2>
        </div>
      </section>

      <section className="main-section light">
        <div className="container">
          <h2>placeholder</h2>
          <div className='card-container'>
            <div className="card">
              <h2>ajwirfeijfraewij</h2>
              <p>asdfdasfgrweagtasfrgdgarefs</p>
            </div>
            <div className="card">
              <h2>ajwirfeijfraewij</h2>
              <p>asdfdasfgrweagtasfrgdgarefs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="main-section dark">
        <div className="container">
          <h2>placeholder</h2>
          <div className="logos">
            <img src={reactLogo} alt="React Logo" className="logo" />
            <img src={viteLogo} alt="Vite Logo" className="logo" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
