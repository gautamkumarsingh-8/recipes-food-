import React from 'react';
import data from "../card/Ca.json";

const Recipes = () => {
  return (
    <div>
    <div className='flex justify-center text-4xl font-bold '>
        <h1 className='text-red-700'>FOOD <span className='text-green-600'> RECIPE </span> </h1>
    </div>
    <div className='max-w-[1240px] justify-items-center   lg:grid grid-cols-3  pt-5 mx-auto md:pt-0'>
        {
            data.map((data) => {
                return (

                    <div className='py-2 ' key={data.id}>
                        < div class="max-w-sm w-[300px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <img class="rounded-t-sm" src={data.img} alt="" />

                            <div class="p-5">
                                <button  class="ml-20 px-3 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {data.text}
                                </button>
                            </div>
                        </div>
                    </div>


                )
            })
        }
    </div >
</div>
  )
}

export default Recipes