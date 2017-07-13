import React from 'react';
import style from './Modal.scss';
import PropTypes from 'prop-types';

class Modal extends React.Component {
	constructor() {
		super();
		this.state = {
			modalClassName: style.modal + " " + style.trelloModal,
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
				<div className={style.backdrop + " " + style.trelloBackdrop} onClick={this.handleOutterClick}>
					<div
						className={this.state.modalClassName}
						onClick={e => e.stopPropagation()}
						/*ref={div => {
							this.modal = div;
						}}*/
					>
						<div className={style.closeIcon} onClick={this.props.onClose} />
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
/*
	componentDidMount() {
		const modal = this.modal;
		//const modal = document.querySelector(this.state.modalClassName);

		if (modal) {
			window.onresize = e => {
				console.info(e);
				console.info('resize --->', modal, modal.clientHeight);
			};
		}
	}
*/
	handleOutterClick = () => {
		if (this.props.closeClickingOutside) {
			this.props.onClose();
		}
	};

	componentWillReceiveProps = nextProps => {
		if (nextProps.open && !this.props.open) {
			this.setState({
				open: true,
				modalClassName: style.modal + " " + style.trelloModal
			});
		}
		if (!nextProps.open && this.props.open) {
			this.setState({ modalClassName: style.modal + ' ' + style.trelloModal + " " + style.trelloFadeOut }, () => {
				setTimeout(() => {
					this.setState({ open: false });
				}, 400);
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

Modal.defaultProps = {
	closeClickingOutside: true
};

export default Modal;
