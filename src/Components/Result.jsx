import logo from '../assets/home.png';
import { Link } from 'react-router';
function Result() {
  let score = Number(localStorage.getItem('score') || '0');
  console.log(score);
  return (
    <>
      <div className="flex flex-col items-center">
        <img className="w-2xs" src={logo} alt="logo" />
        <h3 className="text-3xl font-bold">Result</h3>
        <div className="w-2xl h-8 bg-gray-300 rounded mt-28 ">
          <div
            className={`h-8 bg-green-500 rounded transition-all duration-1000    w-[${((10 - 5) / 10) * 100}%]`}
            style={{ width: `${(score / 10) * 100}%` }}
          ></div>
        </div>
        <p className="text-2xl font-bold mt-3">{score}/10</p>
        <p className="text-2xl font-bold mt-20">
          “Keep learning, you have a good score!”
        </p>
        <Link
          key={1}
          to={'/quiz'}
          className="w-max px-4 md:px-14 lg:px-24 py-3 rounded-xl mb-20 text-white text-2xl cursor-pointer bg-green-600 mt-5"
        >
          Retry
        </Link>
      </div>
    </>
  );
}

export default Result;
