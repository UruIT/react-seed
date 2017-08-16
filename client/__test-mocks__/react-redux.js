jest.mock('react-redux', () => {
	const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => ({
		mapStateToProps,
		mapDispatchToProps,
		WrappedComponent
	});

	return {
		connect
	};
});
