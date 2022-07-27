import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center grid gap-y-6 pt-5'>
      <h6 className='text-[22px] font-semibold'>
        Sorry, this page isn't available.
        <p>
          The link you followed may be broken, or the page may have been removed. <Link className="text-link" to="/">Go back to Insta-clone!</Link>
        </p>
      </h6>
    </div>
  )
}

export default NotFound