import styled from "styled-components"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"





const SlideShow = (props) => {
  let settings = {
    dots:true,
    infinite:true,
    speed:500,
    slideToShow:1,
    slidesToScroll:1,
    autoplay:true,




  };






    return (



<Carousel{...settings}>
  <Wrapper>
  <a>

<img src= '/images-20210504T142301Z-001/slider-badag.jpg' alt=''/>

  </a>
</Wrapper>

<Wrapper>
<a>

<img src= '/images-20210504T142301Z-001/slider-badging.jpg' alt=''/>

</a>
</Wrapper>


<Wrapper>
<a>

<img src= '/images-20210504T142301Z-001/slider-scale.jpg' alt=''/>

</a>
</Wrapper>

<Wrapper>
<a>

<img src= '/images-20210504T142301Z-001/slider-scales.jpg' alt=''/>

</a>
</Wrapper>


</Carousel>




    )

};



export default SlideShow;

const Carousel = styled(Slider) `
margin-top: 20px;


& > button  {
  opacity: 0;
  height:100%;
  width:5vw;
  z-index:1;

  &:hover {
    opacity: 1;
    transition: 0.2s ease 0s;
  }
}

ul li button {
  &:before {
    font-size: 10px;
    color: rgba(150.158,171);
  }

}

li.slick-active button:before {
  color:white;

}

.slick-list {
overflow:initial;

}

.slick-prev {
  left: -75px;

}

.slick-next {
  right: -75px;

}

  `


const Wrapper = styled.div `
border-radius:4px;
cursor:pointer;
position:relative;

a {
  border-radius
}


`
