import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
function IndividualIntervalsExample() {
  return (
    <Carousel  variant='light' className= 'main_carousel my-2'>
      <Carousel.Item interval={500} >
        <img style={{width:'100%'}} className='caroimg' src='https://kinclimg5.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1706116222021-jansalesdesktop.jpg' text="First slide"  />
         </Carousel.Item>
      <Carousel.Item interval={500} >
      <img className='caroimg' src='https://kinclimg8.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1707324269921-Desktop_homepage_banner.jpg' text="First slide" style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'10px'}} />
        </Carousel.Item>
      <Carousel.Item >
      <img className='caroimg' src='https://kinclimg0.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1708020006762-Desktop_Homepage_Banner.jpg' text="First slide" style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'10px'}} />
        </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;