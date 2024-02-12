import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Member } from "../interfaces";

export const PageWelcome = () => {
	const { message, members, errorMessage } = useContext(AppContext);
	return (
		<>
			<p>{message}</p>
			{errorMessage && <p className="text-red-600 bg-yellow-300 w-fit mt-3 p-2 rounded">{errorMessage}</p>}
			<h2 className="mt-4 text-xl">Members</h2>
			<ul className="list-disc ml-6">
				{members.map((member: Member) => {
					return (
						<li key={member.id}>
							ID #{member.id.toUpperCase()} - {member.name} (age {member.age})
						</li>
					);
				})}
			</ul>
		</>
	);
};
