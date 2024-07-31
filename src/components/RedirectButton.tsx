import React from 'react'

export default function RedirectButton() {
  const onClick = () => {
    window.location.href = 'https://www.google.com';
  };
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Redirect
    </button>
  )
}
