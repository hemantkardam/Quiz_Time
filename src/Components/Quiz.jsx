import React, { useEffect, useState } from 'react';
import logo from '../assets/home.png';
import volume from '../assets/volume.svg';
import mute from '../assets/mute.svg';
import data from '../Data.js';
import { Link } from 'react-router';
let score = 0;
function storage() {
  localStorage.setItem('score', score);
}
console.log(localStorage.setItem);
function Quiz() {
  const [question, setQuestion] = useState(1);
  const [timer, setTimer] = useState(30);
  const [selected, setSelected] = useState(null);
  function handleClick(option) {
    setSelected(option);
  }

  function getClass(option) {
    if (selected === null) {
      return 'border-2 border-[#D9D9D9] p-4 cursor-pointer hover:bg-[#D9D9D9]   rounded-xl my-4 ';
    }
    if (option == data[question - 1].correctAnswer) {
      if (option === selected) {
        score++;
        console.log(score);
      }
      return 'border-2 border-green-500 p-4 cursor-pointer hover:bg-[#D9D9D9]  rounded-xl my-4 ';
    }

    if (option === selected) {
      return 'border-2 border-red-500 p-4 cursor-pointer hover:bg-[#D9D9D9]  rounded-xl my-4 ';
    }

    return 'border-2 border-gray-400 p-4 cursor-pointer hover:bg-[#D9D9D9]  rounded-xl my-4 ';
  }

  function changeQuestion() {
    setSelected(null);
    setTimer(30);
    if (question < 10) {
      setQuestion(question + 1);
    }
  }
  useEffect(() => {
    if (selected !== null) return;
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(id);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [question, selected]);

  let [volumeIcon, setVolumeIcon] = useState(false);
  function vCh() {
    setVolumeIcon(!volumeIcon);
  }
  function reset() {
    storage();
    score = 0;
  }

  return (
    <>
      <main
        className={`${timer > 20 ? 'bg-green-100' : timer > 10 ? 'bg-[#D4D69F]' : 'bg-[#DBADAD]'} h-screen `}
      >
        <section className="max-w-5xl relative h-[90vh] mx-7 pt-3 lg:m-auto ">
          <div className="flex justify-between">
            <Link to={'../'}>
              <img
                className="lg:w-2xs object-contain w-40 cursor-pointer"
                src={logo}
                alt=""
              />
            </Link>
            <div className="flex flex-col gap-5 mt-10 items-end">
              <img
                className="w-8 cursor-pointer"
                onClick={vCh}
                src={volumeIcon ? mute : volume}
                alt=""
              />
              <span className="px-3  lg:text-2xl font-bold py-1 bg-[#FEC33D] rounded-[5px]">
                {question}/10
              </span>
            </div>
          </div>
          <p className="bg-white p-8 mt-6 rounded-xl">
            {data[question - 1].question}
          </p>
          <span
            className={`${timer > 20 ? 'bg-[#02A409]' : timer > 10 ? 'bg-[#C5B100]' : 'bg-[#C50C00]'} px-3 absolute right-0 inline-block  lg:text-2xl rounded-[5px] mt-6  text-white font-bold py-1`}
          >
            00:{timer < 10 ? `0${timer}` : timer}
          </span>
          <div className="bg-white p-4 mt-20 rounded-xl">
            {data[question - 1].options.map((option, index) => {
              return (
                <p
                  key={index}
                  onClick={() => handleClick(option)}
                  className={getClass(option)}
                >
                  {option}
                </p>
              );
            })}
          </div>
          <span
            onClick={changeQuestion}
            className={`${timer > 20 ? 'text-[#01AB08]' : timer > 10 ? 'text-[#C58800]' : 'text-[#C50000]'}    absolute ${question == 10 && selected ? 'right-28' : 'right-0'} inline-block  lg:text-2xl rounded-[5px] mt-2 font-bold cursor-pointer`}
          >
            Next
          </span>
          {question == 10 && selected ? (
            <Link
              onClick={reset}
              className=" text-[#01AB08] absolute right-0 inline-block  lg:text-2xl rounded-[5px] pt-2 font-bold cursor-pointer"
              to={'/result'}
            >
              Finised
            </Link>
          ) : (
            ''
          )}
        </section>
      </main>
    </>
  );
}

export default Quiz;
