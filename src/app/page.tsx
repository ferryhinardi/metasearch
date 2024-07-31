'use client';

export default function Home() {
  const onClick = () => {
    window.location.href = 'https://www.google.com';
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Redirect
      </button>
    </main>
  );
}
