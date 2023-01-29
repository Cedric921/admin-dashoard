import React from 'react';
import { Header } from '../components';
import {
	GridComponent,
	ColumnDirective,
	ColumnsDirective,
	Inject,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	Edit,
	PdfExport,
} from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

const Orders = () => {
	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header title='Orders' category='page' />
			<GridComponent
				id='girdcomp'
				dataSource={ordersData}
				allowReordering
				allowPaging
				allowExcelExport
				allowFiltering
				allowPdfExport
				allowSorting
			>
				<ColumnsDirective>
					{ordersGrid.map((item, i) => (
						<ColumnDirective key={i} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						ExcelExport,
						Edit,
						PdfExport,
					]}
				/>
			</GridComponent>
		</div>
	);
};

export default Orders;
