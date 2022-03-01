import React from 'react';
import { connect } from 'react-redux';
import Section from '../Section';
import './drinks.scss';

function Drinks({drinks}) {
  return (
    <div className='drinks-container'>
      <h2 className='title-primary main'>Bebidas</h2>
      <ul className='drinks'>
        <Section section={drinks} />
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  drinks: state.drinks,
});


export default connect(mapStateToProps)(Drinks);
