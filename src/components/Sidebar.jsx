function Sidebar({ items = [], active, setActive }) {
	return (
		<div className="bg-gray-500 w-56 h-screen px-5 py-10 text-white">
			<h1 className="text-2xl font-bold mb-10">Sidebar</h1>
			<ul className="flex flex-col gap-5">
				{items.map((e, i) => {
					if (e.type === "list") {
						return (
							<li key={i} className="text-xl">
								<button onClick={() => setActive(active === i ? null : i)}>{e.title}</button>
								<ul className={`overflow-hidden transition-all duration-300 ${i === active ? "h-16" : "h-0"}`}>
									{e.items.map((e, i) => (
										<div key={i}>{e.title}</div>
									))}
								</ul>
							</li>
						);
					} else {
						return (
							<li key={i} className="text-xl">
								<a href={e.path}>{e.title}</a>
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
}

export default Sidebar;
