import React, { useEffect } from 'react'

function Contact_forms() {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<i class="ri-mail-send-line text-emerald-600"></i>);
    const formData = new FormData(event.target);

    formData.append("access_key", "95ad058c-4709-4d5e-81a1-d3dc2a1b1231");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<i class="ri-check-double-line text-blue-600"></i>);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(()=>{

  })

  return (
     <div className='relative w-fit'>
     <form onSubmit={onSubmit} value='deshboard' method="post" className='flex flex-col gap-2 w-full sm:w-fit items-center justify-center py-2 px-2 '>
     <h1 className='text-3xl font-medium mb-5'>Contact me</h1>
     <input required type="text" className='rounded-md bg-zinc-800 border border-clr2 h-10 text-zinc-100 px-2 outline-none w-72 text-sm' placeholder='Enter your name'/>
     <input required type="email" name="email" id="email" className='rounded-md bg-zinc-800 border border-clr2 h-10 text-zinc-100 px-2 outline-none w-72 text-sm' placeholder='Enter your email'/>
     <textarea required name="massage" id="massage" cols="35" rows="5" className='bg-zinc-800 min-h-20 max-h-60 border border-clr2 w-full p-2 rounded-md text-zinc-100 outline-none text-sm' placeholder='Anything else'></textarea>
<button type="submit" className='px-3 py-1.5 bg-blue-600 rounded-md text-sm font-medium'>Submit Form</button>
</form>
<div className='size-7 rounded-md absolute top-3.5 right-2 flex items-center justify-center text-green-300 text-xl'>
<div className='text-blue-600'>{result}</div>
</div>
</div>
  )
}

export default Contact_forms