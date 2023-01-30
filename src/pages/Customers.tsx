import React from 'react';
import {
	GridComponent,
	ColumnDirective,
	ColumnsDirective,
	Page,
	Selection,
	Inject,
	Edit,
	Toolbar,
	Sort,
	Filter,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header title='Employee' category='page' />
			<GridComponent
				dataSource={customersData}
				allowReordering
				allowPaging
				allowSorting
				toolbar={['Delete', 'Search']}
				editSettings={{
					allowEditOnDblClick: true,
					allowDeleting: true,
					allowEditing: true,
				}}
				width='auto'
			>
				<ColumnsDirective>
					{customersGrid.map((item, i) => (
						<ColumnDirective key={i} {...item} />
					))}
				</ColumnsDirective>
				<Inject services={[Sort, Filter, Selection, Page, Toolbar, Edit]} />
			</GridComponent>
		</div>
	);
};

export default Customers;
