import React, {Component} from "react";
import Slider from "react-slick";
import SliderItem from '../SliderItem'


class SimpleSlider extends Component {
  constructor(props){
    super(props)
    // console.log('props', props)
    this.state = {
      news: props.data
    }
  }

  
  render() {
    // console.log('props en el slider', this.state.news)
    
    const destacadas = this.state.news.map(destacada =>{
      return (<SliderItem data={destacada} key={destacada.url}/>)
    })
    const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {destacadas}
      </Slider>
    );
  }
}

export default SimpleSlider