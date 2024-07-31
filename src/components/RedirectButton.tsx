'use client';

import React, { useState } from 'react'

export default function RedirectButton() {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new Map();
  const getUrlParams = urlParams.get('url') ?? '';
  const [url, setUrl] = useState(getUrlParams);
  const onClick = () => {
    window.location.href = url;
  };
  return (
    <div className='flex-row gap-4 items-center'>
      <input
        className="w-full p-2 mb-4"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Redirect
      </button>
    </div>
  )
}
