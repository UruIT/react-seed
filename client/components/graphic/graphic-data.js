const data = {
	labels: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029],
	datasets: [
		{
			label: 'Starting now',
			data: [0, 65500, 95000, 120000, 130000, 175000, 200000, 230000, 260000, 270000, 300000, 320000, 350000],
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
};

export default data;
