import React from 'react'

export default function Password() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-white">

        <h1 className="text-3xl font-bold text-center mb-8 tracking-wide">
          Random Password Generator
        </h1>

        {/* Password Output */}
        <div className="flex gap-3 mb-6">
          <input 
            className="flex-1 bg-white/20 border border-white/30 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-200"
            placeholder="Your Password"
          />
          <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-100 transition duration-300">
            Copy
          </button>
        </div>

        {/* Password Length */}
        <div className="mb-5">
          <label className="font-semibold block mb-2">
            Password Length
          </label>
          <input 
            type="number" 
            className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-white text-white"
          />
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">

          <div className="flex justify-between items-center">
            <label>Include Uppercase Letters</label>
            <input type="checkbox" className="w-4 h-4 accent-indigo-500" />
          </div>

          <div className="flex justify-between items-center">
            <label>Include Lowercase Letters</label>
            <input type="checkbox" className="w-4 h-4 accent-indigo-500" />
          </div>

          <div className="flex justify-between items-center">
            <label>Include Numbers</label>
            <input type="checkbox" className="w-4 h-4 accent-indigo-500" />
          </div>

          <div className="flex justify-between items-center">
            <label>Include Symbols</label>
            <input type="checkbox" className="w-4 h-4 accent-indigo-500" />
          </div>

        </div>

        {/* Generate Button */}
        <button className="w-full bg-white text-indigo-600 font-bold py-3 rounded-lg hover:bg-indigo-100 transition duration-300 shadow-lg">
          Generate Password
        </button>

      </div>
    </section>
  )
}
