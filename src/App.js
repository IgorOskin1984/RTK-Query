import { useState } from 'react';
import { useGetGoodsQuery } from './redux'

function App() {
	const [count, setCount] = useState('')
	const { data = [], isLoading } = useGetGoodsQuery(count);
	if (isLoading) return <h1>Loading...</h1>
	return (
		<div>
			<div>
				<select value={count} onChange={(e) => setCount(e.target.value)}>
					<option value={''}>All</option>
					<option value={'1'}>1</option>
					<option value={'2'}>2</option>
					<option value={'3'}>3</option>
				</select>
			</div>
			<p>Data from server</p>
			<ul>
				{data.map(item => (
					<li key={item.id}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
