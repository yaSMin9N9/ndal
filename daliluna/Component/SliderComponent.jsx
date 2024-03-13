import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Modal from 'react-modal';
import 'swiper/swiper-bundle.css';
import { GrPrevious, GrNext } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import im1 from "../img/gallery-1.jpg";
import im2 from "../img/gallery-2.jpg";
import im3 from "../img/gallery-3.jpg";
import im4 from "../img/gallery-4.jpg";

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);

Modal.setAppElement('#__next');

function SliderComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);


  const modalStyles = {
    content: {
      width: "440px",
      height: "460px",
      top: '50%',
      right: '25%',
      transform: `translate(-50%, -50%) `,
      maxWidth: '80%',
      position: "fixed", // Use fixed position for centering
    },
  };
  

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (modalIsOpen && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(currentIndex);
    }
  }, [modalIsOpen, currentIndex]);

  return (
    <div className='row'>
      <div style={{ marginTop: "50px" }}>
        <div className='col-lg-12' >
          <Image className={`col-lg-3 col-md-3 col-sm-6 col-12`} onClick={() => openModal(0)} src={im1} width={300} height={300} alt="icons1" />
          <Image className={`col-lg-3 col-md-3 col-sm-6 col-12`} onClick={() => openModal(1)} src={im2} width={300} height={300} alt="icons2" />
          <Image className={`col-lg-3 col-md-3 col-sm-6 col-12`} onClick={() => openModal(2)} src={im3} width={300} height={300} alt="icons3" />
          <Image className={`col-lg-3 col-md-3 col-sm-6 col-12`} onClick={() => openModal(3)} src={im4} width={300} height={300} alt="icons4" />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={modalStyles}
      >
        <Swiper
          navigation={false}
          pagination={{ clickable: true }}
          className="swiper-container"
          ref={swiperRef}
          initialSlide={currentIndex}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          isolateListeners
        >
          <SwiperSlide>
            <Image src={im1} width={400} height={400} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={im2} width={400} height={400} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={im3} width={400} height={400} alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={im4} width={400} height={400} alt="Slide 4" />
          </SwiperSlide>
        </Swiper>
        <button style={{ marginBottom: "20px", position: "absolute", top: "200px", left: "20px", border: "none", padding: "2px 5px", borderRadius: "50%", fontWeight: "bold", zIndex: "100" }} onClick={goToPrevious}><GrPrevious /></button>
        <button style={{ marginBottom: "20px", position: "absolute", top: "200px", right: "30px", border: "none", padding: "2px 5px", borderRadius: "50%", fontWeight: "bold", zIndex: "100" }} onClick={goToNext}><GrNext /></button>
        <button style={{ marginBottom: "20px", position: "absolute", top: "25px", right: "30px", border: "none", padding: "2px 5px", borderRadius: "50%", fontSize: "20px", fontWeight: "bold", zIndex: "100" }} onClick={closeModal}><IoIosClose /></button>
      </Modal>
    </div>
  );
}

export default SliderComponent;
