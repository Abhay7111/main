import React from 'react'

function Contact_forms() {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<i class="ri-mail-send-line"></i>);
    const formData = new FormData(event.target);

    formData.append("access_key", "95ad058c-4709-4d5e-81a1-d3dc2a1b1231");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<i class="ri-mail-check-line"></i>);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
     <span>
     <form onSubmit={onSubmit} value='deshboard' method="post" className='flex flex-col gap-2 w-full sm:w-fit items-center justify-center py-2 px-2 '>
     <h1 className='text-3xl font-medium '>Contact me</h1>
     <input type="text" className='rounded-md bg-zinc-800 border border-clr2 h-10 text-zinc-100 px-2 outline-none w-72 text-sm' placeholder='Enter your name'/>
     <input type="email" name="email" id="email" className='rounded-md bg-zinc-800 border border-clr2 h-10 text-zinc-100 px-2 outline-none w-72 text-sm' placeholder='Enter your email'/>
     <textarea name="massage" id="massage" cols="35" rows="5" className='bg-zinc-800 border border-clr2 w-full p-2 rounded-md text-zinc-100 outline-none text-sm' placeholder='Anything else'></textarea>
<button type="submit">Submit Form</button>
</form>
<span className='bg-blue-600 px-2 py-1.5 rounded-md'>{result}</span>
</span>
  )
}

export default Contact_forms