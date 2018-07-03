import React from 'react';
import SortableList from './sortable-list';
import styles from './sortable.scss';

class Sortable extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleChangeChecked = this.handleChangeChecked.bind(this, 'lockAxis');
		this.handleChangeNumber = this.handleChangeNumber.bind(this);

		this.state = {
			lockAxis: '',
			transitionDuration: 400,
			pressDelay: 0,
			distance: 0
		};
	}

	handleChangeChecked(param, e) {
		const value = e.target.checked ? 'y' : '';
		this.handleChange(param, value);
	}
	handleChangeNumber(e) {
		const value = Number.parseInt(e.target.value) || 0;
		this.handleChange(e.target.name, value);
	}

	handleChange(param, value) {
		this.setState({
			[param]: value
		});
	}

	render() {
		const { lockAxis, transitionDuration, pressDelay, distance } = this.state;
		return (
			<div className={styles.sortable}>
				<label>
					<span>Lock Axis</span>
					<input
						type="checkbox"
						name="lockAxis"
						checked={lockAxis}
						onChange={this.handleChangeChecked}
					/>
				</label>
				<label>
					<span>Transition duration</span>
					<input
						type="Number"
						name="transitionDuration"
						onChange={this.handleChangeNumber}
						value={transitionDuration}
					/>
				</label>
				<label>
					<span>Press Delay</span>
					<input
						type="Number"
						name="pressDelay"
						onChange={this.handleChangeNumber}
						value={pressDelay}
					/>
				</label>
				<label>
					<span>Distance</span>
					<input
						type="Number"
						name="distance"
						onChange={this.handleChangeNumber}
						value={distance}
					/>
				</label>
				<div>
					<SortableList
						lockAxis={lockAxis}
						transitionDuration={transitionDuration}
						pressDelay={pressDelay}
						distance={distance}
					/>
				</div>
			</div>
		);
	}
}

export default Sortable;
