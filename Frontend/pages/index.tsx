import { FC } from 'react';

interface IndexProps {

};

const Index: FC<IndexProps> = ({ }) => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div>
        <h1 className='font-semibold bg-white'>Home page</h1>
        <h1 className='font-semibold bg-white'>This project is made by sofi, with: Next.js+TypeScript+TailwindCSS</h1>
        <div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <a href="screen1" className='block'>Screen 1</a>
          </button>
          <br />
          <br />
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            <a href="screen2" className='block'>Screen 2</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;