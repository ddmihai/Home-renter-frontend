import React, { useState } from 'react'
import Loading from '../../Pages/Loading/Loading';

// Icons
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';





const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const handleGoToLeft = () => {
        const firstSlide    = currentIndex === 0;
        const newIndex      = firstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }

    const handleGoToRight = () => {
        const isLastSlide   = currentIndex ===  slides.length - 1;
        const newIndex      = isLastSlide ? 0 : currentIndex + 1; 
        setCurrentIndex(newIndex);
    }

    // The style is created only after the slides array of images is confirmed to be greated than 0
    const slidestyles = slides.length > 0 &&
    {
        backgroundImage:    `url(${slides[currentIndex].url})`,
        minWidth:           '100%',
        height:             '100%',
        backgroundPosition: 'center',
        backgroundSize:     'cover',
        WebkitBackgroundSize: 'cover',
        borderRadius:       '10px'
        
    };

    // Slider css
    const sliderStyles = {
        position:           'relative',
        height:             '100%'
    };

    // Arrows
    const leftArrowStyle = {
        position:           'absolute',
        top:                '50%',
        transform:          'translate(0, -50%)',
        left:               '20px',
        color:              'white',
        zIndex:             1,
        cursor:             'pointer',
        background:         'rgba(0, 0, 0, 0.5)',
        borderRadius:       '50%',
        display :           'flex',
        justifyContent:     'center',
        alignItems:         'center',
    };

    const rightArrowStyle = {
        position:           'absolute',
        top:                '50%',
        transform:          'translate(0, -50%)',
        right:              '20px',
        color:              'white',
        zIndex:             1,
        cursor:             'pointer',
        background:         'rgba(0, 0, 0, 0.5)',
        borderRadius:       '50%',
        display :           'flex',
        justifyContent:     'center',
        alignItems:         'center',
    };


  return (
    <div>
        {slides.length > 0 ? 
        
        <div style={sliderStyles}>
            <AiOutlineRight style={rightArrowStyle} size={50} onClick={handleGoToRight} />
            <AiOutlineLeft style={leftArrowStyle} size={50} onClick={handleGoToLeft} />
            <div style={slidestyles}></div>
        </div>

        :

        <Loading />
    }
    </div>
  )
}

export default ImageSlider