import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IMember } from "../interfaces";
import React from "react";

export const PageWelcome = () => {
	const { message, members } = useContext(AppContext);
	return (
		<>
			<p>{message}</p>
			<h2 className="mt-4 text-xl">Members</h2>
			<ul className="list-disc ml-6">
				{members.map((member: IMember) => {
					return (
						<React.Fragment key={member.id}>
							{member.name.length < 30 ? (
								<li>{member.name}</li>
							) : (
								<li>{member.name.substring(0,5)}</li>
							)}
						</React.Fragment>
					);
				})}
			</ul>
		</>
	);
};
