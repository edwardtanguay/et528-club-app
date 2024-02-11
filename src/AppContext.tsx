import { createContext, useEffect, useState } from "react";
import { IMember } from "./interfaces";
import axios from "axios";

interface IAppContext {
	message: string;
	members: IMember[];
}

interface IAppProvider {
	children: React.ReactNode;
}

const backendUrl = "http://localhost:3311";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const message = "Welcome to this site.";
	const [members, setMembers] = useState<IMember[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/members`);
			const _members = response.data;
			setMembers(_members);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				message,
				members,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
