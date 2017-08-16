import '../../../__test-mocks__/react-redux';
import appContainer from '../app.container';
import App from '../App';
import { samplesFetchRequested } from '../app.action';

describe('app.container', () => {
	describe('mapStateToProps', () => {
		it('should select app from store state', () => {
			const app = { loading: false, samples: [] };
			const state = { app };
			expect(appContainer.mapStateToProps(state)).toBe(app);
		});
	});
	describe('mapDispatchToProps', () => {
		it('should return samplesFetchRequested callback as fetchSamples', () => {
			const expected = {
				fetchSamples: samplesFetchRequested
			};
			expect(appContainer.mapDispatchToProps).toMatchObject(expected);
		});
	});
	describe('WrappedComponent', () => {
		it('should be App', () => {
			expect(appContainer.WrappedComponent).toBe(App);
		});
	});
});
