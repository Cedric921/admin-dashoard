import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from './';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({
	title,
	customFunc,
	icon,
	color,
	dotColor,
}: {
	title: string;
	customFunc: () => void;
	icon: React.ReactNode;
	color: string;
	dotColor?: string;
}): JSX.Element => (
	<TooltipComponent title={title} content={title} position='BottomCenter'>
		<button
			type='button'
			onClick={customFunc}
			style={{ color }}
			className='relative text-xl rounded-full p-3 hover:bg-light-gray '
		>
			<span
				style={{ background: dotColor }}
				className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
			/>
			{icon}
		</button>
	</TooltipComponent>
);

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		handleClick,
		screenSize,
		setScreenSize,
	} = useStateContext();

	React.useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [screenSize]);
	return (
		<div className='flex justify-between p-2 md:mx-6 relative'>
			<NavButton
				title={'Menu'}
				color='blue'
				icon={<AiOutlineMenu />}
				dotColor=''
				customFunc={() => setActiveMenu(!activeMenu)}
			/>
			<div className='flex'>
				<NavButton
					title={'Cart'}
					color='blue'
					icon={<FiShoppingCart />}
					dotColor=''
					customFunc={() => handleClick('cart')}
				/>
				<NavButton
					title={'Chat'}
					color='blue'
					icon={<BsChatLeft />}
					dotColor='#03C9D7'
					customFunc={() => handleClick('chat')}
				/>
				<NavButton
					title={'Notifications'}
					color='blue'
					icon={<RiNotification3Line />}
					dotColor='#03C9D7'
					customFunc={() => handleClick('notification')}
				/>
				<TooltipComponent content='Profile' position='BottomCenter'>
					<div
						className='flex items-center gap-2 cursor-pointer p-1 bg-light-gray rounded-lg'
						onClick={() => handleClick('userProfile')}
					>
						<img src={avatar} alt='' className='rounded-full w-8 h-8' />
						<p>
							<span className='text-gray-400 text-14 '>Hi,</span>
							<span className='text-gray-400 font-bold ml-1 text-14'>
								Cedric
							</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14' />
					</div>
				</TooltipComponent>
				{isClicked.cart ? <Cart /> : null}
				{isClicked.chat ? <Chat /> : null}
				{isClicked.notification ? <Notification /> : null}
				{isClicked.userProfile ? <UserProfile /> : null}
			</div>
		</div>
	);
};

export default Navbar;
