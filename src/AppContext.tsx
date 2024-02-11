import { createContext, useEffect, useState } from "react";
import { IMember, MemberSchema } from "./interfaces";
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
			const _members = [];
			for (const _member of response.data) {
				const parseResult = MemberSchema.safeParse(_member);
				if (parseResult.success) {
					_members.push(_member);
				} else {
					console.log(`LOG ENTRY: bad member object (${JSON.stringify(_member)})`);
				}
			}
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
