import React from 'react'

function Form() {
  return (
    <div className={`calc-h overflow-y-auto hidden formdisplay`}>
                <h1 className='text-[6.5vw] sm:text-[3.2vw] text-zinc-200 font-medium'>Manage your clint data</h1>
            <form className='p-3 flex flex-col items-start justify-start gap-5 w-full sm:w-[47vw] rounded-xl'>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="name" className='cursor-pointer font-semibold'>Clint name</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Username'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="domain" className='cursor-pointer font-semibold'>Clint domain</label>
                    <input
                        required
                        className='bg-transparent lowercase border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='domain'
                        name='domain'
                        value={formData.domain}
                        onChange={handleInputChange}
                        placeholder='domain'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="email" className='cursor-pointer font-semibold'>Clint email</label>
                    <input
                        required
                        className='bg-transparent lowercase border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="email"
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='email'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="logo" className='cursor-pointer font-semibold'>Clint Logo</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='logo'
                        name='logo'
                        value={formData.logo}
                        onChange={handleInputChange}
                        placeholder='Logo URL'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="home" className='cursor-pointer font-semibold'>Home</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='home'
                        name='home'
                        value={formData.home}
                        onChange={handleInputChange}
                        placeholder='Home '
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="about" className='cursor-pointer font-semibold'>About</label>
                    <textarea
                        required
                        className='bg-transparent min-h-40 border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='about'
                        name='about'
                        value={formData.about}
                        onChange={handleInputChange}
                        placeholder='About business'
                    >
                    </textarea>
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="price" className='cursor-pointer font-semibold'>Price</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="number"
                        id='price'
                        name='price'
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder='Price '
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="services" className='cursor-pointer font-semibold'>Services</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='services'
                        name='services'
                        value={formData.services}
                        onChange={handleInputChange}
                        placeholder='Services '
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="contact" className='cursor-pointer font-semibold'>Contact</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="tel"
                        id='contact'
                        name='contact'
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder='Ex. 1234567890'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="address" className='cursor-pointer font-semibold'>Address</label>
                    <input
                        required
                        className='bg-transparent border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="text"
                        id='address'
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder='Address'
                    />
                </div>
                <div className='bg-zinc-300/80 p-5 rounded-lg flex flex-col gap-2 w-full'>
                    <label htmlFor="date" className='cursor-pointer font-semibold'>Date</label>
                    <input
                        required
                        className='bg-transparent w-fit border-b border-zinc-600 outline-none py-1.5 px-2 placeholder:text-zinc-600 placeholder:text-sm'
                        type="date"
                        id='date'
                        name='date'
                        value={formData.date}
                        onChange={handleInputChange}
                        title=''
                    />
                </div>
                {editingId ? (
                    <button onClick={() => handleUpdate(editingId)} className='px-3 py-1.5 rounded-md bg-green-400 hover:bg-green-500 transition-all text-sm font-medium'>Update</button>
                ) : (
                    <button onClick={handleCreate} className='px-3 py-1.5 rounded-md bg-green-400 hover:bg-green-500 transition-all text-sm font-medium'>Create</button>
                )}
            </form>
            </div>
  )
}

export default Form