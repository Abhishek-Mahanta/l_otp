import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
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
  { id: 5, category: 'Medicine', name: 'Dog Medicine', price: 10.99, imageUrl: 'dmedecine.png' },
  { id: 6, category: 'Medicine', name: 'Cat Medicine', price: 5.99, imageUrl: 'cmedecine.png' },
  { id: 7, category: 'Medicine', name: 'Fish Medicine', price: 7.99, imageUrl: 'fmedicine.png' },
  { id: 8, category: 'Medicine', name: 'Bird Medicine', price: 20.99, imageUrl: 'bmedecine.png' },
  { id: 9, category: 'Bed', name: 'Dog Bed', price: 10.99, imageUrl: 'dbed.png' },
  { id: 10, category: 'Bed', name: 'Cat Bed', price: 5.99, imageUrl: 'cbed.png' },
  { id: 11, category: 'T-shirt', name: 'Dog T-shirt', price: 10.99, imageUrl: 'dshirt.png' },
  { id: 12, category: 'T-shirt', name: 'Cat T-shirt', price: 5.99, imageUrl: 'cshirt.png' },
  { id: 13, category: 'Bed', name: 'Dog Bed', price: 10.99, imageUrl: 'dbed.png' },
  { id: 14, category: 'Bed', name: 'Cat Bed', price: 5.99, imageUrl: 'cbed.png' },
  { id: 15, category: 'T-shirt', name: 'Dog T-shirt', price: 10.99, imageUrl: 'dshirt.png' },
  { id: 16, category: 'T-shirt', name: 'Cat T-shirt', price: 5.99, imageUrl: 'cshirt.png' },
  { id: 17, category: 'Bed', name: 'Dog Bed', price: 10.99, imageUrl: 'dbed.png' },
  { id: 18, category: 'Bed', name: 'Cat Bed', price: 5.99, imageUrl: 'cbed.png' },
  { id: 19, category: 'T-shirt', name: 'Dog T-shirt', price: 10.99, imageUrl: 'dshirt.png' },
  { id: 20, category: 'T-shirt', name: 'Cat T-shirt', price: 5.99, imageUrl: 'cshirt.png' },
  { id: 21, category: 'Bed', name: 'Dog Bed', price: 10.99, imageUrl: 'dbed.png' },
  { id: 22, category: 'Bed', name: 'Cat Bed', price: 5.99, imageUrl: 'cbed.png' },
  { id: 23, category: 'T-shirt', name: 'Dog T-shirt', price: 10.99, imageUrl: 'dshirt.png' },
  { id: 24, category: 'T-shirt', name: 'Cat T-shirt', price: 5.99, imageUrl: 'cshirt.png' },
  { id: 25, category: 'Bed', name: 'Dog Bed', price: 10.99, imageUrl: 'dbed.png' },
  { id: 26, category: 'Bed', name: 'Cat Bed', price: 5.99, imageUrl: 'cbed.png' },
  { id: 27, category: 'T-shirt', name: 'Dog T-shirt', price: 10.99, imageUrl: 'dshirt.png' },
  { id: 28, category: 'T-shirt', name: 'Cat T-shirt', price: 5.99, imageUrl: 'cshirt.png' },
];

const View = () => {
  const formatPriceInRupees = price => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '40px' }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}


      >
        <SwiperSlide><img src="banner1.png" alt="" style={{ width: "100%", height: "40vh" }} /></SwiperSlide>
        <SwiperSlide><img src="fbanner.png" alt="" style={{ width: "100%", height: "40vh" }} /></SwiperSlide>
        <SwiperSlide><img src="accessories.png" alt="" style={{ width: "100%", height: "30vh" }} /></SwiperSlide>
        <SwiperSlide><img src="med.png" alt="" style={{ width: "100%", height: "30vh" }} /></SwiperSlide>
        <SwiperSlide>
          <a href="/consultation">
          <img src="consultation.png" alt="" style={{ width: "100%", height: "30vh" }} />
          </a>
        </SwiperSlide>
      </Swiper>

      <div>
        <div className="product-list">
          {animalProducts.map(product => (
            <div key={product.id} className={`product-card ${product.id === 9 || product.id === 10 ? 'special-card' : ''}`}>
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-details">
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <p>{formatPriceInRupees(product.price)}</p>

              </div>
            </div>
          ))}
        </div>

        <div style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '40px' }}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}


          >
            <SwiperSlide><img src="banner1.png" alt="" style={{ width: "100%", height: "40vh" }} /></SwiperSlide>
            <SwiperSlide><img src="fbanner.png" alt="" style={{ width: "100%", height: "40vh" }} /></SwiperSlide>
            <SwiperSlide><img src="accessories.png" alt="" style={{ width: "100%", height: "30vh" }} /></SwiperSlide>
            <SwiperSlide><img src="med.png" alt="" style={{ width: "100%", height: "30vh" }} /></SwiperSlide>
            <SwiperSlide>
              <a href="/consultation">
              <img src="consultation.png" alt="" style={{ width: "100%", height: "30vh" }} />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <footer className="footer" >
      <img src="PETWALE.png" alt="Logo" className="logo" />
        <p>&copy; 2024 Petwale365.</p>
        <FaEnvelope className="icons mail" />
        <FaFacebook className="icons facebook" />
        <FaInstagram className="icons instagram" />
        <FaTwitter className="icons twitter" />
      </footer>
    </div>
      );
};

      export default View;