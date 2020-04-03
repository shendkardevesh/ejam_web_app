import { connect } from 'react-redux';
import WeatherReport from './WeatherReport';

const mapStateToProps = ({
  weatherReport: { reports }
}) => ({
  reports
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherReport);
