import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitTrackedForm } from './tracked.form.action';
//import styles from '.TrackedForm.scss';

class TrackedForm extends React.Component {
	render() {
		return (
			<div>
				<label> Tax </label>
				<input type="number" name="tax" ref={tax => (this.tax = tax)} defaultValue={this.props.tax} />
				<label> Fee </label>
				<input type="number" name="fee" ref={fee => (this.fee = fee)} defaultValue={this.props.fee} />
				<input
					type="button"
					value="Next"
					onClick={() => this.props.submitTrackedForm(this.tax.value, this.fee.value)}
				/>
			</div>
		);
	}
}

TrackedForm.propTypes = {
	tax: PropTypes.number.isRequired,
	fee: PropTypes.number.isRequired,
	submitTrackedForm: PropTypes.func.isRequired
};

const mapStateToProps = ({ inputs }) => inputs;
const mapDispatchToProps = { submitTrackedForm };

export default connect(mapStateToProps, mapDispatchToProps)(TrackedForm);
