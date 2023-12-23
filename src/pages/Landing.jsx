import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby bicycle rights swag vegan sriracha solarpunk. Same seitan
            whatever blue bottle flannel tattooed. Everyday carry kinfolk
            jianbing austin, affogato craft beer trust fund. Pork belly
            gluten-free kogi paleo echo park VHS ascot, wolf tbh tilde. Ethical
            health goth cardigan bodega boys, tumeric drinking vinegar wolf
            normcore before they sold out blog literally. Scenester
            vexillologist listicle actually waistcoat art party banh mi. Unicorn
            coloring book before they sold out seitan mustache mukbang.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
