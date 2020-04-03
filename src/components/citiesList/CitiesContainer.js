import { connect } from 'react-redux';
import Cities from './Cities';
import { toggleCity } from '../../actions/cities';
import { fetchWeatherReport } from '../../actions/weatherReport';

const mapStateToProps = ({
  cities: { list }
}) => ({
  list
});

const mapDispatchToProps = { toggleCity, fetchWeatherReport };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
