import { useGetGoodsQuery } from './redux'

function App() {
	const { data, isLoading } = useGetGoodsQuery();
	if (isLoading) return <h1>Loading...</h1>
	return (
		<div>
			<p>Data from server</p>
			<ul>
				{data.map(item => {
					return <li key={item.id}>
						{item.name}
					</li>
				})}
			</ul>
		</div>
	);
}

export default App;
