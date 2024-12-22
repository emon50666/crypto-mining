// components/Spinner.js
export default function Spinner() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1627] ">
        <div className="w-14 h-14 border-4 border-[#5D22FF] border-t-transparent rounded-full animate-spin"></div>
        <h1 className='text-lg font-mono mt-2 text-white ml-2'>Welcome To Crypto Flow</h1>
      </div>
    );
  }
  