import React from 'react';
import style from './Chart.scss';
import PropTypes from 'prop-types';
const Line = require('react-chartjs-2').Line;

export default class Chart extends React.Component {
	render() {
		const options = {
			responsive: true,
			title: {
				display: true,
				text: 'POC Chart.js using react-chartjs-2'
			},
			tooltips: {
				// mode: 'point' would fill the tooltip with the information of the hovered point in that position
				mode: 'x',
				position: 'nearest',
				backgroundColor: '#f0efef',
				borderWidth: 2,
				borderColor: '#848484',
				titleFontSize: 24,
				titleFontStyle: 'bold',
				titleFontColor: '#b9b0b0',
				titleSpacing: 4,
				bodyFontSize: 16,
				bodyFontColor: '#848484',
				bodySpacing: 3,
				xPadding: 15,
				yPadding: 10,
				caretPadding: 10,
				caretSize: 10,
				callbacks: {
					label: function(tooltipItems) {
						return 'U$S ' + tooltipItems.yLabel.toLocaleString();
					}
				}
			},
			hover: {
				mode: 'point'
			},
			scales: {
				yAxes: [
					{
						ticks: {
							// Include a dollar sign in the ticks and format value
							callback: function(value) {
								return 'U$S ' + value.toLocaleString();
							}
						}
					}
				]
			},
			onClick: (event, elements) => {
				if (elements.length > 0) {
					this.props.onClick({
						elements
					});
				}
			}
		};
		return (
			<div className={style.chart}>
				<Line data={this.props.data} options={options} />
			</div>
		);
	}
}

Chart.propTypes = {
	onClick: PropTypes.func,
	data: PropTypes.object.isRequired
};

Chart.defaultProps = {
	onClick: () => {}
};
