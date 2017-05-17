const identityObject = new Proxy({}, {
	get: (target, name) => name
});

export default identityObject;
