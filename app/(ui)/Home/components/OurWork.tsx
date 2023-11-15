import { coll1, coll2, fColl, fColl1, handmade, necklace, ring, ring1 } from '@/public/assets';
import Image from 'next/image';

const ourWork = [
  { image: fColl },
  { image: fColl1 },
  { image: ring },
  { image: handmade },

];

const hoveredImg = [
  { image: coll2 },
  { image: coll1 },
  { image: necklace },
  { image: ring1 },
]

const OurWork = () => {
  return (
    <div >
      <div className="text-neutral-700 items-center justify-center p-10">
        <h5 className="italic font-extrabold lg:text-7xl tracking-[0.2em] md:text-6xl text-4xl mb-5">
          Our Work in Process
        </h5>
        <p className="lg:text-xl italic text-yellow-500-500 text-sm text-right">
          Dive into luxury with our new jewelry collection, where timeless elegance meets modern
          allure. Elevate your style today!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {ourWork.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group rounded-md shadow-md transition-transform transform hover:scale-105 cursor-pointer"
          >
            <Image
              className="object-cover w-full h-full rounded-md"
              src={item?.image}
              alt={`Image ${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
              <Image
                className="object-cover w-full h-full rounded-md"
                src={hoveredImg[index]?.image}
                alt={`Hovered Image ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;

