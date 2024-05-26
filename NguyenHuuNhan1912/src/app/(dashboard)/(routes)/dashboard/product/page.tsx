import React from 'react'
import Link from 'next/link';

const Product = () => {
  return (
    <div>
        <h1>Product</h1>
        <ul>
            <li>
                 <Link href="/">Product 1</Link>
            </li>
            <li>
                 <Link href="/">Product 2</Link>
            </li>
            <li>
                 <Link href="/">Product 3</Link>
            </li>
        </ul>
    </div>
  )
}

export default Product