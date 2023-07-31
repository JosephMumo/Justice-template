import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background from '../images/law.jpg'
import person1 from '../images/pic-person-01.jpg'
import person2 from '../images/pic-person-02.jpg'
import person3 from '../images/pic-person-03.jpg'

const Carousel = () => {
  const data = [
    { id: 1, caption: 'Image 1', imageUrl: `${person1}`, person: 'John Doe', service: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam a esse rem perferendis necessitatibus deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam a esse rem perferendis necessitatibus deleniti.'},
    { id: 2, caption: 'Image 2', imageUrl: `${person2}`, person: 'John Doe', service: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam a esse rem perferendis necessitatibus deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam a esse rem perferendis necessitatibus deleniti.'},
    { id: 3, caption: 'Image 3', imageUrl: `${person3}`, person: 'John Doe', service: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam a esse rem perferendis necessitatibus deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam a esse rem perferendis necessitatibus deleniti.'},
    // Add more images or data here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };


  return (
    <div className='text-center p-3 px-9 bg-black' >
      <Slider {...settings} className='h-96'>
        {data.map(item => (
          <div key={item.id}>
            <img src={item.imageUrl} className='rounded-full h-14 w-14 object-fit mt-5' />
            <h2 className='text-3xl mt-5'>{item.person}</h2>
            <br />
            <p>{item.service}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;