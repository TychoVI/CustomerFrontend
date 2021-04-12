import React from 'react'

const Product =()=>{
	var products = [
		{name: 'Sushi'},
		{name: 'Chicken Curry'},
		{name: 'Spaghetti Carbonara'}
	]
	return(
		<ul>
			{products.map(product => <li>{product.name}</li>
				)}
		</ul>
	)
}

export default Product;