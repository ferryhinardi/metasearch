'use client';

import React from 'react'

export default function RedirectButton() {
  const onClick = () => {
    window.location.href = 'https://www-pr24969.web.tvlk.dev/en-id/flight/affiliate/redirect?ap=CGK.SIN&dt=13-7-2024.15-7-2024&ps=1.0.0&sc=ECONOMY';
  };
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Redirect
    </button>
  )
}
