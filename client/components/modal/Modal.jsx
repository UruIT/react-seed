import React from 'react';
import style from './Modal.scss';
import PropTypes from 'prop-types';

class Modal extends React.Component {
	constructor() {
		super();
		this.state = {
			modalClassName: style.modal,
			open: false
		};
		this.handleOutterClick = this.handleOutterClick.bind(this);
	}

	render() {
		if (!this.state.open) {
			return null;
		}
		return (
			<div>
				<div className={this.state.modalClassName}>
					{this.props.children}
				</div>
				<div className={style.backdrop} onClick={this.handleOutterClick} />
			</div>
		);
	}

	handleOutterClick = () => {
		if (this.props.closeClickingOutside) {
			this.props.onClose();
		}
	};

	componentWillReceiveProps = nextProps => {
		if (nextProps.open && !this.props.open) {
			this.setState({
				open: true,
				modalClassName: style.modal
			});
		}
		if (!nextProps.open && this.props.open) {
			this.setState({ modalClassName: style.modal + ' ' + style.fadeOut }, () => {
				setTimeout(() => {
					this.setState({ open: false });
				}, 1000);
			});
		}
	};
}

Modal.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node,
	closeClickingOutside: PropTypes.bool
};

export default Modal;
