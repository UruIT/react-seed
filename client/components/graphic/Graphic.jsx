import React from 'react';
import style from './Graphic.scss';
import Chart from '../chart/Chart';

export default class Graphic extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedYear: 2019,
			data: {
				labels: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029],
				datasets: [
					{
						label: 'Starting now',
						data: [
							0,
							65500,
							95000,
							120000,
							130000,
							175000,
							200000,
							230000,
							260000,
							270000,
							300000,
							320000,
							350000
						],
						fill: false,
						borderColor: '#49b9ab',
						backgroundColor: '#49b9ab',
						radius: 3,
						hoverRadius: 6
					},
					{
						label: 'Starting in five years',
						data: [null, null, null, null, 0, 50000, 60500, 70000, 75000, 90000, 120000, 145000, 150000],
						fill: false,
						borderColor: '#FA5858',
						backgroundColor: '#FA5858',
						borderDash: [5, 5],
						radius: 3,
						hoverRadius: 6
					}
				]
			}
		};
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<div className={style.graphic}>
				<div className={style.chartContainer}>
					<Chart data={this.state.data} onClick={this.handleClick} />
				</div>
				<div className={style.infoContainer}>
					<div className={style.title}>
						{this.state.selectedYear}
					</div>
					{'This is the information related to year ' + this.state.selectedYear}
				</div>
			</div>
		);
	}

	componentDidMount() {
		fetch('/api/icon')
			.then(res => {
				res.text().then(text => {
					var image = new Image();
					image.height = 40;
					image.width = 40;
					image.src = text;
					let data = this.state.data;
					let dataset = data.datasets[0];
					Object.assign(dataset, {
						pointStyle: ['', '', image, '', '', image, '', '', '', image, '', '', image]
					});
					this.setState({ data });
				});
			})
			.catch(error => console.error(error));
	}

	handleClick(event) {
		let index = event.elements[0]._index;
		let selectedYear = this.state.data.labels[index];
		this.setState({ selectedYear });
	}
}
