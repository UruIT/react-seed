import React from 'react';
import style from './Modal.scss';
import PropTypes from 'prop-types';

const close = (e, onClose) => {
	e.preventDefault();
	if (onClose) {
		onClose();
	}
};

const Modal = ({ isOpen, onClose, children, closeClickingOutside }) => {
	if (!isOpen) {
		return null;
	}
	return (
		<div>
			<div className={style.modal}>
				{children}
			</div>
			<div className={style.backdrop} onClick={e => (closeClickingOutside ? close(e, onClose) : {})} />
		</div>
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node,
	closeClickingOutside: PropTypes.bool.isRequired
};

export default Modal;
