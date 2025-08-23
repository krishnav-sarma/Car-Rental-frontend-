import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[#00060a] h-screen w-full flex flex-col items-center justify-center px-4 ">
      <h1 className="text-white font-[Cormorant] text-6xl mb-10">
        Contact Us
      </h1>

      <div className=" w-full max-w-lg p-8 rounded-2xl shadow-lg flex flex-col gap-4">
        <input
          className="px-4 py-2 rounded-lg outline-white outline-2 outline-offset-2 placeholder:text-white text-white bg-transparent"
          type="text"
          placeholder="Name"
        />
        <input
          className="px-4 py-2 rounded-lg outline-white outline-2 outline-offset-2 placeholder:text-white text-white bg-transparent"
          type="email"
          placeholder="Email"
        />
        <textarea
          className=" px-4 py-2 rounded-lg outline-white h-28 resize-none outline-2 outline-offset-2 placeholder:text-white text-white bg-transparent"
          placeholder="Message"
        />
        <button className="bg-[#00060a] text-white py-2 rounded-lg hover:bg-amber-500 transition">
          Send
        </button>
      </div>
    </div>
  )
}

export default Contact
