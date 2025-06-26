import React, { useContext } from 'react';
import '../../APP.css'
import { Mycontext } from '../../context/Context';
import { useNavigate, useParams } from 'react-router-dom';





const Home = () => {
    
    const {daata,mostakhdim} = useContext(Mycontext)
    const nav = useNavigate()
   
    
    return (
        <div className='min-h-screen bg-gray-800 py-8'>
          
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold text-white mb-2'>Anime Collection</h1>
                <p className='text-white/50'>Discover amazing anime series and movies</p>
                <div className='w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full'></div>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-6 lg:px-20'>
                {
                    daata.map((ele, index) => (
                        <div key={index} onClick={()=>nav(`/${ele.mal_id}`)}  className='group bg-white/95  rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden border border-blue-400'>
                       
                            <div className='relative overflow-hidden'>
                                <img  src={ele.images.jpg.image_url} alt={ele.titles[0].title} className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'/>
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                
                            
                                <div className='absolute top-3 right-3'>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm bg-green-500/80 `}>
                                        {ele.status}
                                    </span>
                                </div>

                        
                                <div className='absolute top-3 left-3'>
                                    <span className='px-3 py-1 bg-red-500/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm'>
                                        {ele.type}
                                    </span>
                                </div>
                            </div>

                     
                            <div className='p-4'>
                                <h3 className='font-bold text-gray-800 text-center mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors'>
                                    {ele.titles[0].title}
                                </h3>
                                
                 
                                <div className='flex justify-between items-center mt-3 pt-3 border-t border-gray-100'>
                                    <div className='flex items-center space-x-1'>
                                        <svg className='w-4 h-4 text-gray-500' fill='currentColor' viewBox='0 0 20 20'>
                                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z' clipRule='evenodd'/>
                                        </svg>
                                        <span className='text-sm text-gray-600'>Episodes</span>
                                    </div>
                                    <span className='font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg text-sm'>
                                        {ele.episodes || 'N/A'}
                                    </span>
                                </div>

                                {/* <div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>

                                    
                                    <button onClick={()=>nav(`/${ele.mal_id}`)}   className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors'>
                                        View Details
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ))
                }
            </div>

           
        </div>
    );
};

export default Home;
