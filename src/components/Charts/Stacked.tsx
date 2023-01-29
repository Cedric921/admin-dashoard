import React from 'react';
import {
	ChartComponent,
	SeriesDirective,
	SeriesCollectionDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
} from '@syncfusion/ej2-react-charts';

import {
	stackedChartData,
	stackedCustomSeries,
	stackedPrimaryXAxis,
	stackedPrimaryYAxis,
} from '../../data/dummy';

const Stacked = ({ width, height }: { width: string; height: string }) => {
	return (
		<ChartComponent
			width={width}
			height={height}
			id='stack chart'
			// primaryXAxis={stackedPrimaryXAxis}
			// primaryYAxis={stackedPrimaryYAxis}
			chartArea={{ border: { width: 1 } }}
			tooltip={{ enable: true }}
			legendSettings={{ background: 'white' }}
		>
			<Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
			<SeriesCollectionDirective>
				{stackedCustomSeries.map((item, i) => (
					<SeriesDirective key={i} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default Stacked;
