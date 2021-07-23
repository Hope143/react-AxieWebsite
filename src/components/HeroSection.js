import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { ExternalLink } from 'react-external-link';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src={video1} autoPlay loop muted />  */}
      <img className="hero-image" src={require('./images-manners/logo.png').default} alt="" />
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <ExternalLink href="https://www.facebook.com/payamannersaxieacademy">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            LIKE OUR PAGE <i class="fab fa-facebook"></i>
          </Button>
        </ExternalLink>
       <ExternalLink href="https://www.youtube.com/channel/UCXh-jKPz29tvThJ1aK-SCXw">
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            SUBSCRIBE <i className='far fa-play-circle' />
          </Button>
        </ExternalLink>

      </div>
    </div>
  );
}
<h1>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum?</h1>

export default HeroSection;