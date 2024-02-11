import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IMember } from "../interfaces";

export const PageWelcome = () => {
	const { message, members } = useContext(AppContext);
	return (
		<>
			<p>{message}</p>
			<h2 className="mt-4 text-xl">Members</h2>
			<ul className="list-disc ml-6">
				{members.map((member: IMember) => {
					return <li key={member.id}>{member.name}</li>;
				})}
			</ul>
		</>
	);
};
