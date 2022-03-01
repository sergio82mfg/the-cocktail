import React from 'react';
import { connect } from 'react-redux';
import Section from '../Section';
import './information.scss';

function Information({sections}) {
  return (
    <div className='information-container'>
      <ul className='information'>{sections.map((opt, idx) =>
        <li key={idx}>
          <Section
            section={opt}
            collapsible={true}
            expand={idx === 0}
            noteCollapsible={true}
          />
        </li>
      )}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: state.information.sections,
});

const mapStateDispatch = (dispatch) => ({
  handleChange(e, tab) {
    dispatch({
      type: '@packages',
      tab,
    });
  },
});

export default connect(mapStateToProps, mapStateDispatch)(Information);
