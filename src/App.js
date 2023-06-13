import { useState } from 'react';
import { useAddProductMutation, useGetGoodsQuery, useDeleteProductMutation } from './redux'

function App() {
	const [count, setCount] = useState('')
	const [newProduct, setNewProduct] = useState('')
	const { data = [], isLoading } = useGetGoodsQuery(count);
	const [addProduct, { isError }] = useAddProductMutation();
	const [deleteProduct] = useDeleteProductMutation();

	const handleAddProduct = async () => {
		if (newProduct) {
			await addProduct({ name: newProduct }).unwrap()
			setNewProduct('')
		}
	}

	const handleDeleteProduct = async (id) => {
		await deleteProduct(id).unwrap()

	}

	if (isLoading) return <h1>Loading...</h1>

	return (
		<div>
			<div>
				<input value={newProduct} onChange={e => setNewProduct(e.target.value)} type='text' />
				<button onClick={handleAddProduct}>Add product</button>
			</div>
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
					<div style={{ display: 'flex', gap: '10px' }} key={Math.floor(Math.random() * 1000)}>
						<li key={item.id}>
							{item.name}
						</li>
						<button key={Math.floor(Math.random() * 1000)} onClick={() => handleDeleteProduct(item.id)}>x</button>
					</div>
				))}
			</ul>
		</div>
	);
}

export default App;
