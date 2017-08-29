import React from 'react';
import style from './Graphic.scss';
import Chart from '../chart/Chart';
import data from './graphic-data';

export default class Graphic extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			selectedYear: 2019,
			data
		};
	}

	render() {
		const { data, selectedYear } = this.state;

		return (
			<div className={style.graphic}>
				<div className={style.chartContainer}>
					<Chart data={data} onClick={this.handleClick} />
				</div>
				<div className={style.infoContainer}>
					<div className={style.title}>
						{selectedYear}
					</div>
					{'This is the information related to year ' + selectedYear}
				</div>
			</div>
		);
	}

	componentDidMount() {
		fetch('/api/icon')
			.then(res => res.text())
			.then(text => {
				const image = new Image(40, 40);
				image.src = text;
				const data = this.state.data;
				let dataset = data.datasets[0];
				Object.assign(dataset, {
					pointStyle: ['', '', image, '', '', image, '', '', '', image, '', '', image]
				});
				this.setState({ data });
			})
			.catch(console.error);
	}

	handleClick(event) {
		const index = event.elements[0]._index;
		const selectedYear = this.state.data.labels[index];
		this.setState({ selectedYear });
	}
}
