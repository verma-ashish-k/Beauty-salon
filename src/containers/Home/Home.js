import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Carousel } from 'antd';
import { Routes } from '../../constants/routes';
import './Home.css';

class Home extends React.Component {
  onRedirectHandler = () => {
    this.props.history.push(Routes.SIGNUP);
  };

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div className='wrapper wrapper--home d-flex space-between align-items-center'>
        <div>
          <h2 className='title'>
            Welcome to Lina's Beauty Salon, your one stop shop for all your
            beauty needs. We offer a wide range of services from haircuts, hair
            coloring, hair styling, facials, waxing, and makeup.
          </h2>
          {isAuthenticated ? (
            <Link to='/appointment'>
              <Button type='primary' size={'large'} className='button-main'>
                Book an Appointment
              </Button>
            </Link>
          ) : (
            <Button
              type='primary'
              size={'large'}
              className='button-main'
              onClick={this.onRedirectHandler}
            >
              Sign In for booking
            </Button>
          )}
        </div>
        <Carousel effect='fade' dotPosition='bottom' autoplay='true'>
          <div className='slide'>
            <img
              src='/images/stylist-1.jpg'
              alt='Anna is a cutting Specialist'
            ></img>
          </div>
          <div>
            <img
              src='/images/stylist-2.png'
              alt='Whitney is a Makeup Artist and a Facial Waxing Specialist'
            ></img>
          </div>
          <div>
            <img
              src='/images/stylist-3.jpg'
              alt='Karla is a Master Colorist'
            ></img>
          </div>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Home);
