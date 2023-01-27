import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import {
	earningData,
	SparklineAreaData,
	ecomPieChartData,
} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
	return (
		<div className='mt-12'>
			<div className='flex flex-wrap lg:flex-nowrap justify-center'>
				<div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center shadow-lg'>
					<div className='flex justify-between items-center'>
						<div>
							<p className='font-bold text-gray-400'>Earnings</p>
							<p className='text-2xl'>$1,890,309.00</p>
						</div>
					</div>
					<div className='mt-6'>
						<Button
							color='white'
							bgColor='blue'
							text='Download'
							borderRadius='10px'
						/>
					</div>
				</div>
				<div className='flex mx-3 flex-wrap justify-center gap-1 items-center'>
					{earningData.map((item, i) => (
						<div
							key={i}
							className='bg-white dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl shadow-md'
						>
							<button
								type='button'
								style={{ color: item.iconColor, backgroundColor: item.iconBg }}
								className='p-4 text-2xl rounded-full hover:drop-shadow-xl opacity-0.9'
							>
								{item.icon}
							</button>
							<p className='mt-3'>
								<span className='text-lg font-semibold'>{item.amount}</span>
								<span className={`text-sm text-${item.pcColor} mx-2`}>
									{item.percentage}
								</span>
							</p>
							<p className='text-sm text-gray-400 mt-1'>{item.title}</p>
						</div>
					))}
				</div>
			</div>
			<div className='flex gap-10 flex-wrap justify-center'>
				<div className='bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 shadow-sm'>
					<div className='flex justify-between'>
						<p className='font-semibold'>Review updates</p>
						<div className='flex items-center gap-4'>
							<p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Expense</span>
							</p>
							<p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Expense</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ecommerce;
