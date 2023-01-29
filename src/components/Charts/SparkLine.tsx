import React from 'react';
import {
	Sparkline,
	SparklineComponent,
	SparklineTooltip,
	Inject,
} from '@syncfusion/ej2-react-charts';

const SparkLine = ({
	id,
	height,
	width,
	color = 'blue',
	data,
	type,
	currentColor,
}: {
	id: string;
	height: string;
	width: string;
	color: string;
	data: any;
	type: 'Line' | 'Column' | 'WinLoss' | 'Pie' | 'Area' | undefined;
	currentColor: string;
}) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType='Numeric'
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName='x'
			yName='y'
			type={type}
			tooltipSettings={{
				visible: true,
				format: '${x}: data ${y}',
				trackLineSettings: {
					visible: true,
				},
			}}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	);
};

export default SparkLine;
