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
				{members.map((member:IMember) => {
					return (
						<>
							{member.id < 10 && (
<li key={member.id}>{member.name}</li>
							):(
<li key={member.id.substring(0,3)}>{member.name}</li>
						)}
						</>
					) 
				})}
			</ul>
		</>
	);
};
 