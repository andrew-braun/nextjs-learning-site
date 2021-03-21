import { useRouter } from "next/router"

function ClientProjectsPage() {
	const router = useRouter()

	function handleLoadProject() {
		router.push({
			pathname: "/clients/[id]/[clientprojectid]",
			query: { id: "max", clientprojectid: "project1" },
		})
	}

	return (
		<div>
			<div>
				<h1>A Single Client's Projects</h1>
				<button onClick={handleLoadProject}>Load Project 1</button>
			</div>
		</div>
	)
}

export default ClientProjectsPage
