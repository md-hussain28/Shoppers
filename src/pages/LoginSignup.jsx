import React from 'react';

const LoginSignup = () => {
  return (
    <div className='bg-gradient-to-b from-pink-300 to-lime-50 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-xl max-w-md w-full'>
        <h1 className='text-4xl font-extrabold text-center text-pink-700 mb-8'>Sign Up</h1>
        <div className='space-y-6'>
          <input
            type="text"
            placeholder='Your Name'
            className='w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
          />
          <input
            type="text"
            placeholder='Email Address'
            className='w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
          />
          <input
            type="password"
            placeholder='Password'
            className='w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
          />
        </div>
        <button className='w-full bg-pink-600 text-white py-3 rounded-lg mt-6 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500'>
          Continue
        </button>
        <p className='text-center text-gray-600 mt-4'>
          Already have an account? <span className='text-pink-600 cursor-pointer hover:underline'>Login</span>
        </p>
        <div className='flex items-center mt-6'>
          <input
            type="checkbox"
            id='terms'
            className='h-5 w-5 text-pink-600 border-gray-300 rounded focus:ring-2 focus:ring-pink-500'
          />
          <label htmlFor='terms' className='ml-3 text-sm text-gray-600'>
            By continuing, I agree to the <span className='text-pink-600 cursor-pointer hover:underline'>Terms of Use</span> & <span className='text-pink-600 cursor-pointer hover:underline'>Privacy Policy</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
