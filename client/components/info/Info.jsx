import React from 'react';
import style from './Info.scss';
import Modal from '../modal/Modal';

export default class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false,
			enableCloseOnBackgroundClick: true,
			contentWidth: 100,
			contentHeight: 100
		};
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div className={style.info}>
				<label>
					Close modal on background clicking:
					<input
						type="checkbox"
						name="enableCloseOnBackgroundClick"
						checked={this.state.enableCloseOnBackgroundClick}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Conent WIDTH (in px):
					<input
						type="text"
						name="contentWidth"
						placeholder="width (px)"
						value={this.state.contentWidth}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Conent HEIGHT (in px):
					<input
						type="text"
						name="contentHeight"
						placeholder="height (px)"
						value={this.state.contentHeight}
						onChange={this.handleChange}
					/>
				</label>
				<input type="submit" onClick={() => this.openModal()} value="OPEN DIALOG" />
				<Modal
					open={this.state.isModalOpen}
					onClose={() => this.closeModal()}
					closeClickingOutside={this.state.enableCloseOnBackgroundClick}
				>
					<div
						className={style.content}
						style={{ width: this.state.contentWidth, height: this.state.contentHeight }}
					>
						{' '}CONTENT BOX <br /> Size: {this.state.contentWidth} px X {this.state.contentHeight} px{' '}
					</div>
					<button onClick={() => this.closeModal()}>Close</button>
				</Modal>
			</div>
		);
	}

	handleChange(e) {
		let value;
		if (e.target.type === 'checkbox') {
			value = e.target.checked;
		} else {
			value = e.target.value;
		}
		this.setState({ [e.target.name]: value });
	}

	openModal() {
		this.setState({ isModalOpen: true });
	}

	closeModal() {
		this.setState({ isModalOpen: false });
	}
}
