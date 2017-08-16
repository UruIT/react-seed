import App from './App';
import { connect } from 'react-redux';
import { samplesFetchRequested } from './app.action';

const mapStateToProps = ({ app }) => app;

const mapDispatchToProps = {
	fetchSamples: samplesFetchRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
