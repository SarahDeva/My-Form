// const Images = ({ slides }) => {
//     const [current, setCurrent] = useState(0);
//     const length = slides.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)
//     };

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1)
//     }

//     console.log(current);

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }

//     return (
//         <section className="slider">
//             <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
//             <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
//             {Sliderdata.map((slide, index) => {
//                 return (
//                     <div className={index === current ? 'slide active' : 'slide'} key={index}>
//                         {index === current && (<img src={slide.image} alt="Margarita" className="image" />)}
//                     </div>
//                 );
//             })}
//         </section>
//     );
// };

// export default Images;


import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./App.css"

function Images() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        const items = await data.json();
        console.log(items.drinks);
        setItems(items.drinks);
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel data-interval={1000} activeIndex={index} onSelect={handleSelect}>
            {items.map((item) => {
                return (
                    <Carousel.Item >
                        <img
                            className="d-block"
                            src={item.strDrinkThumb}
                            alt="slider image"
                        />
                        <Carousel.Caption>
                            <h3>{item.strDrink}</h3>
                            <p>{item.strInstructions}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}
export default Images;
