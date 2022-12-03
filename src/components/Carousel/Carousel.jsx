import Carousel from 'react-bootstrap/Carousel';
import logo from '../../zodiac.png';
import './carousel.css'

export default function HomePage() {
    return (
      <>
      <img src={logo} className="App-logo" alt="logo" />
      <div className="carousel">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
    </>
    );
  }