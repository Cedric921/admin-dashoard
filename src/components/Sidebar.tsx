import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
	const { activeMenu, setActiveMenu } = useStateContext();

	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5  rounded-lg text-blue-600 text-md m-2';
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5  rounded-lg  text-md text-gray-700 dark:text-gary-200 hover:dark:text-black hover:bg-light-gray m-2';
	return (
		<div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
			{activeMenu ? (
				<>
					<div className='flex justify-between items-center ml-3'>
						<Link
							to={'/'}
							onClick={() => {
								setActiveMenu(!activeMenu);
							}}
							className='items-center mt-4 flex text-xl font-bold gap-2 tracking-tight dark:text-white text-slate-900'
						>
							<SiShopware className='' /> <span>Shoppa </span>
						</Link>
						<TooltipComponent content='menu' position='BottomCenter'>
							<button
								className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
								type='button'
								onClick={() => {
									setActiveMenu(!activeMenu);
								}}
							>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div className='mt-10'>
						{links.map((link, index) => (
							<div key={index} className='text-gray-400 m-3 mt-4  uppercase'>
								<p>{link.title}</p>
								{link.links.map((el, i) => (
									<NavLink
										to={`/${el.name}`}
										key={i}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}
									>
										{el.icon}
										<span className='capitalize'>{el.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			) : null}
		</div>
	);
};

export default Sidebar;
