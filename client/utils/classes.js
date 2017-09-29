function classes(...classnames) {
	return classnames.filter(classname => !!classname).join(' ');
}

export default classes;
