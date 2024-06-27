import React from 'react'
import Sitecard from '../Cards/Sitecard'
import Site_select from '../selections/site-select'

function Site() {
     const sites = [
          {
               name:'Gaama.top',
               domain:'gaama.top',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://img.freepik.com/free-vector/landing-page-template-with-web-design-concept_23-2147867627.jpg?t=st=1719331638~exp=1719335238~hmac=6f264662dbe98f9a29d3c3c2ce0a44542847e1cba8d15854b0a2194210e6ca85&w=740',
               url:'https://www.gaama.top/',
               platform:'Netlify',
               platformurl:''
          },
          {
               name:'Ledtvexpert.in',
               domain:'ledtvexpert.in',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://cdn.dribbble.com/users/6047818/screenshots/17678900/media/c102bc8e88ea57a5945c2b7b96eb952a.png?resize=768x576&vertical=center',
               url:'https://www.ledtvexpert.in/',
               platform:'Netlify',
               platformurl:''
          },
          {
               name:'Gaama.top',
               domain:'gaama.top',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://cdn.dribbble.com/userupload/14535006/file/original-8ab1cc408feffbf310a53e9f8396b57a.jpg?resize=1022x767&vertical=center',
               url:'https://www.gaama.top/',
               platform:'Netlify',
               platformurl:''
          },
          {
               name:'Gaama.top',
               domain:'gaama.top',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://cdn.dribbble.com/userupload/5381347/file/original-4bb794f7a722d00caa85f6282ca88e62.png?resize=1200x900',
               url:'https://www.gaama.top/',
               platform:'Netlify',
               platformurl:''
          },
          {
               name:'Gaama.top',
               domain:'gaama.top',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://cdn.dribbble.com/userupload/12396630/file/original-134e12dfd9c3c1702baa4ed2848e26b9.gif',
               url:'https://www.gaama.top/',
               platform:'Netlify',
               platformurl:''
          },
          {
               name:'Gaama.top',
               domain:'gaama.top',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://cdn.dribbble.com/users/8953545/screenshots/18563309/media/56643ab68608be6d418c535bbb833f55.png?resize=768x576&vertical=center',
               url:'https://www.gaama.top/',
               platform:'Netlify',
               platformurl:''
          },
          {
               name:'Gaama.top',
               domain:'gaama.top',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://cdn.dribbble.com/userupload/13820606/file/original-4f2f01468766d4e0962d2f0a08120af7.png?resize=1022x767&vertical=center',
               url:'https://www.gaama.top/',
               platform:'Netlify',
               platformurl:''
          },
          {
               name:'Gaama.top',
               domain:'gaama.top',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://cdn.dribbble.com/userupload/13820604/file/original-1d8294745f78595e58ed565ba7746e12.png?resize=1022x559&vertical=center',
               url:'https://www.gaama.top/',
               platform:'Netlify',
               platformurl:''
          },
          {
               name:'Gaama.top',
               domain:'gaama.top',
               owned:'gaama.top',
               ownedurl:'',
               image:'https://cdn.dribbble.com/userupload/3276275/file/original-c4dabc2e801a04fbddb408f5bf048c0f.png?resize=1200x900',
               url:'https://www.gaama.top/',
               platform:'Netlify',
               platformurl:''
          },
     ]
  return (
     <div className='w-full min-h-[100vh] h-auto bg-green-400/0  px-5'>
     <div className='px-3 w-full h-full flex sm:flex-row flex-col gap-7 sm:gap-0 sm:items-center border-b border-clr1 justify-between py-5'>
          <div className='flex flex-col items-start justify-center'>
               <input placeholder='Sites' type="search" name="search" id="search-site" className='rounded-lg h-8 w-full sm:w-72 outline-blue-400 bg-zinc-800 text-zinc-100 px-3 text-sm font-normal border border-clr2' />
               <ul className='flex sm:flex-row flex-wrap items-start sm:items-center justify-center gap-3 gap-y-1 sm:gap-5 mt-3'>
                    <li className='font-light text-sm'>owned by <a href="https://www.gaama.top/" target='_blank' className='font-medium'>Gaama.top</a></li>
                    <li className='font-light text-sm'>Created by <a href="https://www.github.com/Abhay7111/" target='_blank' className='font-medium'>Abhay7111</a></li>
                    <li className='font-light text-sm'>Access <a href="https://www.github.com/Abhay7111/" target='_blank' className='font-medium'>Any</a></li>
               </ul>
                    <a className='py-2 w-full sm:w-fit text-center px-4 mt-3 sm:mt-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all border border-clr1 cursor-pointer'>Edit filters</a>
          </div>
          <div className='flex flex-col items-start sm:items-end justify-center'>
               <div className='text-center w-full px-5 sm:w-32 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-medium hover:bg-blue-500 transition-all cursor-pointer'> Contact me </div>
               <ul className='flex sm:flex-row flex-col sm:w-fit w-full items-end sm:items-center justify-center gap-3 sm:gap-5 mt-3'>
                    <li className='py-1.5 px-3 w-full sm:w-fit'>
                         <form action="/site">
                              <label htmlFor="site-select" className='text-sm font-medium mr-1'>Select sites :</label>
                                   <select name="name-site-select" id="id-site-select" className='px-2 pr-1 w-32 py-1 rounded-lg bg-zinc-800 mr-2 outline-none text-sm cursor-pointer'>
                                        <option value="main">main</option>
                                        {sites.map((items, index)=>(<Site_select sites={items}/>))}
                                   </select>
                                        <button type="submit" class="btn btn-primary" className='text-sm px-3.5 py-1.5 border border-clr1 rounded-md hover:bg-blue-600 font-medium'>Submit</button>
                         </form>
                    </li>
                    <li className='flex gap-1'>
                         <span className='size-10 rounded-lg flex items-center opacity-40 bg-zinc-800 hover:bg-zinc-700 justify-center text-2xl font-extralight cursor-pointer'><i class="ri-menu-5-line"></i></span>
                         <span className='size-10 border border-clr2 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center justify-center text-2xl font-extralight cursor-pointer'><i class="ri-function-fill"></i></span>
                    </li>
               </ul>
          </div>
     </div>
     <div className='w-full h-auto mt-5 '>
     <div className='flex flex-wrap justify-start gap-3 gap-y-5'>
          {sites.map((items, index)=>(
               <Sitecard sites={items}/>
          ))}
     </div>
          
      </div>
     </div>
  )
}

export default Site