import React from 'react';
import style from './Modal.scss';
import PropTypes from 'prop-types';

class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalClassName: props.limitHeight ? style.modal : style.modal + ' ' + style.trelloModal,
			backdropClassName: props.limitHeight ? style.backdrop : style.backdrop + ' ' + style.trelloBackdrop,
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
				<div className={this.state.backdropClassName} onClick={this.handleOutterClick}>
					<div className={this.state.modalClassName} onClick={e => e.stopPropagation()}>
						<div className={style.closeIcon} onClick={this.props.onClose} />
						{this.props.children}
					</div>
				</div>
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
				modalClassName: this.props.limitHeight ? style.modal : style.modal + ' ' + style.trelloModal,
				backdropClassName: this.props.limitHeight ? style.backdrop : style.backdrop + ' ' + style.trelloBackdrop
			});
		}
		if (!nextProps.open && this.props.open) {
			this.setState(
				{
					modalClassName: this.props.limitHeight
						? style.modal + ' ' + style.fadeOut
						: style.modal + ' ' + style.trelloModal + ' ' + style.trelloFadeOut,
					backdropClassName: this.props.limitHeight
						? style.backdrop
						: style.backdrop + ' ' + style.trelloBackdrop
				},
				() => {
					setTimeout(() => {
						this.setState({ open: false });
					}, 400);
				}
			);
		}
	};
}

Modal.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node,
	closeClickingOutside: PropTypes.bool,
	limitHeight: PropTypes.bool
};

Modal.defaultProps = {
	closeClickingOutside: true,
	limitHeight: true
};

export default Modal;
