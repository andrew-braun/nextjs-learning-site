import Link from "next/link"

function ClientsPage() {
	const clients = [
		{
			id: "max-1",
			name: "Maximilian",
		},
		{
			id: "man-1",
			name: "Manuel",
		},
		{
			id: "and-1",
			name: "Andrew",
		},
	]
	return (
		<div>
			<h1>Clients</h1>
			<ul>
				{clients.map((client) => {
					return (
						<li key={client.id}>
							<Link
								href={{
									pathname: "/clients/[id]",
									query: { id: client.id },
								}}
							>
								{client.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default ClientsPage
