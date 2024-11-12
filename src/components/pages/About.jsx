import React from 'react';
import a from "../imgs/3.jpg";

const About = () => {
  return (
    <div>
    <div className='max-w-[1240px] mx-auto  md:grid grid-cols-2'>
      <div>
        <div className='p-8' data-aos="fade-right" >
          <img src={a} className=' w-[400px] rounded-lg pt-16 ' />
        </div>
      </div>
      <div className='border-black '>
        <div className='p-9'>
          <h1 className='text-5xl'>Recipes <span className='text-red-600'> Food </span></h1>
          <hr class=" w-1/5 mx-auto" />
          <p className='text-2xl pt-2 text-[#020202e3]'>Eating Food</p>
          <p className='pt-2 text-[#020202bc]'>Cook spaghetti until al dente,
             reserving a cup of pasta water. In a bowl, mix egg yolks, grated Parmesan, 
             and black pepper. In a pan, cook pancetta until crispy, then remove from heat.
              Quickly toss hot pasta in the pan with pancetta, gradually adding egg mixture 
              while stirring to create a creamy sauce. Adjust consistency with reserved
             pasta water as needed. Serve with extra Parmesan and pepper.
            understanding of databases, APIs, and version control systems. Their
            versatility enables them to manage projects from initial concept to
            deployment and ongoing maintenance.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About