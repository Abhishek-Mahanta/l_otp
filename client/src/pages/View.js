import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


// Sample data for animal products
const animalProducts = [
  { id: 1, category: 'Food', name: 'Dog Food', price: 10.99, imageUrl: 'dfood.png' },
  { id: 2, category: 'Food', name: 'Cat Food', price: 5.99, imageUrl: 'cfood.png' },
  { id: 3, category: 'Food', name: 'Fish Food', price: 7.99, imageUrl: 'ffood.png' },
  { id: 4, category: 'Food', name: 'Bird Food', price: 20.99, imageUrl: 'bfood.png' },
  { id: 5, category: 'Medicine', name: 'Dog Medicine', price: 10.99, imageUrl: 'dog_medicine.jpg' },
  { id: 6, category: 'Medicine', name: 'Cat Medicine', price: 5.99, imageUrl: 'cat_medicine.jpg' },
  { id: 7, category: 'Medicine', name: 'Fish Medicine', price: 7.99, imageUrl: 'fish_medicine.jpg' },
  { id: 8, category: 'Medicine', name: 'Bird Medicine', price: 20.99, imageUrl: 'bird_medicine.jpg' },
];

const View = () => {
  const formatPriceInRupees = price => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       autoplay={ {delay: 2000}}
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       
       
    >
        <SwiperSlide><img src="banner1.png" alt="" style={{width: "100%", height: "40vh"}}/></SwiperSlide>
        <SwiperSlide><img src="med.png" alt="" style={{width: "100%", height: "30vh"}}/></SwiperSlide>
        <SwiperSlide><img src="consultation.png" alt="" style={{width: "100%", height: "30vh"}}/></SwiperSlide>
        <SwiperSlide><img src="cat1.png" alt="" style={{width: "100%", height: "30vh"}}/></SwiperSlide>
        <SwiperSlide><img src="bird1.png" alt="" style={{width: "100%", height: "30vh"}}/></SwiperSlide>
        <SwiperSlide><img src="fish1.png" alt="" style={{width: "100%", height: "30vh"}}/></SwiperSlide>
    </Swiper>
    
    <div>       
      <h1>Animal Products</h1>
      <div className="product-list">
        {animalProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.category}</p>
              <p>{formatPriceInRupees(product.price)}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default View;