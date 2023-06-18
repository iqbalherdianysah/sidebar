import { useState } from "react";
import Sidebar from "./components/sidebar";

function App() {
	const [active, setActive] = useState(null);

	const sidebarItems = [
		{
			title: "home",
			type: "link",
			path: "/",
		},
		{
			title: "information",
			type: "list",
			items: [
				{
					title: "iqbal",
					type: "link",
					path: "/iqbal",
				},
				{
					title: "herdiansyah",
					type: "link",
					path: "/herdiansyah",
				},
			],
		},
		{
			title: "about",
			type: "list",
			items: [
				{
					title: "iqbal",
					type: "link",
					path: "/iqbal",
				},
				{
					title: "herdiansyah",
					type: "link",
					path: "/herdiansyah",
				},
			],
		},
		{
			title: "lala",
			type: "list",
			items: [
				{
					title: "iqbal",
					type: "link",
					path: "/iqbal",
				},
				{
					title: "herdiansyah",
					type: "link",
					path: "/herdiansyah",
				},
			],
		},
	];

	return (
		<>
			<Sidebar items={sidebarItems} active={active} setActive={setActive} />
		</>
	);
}

export default App;
