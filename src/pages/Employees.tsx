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
	Edit,
	Search,
	Toolbar,
} from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';

const Employee = () => {
	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header title='Employee' category='page' />
			<GridComponent
				dataSource={employeesData}
				allowReordering
				allowPaging
				allowSorting
				toolbar={['Search']}
				width='auto'
			>
				<ColumnsDirective>
					{employeesGrid.map((item, i) => (
						<ColumnDirective key={i} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[Resize, Sort, ContextMenu, Search, Page, Toolbar, Edit]}
				/>
			</GridComponent>
		</div>
	);
};

export default Employee;
