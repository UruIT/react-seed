const identityObject = new Proxy({}, {
	get: (target, prop) => prop
});

export default identityObject;
