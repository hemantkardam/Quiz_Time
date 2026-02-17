import React from 'react';
import quizTime from '../assets/home.png';
import { Link } from 'react-router';
function Home() {
  return (
    <>
      <div className="h-[90vh] flex flex-col items-center justify-center">
        <img className="w-2xl" src={quizTime} alt="QuizTime" />
        <Link
          key={1}
          to={'/quiz'}
          className="w-max px-4 md:px-14 lg:px-32 py-3 rounded-2xl mb-20 text-white text-2xl cursor-pointer bg-green-600"
        >
          Start Now
        </Link>
        {/* <p className="text-2xl">Highest Score: 20/25</p> */}
      </div>
    </>
  );
}

export default Home;
