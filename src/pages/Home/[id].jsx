import React, { useContext } from 'react';
import { Mycontext } from '../../context/Context';
import { useParams } from 'react-router-dom';

const HomeD = () => {
  const { daata } = useContext(Mycontext);
  const { mal_id } = useParams();
  const Ddata = daata.find((e) => e.mal_id == mal_id);
  console.log(mal_id);

  return (
    <div className="flex items-center justify-center bg-gray-800 pt-5 pb-5 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-transform duration-300">
        <img
          src={Ddata.images.jpg.large_image_url}
          alt={Ddata.title}
          className="w-full md:w-[45%] h-[105vh] object-cover"
        />
        <div className="w-full md:w-[55%] p-6 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">{Ddata.titles[0].title}</h2>

          <div className="flex justify-center gap-4 text-sm text-white font-semibold">
            <span className="bg-red-500 px-3 py-1 rounded-full">{Ddata.type}</span>
            <span
              className={`px-3 py-1 rounded-full bg-green-500`}
            >
              {Ddata.status}
            </span>
          </div>

          <div className="flex justify-between text-gray-700 font-medium pt-2">
            <p>Episodes: <span className="font-bold text-blue-600">{Ddata.episodes || 'N/A'}</span></p>
            <p>Rank: <span className="font-bold text-yellow-500">#{Ddata.rank}</span></p>
            <p>Score: <span className="font-bold text-green-600">{Ddata.score}</span></p>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Synopsis</h3>
            <p className="text-gray-600 text-sm leading-relaxed   pr-2  ">
              {Ddata.synopsis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeD;
