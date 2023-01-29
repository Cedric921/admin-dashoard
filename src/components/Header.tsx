import React from 'react';

const Header = ({ title, category }: { title: string; category: string }) => {
	return (
		<div className='mb-10'>
			<p className='text-gray-400'>{category}</p>
			<h4 className='text-3xl font-extrabold tracking-tight text-slate-900'>
				{title}
			</h4>
		</div>
	);
};

export default Header;
