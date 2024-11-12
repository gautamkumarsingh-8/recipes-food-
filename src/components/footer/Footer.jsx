import React from 'react';
import logo from "../imgs/recipes.png";

const Footer = () => {
  return (
    <div className='py-10'>
      <div className='max-w-[1240px] mx-auto ml-8 md:ml-24 h-[200px] col-span-1 md:grid grid-cols-4'>
        <div >
          <div className='p-4 ml-7'>
            <img src={logo} className='w-[250px]' />
          </div>
          <div className='text-lg text-center'>
            <p>  Complete your style with awesome <br />
              clothes from us. </p><br />
            <p className='text-red-600'>Credit by Gautam Singh.</p>
          </div>
        </div>
        <div>
          <div className='text-lg text-center'>
            <h1 className='py-3 text-2xl font-medium '> Company</h1>
            <p className='py-1'>About</p>

            <p className='py-1'> Contact us</p>

            <p className='py-1'>Support</p>

            <p className='py-1'>Careers</p>
          </div>
        </div>
        <div >
        <div className='text-lg text-center'>
            <h1 className='py-3 text-2xl font-medium '> Quick Link</h1>
            <p className='py-1'>Share Location</p>

            <p className='py-1'> Orders Tracking</p>

            <p className='py-1'>Size Guide</p>

            <p className='py-1'>FAQs</p>
          </div>
        </div>
        <div >
        <div className='text-lg text-center'>
            <h1 className='py-3 text-2xl font-medium '> Legal</h1>
            <p className='py-1'>Careers</p>

            <p className='py-1'> Privacy Policy</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer