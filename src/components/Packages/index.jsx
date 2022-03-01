import { connect } from 'react-redux';
import Package from './Package';
import './styles.scss';

function Star() {
  return <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.11497 11.9092C2.42826 12.2893 1.97789 11.9448 2.10891 11.14L2.65994 7.75849L0.325903 5.36383C-0.229657 4.79377 -0.0576135 4.23661 0.710031 4.11919L3.93575 3.6257L5.37835 0.549239C5.7217 -0.18308 6.27836 -0.18308 6.62171 0.549239L8.06418 3.6257L11.2899 4.11919C12.0577 4.23661 12.2296 4.79377 11.6742 5.36383L9.34012 7.75862L9.89127 11.1401C10.0223 11.9449 9.57192 12.2893 8.88522 11.9093L6.00003 10.3128L3.11497 11.9092Z" fill="#FAC937"/>
  </svg>
}

const Packages = ({options, hotelName, numStars, handleChange}) => {
  let stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star key={i} />)
  }

  return (
    <section className='wrapper packages-container'>
      <h2 className='page-title'><span className='bussiness'>HOTEL</span> {hotelName} <span className='stars'>{stars}</span></h2>
      <ul className='packages'>{options.map((opt, idx) =>
        <li key={idx}>
          <Package data={opt} idx={idx} selectItem={handleChange}/>
        </li>
      )}</ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
    options: state.packages.options,
    hotelName: state.packages.hotelName,
    numStars: state.packages.numStars,
});

function handleChange(title) {
  return {
    type: '@packages/optionSelected',
    title,
  };
}

export default connect(mapStateToProps, {handleChange})(Packages);
