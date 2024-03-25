import WorkItem from "./WorkItem";

export default function Works() {
	const workHistory = [
		{
			title: "iOS Engineer",
			company: "Kozen, Inc.",
			employmentType: "Contract, part-time",
			industry: "Software Development",
			duration: "1 year",
			description: "",
		},
		{
			title: "Performance Pro",
			company: "enter company here",
			employmentType: "Full time",
			industry: "automotive, IT",
			duration: "currently emploted here",
			// TODO: make sure to enter the actual information
			description: "this is a random description",
		},

		{
			title: "Founder",
			company: "Daedalus Digital Solutions, LLC",
			employmentType: "Self-employed, Freelance",
			industry: "Software Development",
			duration: "1 year",
			// TODO: make sure to enter the actual information
			description: "enter description here",
		},
		{
			title: "Student Computer Consultant",
			company: "Kalamazoo College",
			industry: "IT",
			duration: "3 years",
			// TODO: make sure to enter the actual information
			description: "enter description here",
		},
	];
	return (
		<div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<h1 className="text-4xl font-bold text-center text-[]">Work History</h1>
			{workHistory.map((item, idx) => (
				<WorkItem
					key={idx}
					title={item.title}
					company={item.company}
					industry={item.industry}
					duration={item.duration}
					description={item.description}
				/>
			))}
		</div>
	);
}
