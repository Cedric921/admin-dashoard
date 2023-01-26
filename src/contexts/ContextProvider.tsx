import React from 'react';

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const StateContext = React.createContext({
	activeMenu: true,
	isClicked: initialState,
	handleClick: function (clicked: string) {},
	setActiveMenu: function (activeMenu: boolean) {
		!activeMenu;
	},
	screenSize: null,
	setScreenSize: function (activeMenu: any) {
		!activeMenu;
	},
});

export const ContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [activeMenu, setActiveMenu] = React.useState(true);
	const [isClicked, setIsClicked] = React.useState(initialState);
	const handleClick = (clicked: string) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};
	const [screenSize, setScreenSize] = React.useState(null);
	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				handleClick,
				screenSize,
				setScreenSize,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => React.useContext(StateContext);
