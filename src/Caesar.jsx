import React, { useState } from 'react';
import Navigation from './components/Navigation';

export default function Caesar(params) {

  const [input, setInput] = useState('');
  const [shift, setShift] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [directionShift, setDirectionShift] = useState(true);
  const [encryptedText, setEncryptedText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEncryptedText(encrypt(input, shift));
    setShowResult(true)
  };

  const encrypt = (text, shift) => {
    let encrypted = '';
    if (directionShift === false) {
      shift = 26 - (shift % 26);
    }
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i);
      if (char >= 65 && char <= 90) {
        encrypted += String.fromCharCode((char - 65 + shift) % 26 + 65);
      } else if (char >= 97 && char <= 122) {
        encrypted += String.fromCharCode((char - 97 + shift) % 26 + 97);
      } else {
        encrypted += text.charAt(i);
      }
    }
    return encrypted;
  };


  return (
    <>
      <Navigation />
      <h1 className=" text-center pt-10 text-4xl font-bold">Algoritma Caesar Cipher</h1>
      <div className='py-5'>

        {showResult ?
          <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span class="sr-only">Check icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">Got it! The result is <span className='font-bold text-green-600'>{encryptedText}</span></div>
          </div>
          :
          ""
        }

        <form class="max-w-sm mx-start text-left" onSubmit={handleSubmit}>
          <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Input your text</label>
            <input type="text" value={input} onChange={(e) => { setShowResult(false); setInput(e.target.value) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: abcde" required />
          </div>
          <div class="mb-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shift</label>
            <label class="relative inline-flex items-center mb-5 cursor-pointer">
              <input type="checkbox" value={directionShift} onChange={() => { setShowResult(false); setDirectionShift(!directionShift) }} class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{directionShift === true ? 'Right' : 'Left'}</span>
            </label>
            <input type="number" value={shift} onChange={(e) => { setShowResult(false); setShift(Math.abs(parseInt(e.target.value))) }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: 5" required />
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </div>
    </>
  );
};
