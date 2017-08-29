import React from 'react';
import style from './Chart.scss';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const options = onClick => ({
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
		mode: 'point',
		onHover: function(evt, points) {
			if (evt.toElement.attributes.style) {
				if (points.length === 0) {
					evt.toElement.attributes.style.nodeValue = evt.toElement.attributes.style.nodeValue.replace(
						'cursor: pointer;',
						''
					);
					return;
				}
				var res = evt.toElement.attributes.style.nodeValue.match(/cursor: pointer;/);
				if (res == null) {
					evt.toElement.attributes.style.nodeValue += 'cursor: pointer;';
				}
			}
		}
	},
	scales: {
		yAxes: [
			{
				ticks: {
					callback: function(value) {
						return 'U$S ' + value.toLocaleString();
					}
				}
			}
		]
	},
	onClick: (event, elements) => {
		if (elements.length > 0) {
			onClick({
				elements
			});
		}
	}
});

const Chart = ({ data, onClick }) =>
	<div className={style.chart}>
		<Line data={data} options={options(onClick)} />
	</div>;

Chart.propTypes = {
	onClick: PropTypes.func,
	data: PropTypes.object.isRequired
};

Chart.defaultProps = {
	onClick: () => {}
};

export default Chart;
