/** @jsxImportSource @emotion/react */

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getMovieListByTag } from "../../modules/MainPage/tagDataSlice";
import { css, jsx } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Rate } from "antd";
import { sample } from "../../assets/Sample";

const sliderWrapperStyle = css`
    width: 65rem;
    margin: 0 auto;

    .slick-prev:before,
    .slick-next:before {
        opacity: 1;
        color: #45464b;
        font-size: 35px;
    }
`;

const sliderImgStyle = css`
    position: relative;
    background-color: #222222;
    width: 180px;
    height: 257px;
    margin: 0 auto;

    img {
        width: 100%;
        height: 100%;
        transform: scale(1);
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        transition: all 0.2s ease-in-out;
    }

    &:hover div {
        z-index: 1;
        visibility: visible;
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
    }

    &:hover img {
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
    }

    
`;

const sliderImgLayerStyle = css`
    z-index: -1;
    visibility: hidden;
    display: grid;
    background-color: rgb(30 30 30 / 75%);
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
`;

const rateStyle = css`
    font-size: 0.8rem;
`;

const fontStyle = css`
    font-size: 1.15rem;
    font-weight: bold;
    color: #ffffff;
`;

function MovieSlider() {
    const { movieList } = useSelector((state) => state.mainTagDataSlice);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const target = (movieList.length >= 1 && movieList) || sample;

    return (
        <div css={sliderWrapperStyle}>
            <Slider {...settings}>
                {target.map((item) => {
                    return (
                        <>
                            <div css={sliderImgStyle}>
                                <Link to={`/movie/${item.id}`}>
                                    <LazyLoadImage effect="blur" src={item.poster} alt={item.title} />
                                    <div css={sliderImgLayerStyle}>
                                        <p css={fontStyle}>{item.title}</p>
                                        <Rate
                                            disabled
                                            allowHalf
                                            defaultValue={Math.round(item.score / 2)}
                                            css={rateStyle}
                                        />
                                        <p css={fontStyle}>{item.total}</p>
                                    </div>
                                </Link>
                            </div>
                        </>
                    );
                })}
            </Slider>
        </div>
    );
}

export default MovieSlider;
