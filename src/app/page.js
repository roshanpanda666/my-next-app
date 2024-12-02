import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
        <div className='flex justify-center items-center mt-10'> 
          <Link href='/addproduct'>add products</Link>
        </div>
        <div className='flex justify-center items-center mt-5'> 
          <Link href='/productlist'>product list</Link>
        </div>
    </>
  )
}

export default page
