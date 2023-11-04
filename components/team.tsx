import Image from 'next/image';
import imageHarveyRoss from '/public/harvey-ross.jpg';
import imageMikeSpecter from '/public/mike-specter.jpg';

const people = [
  {
    name: 'Mike Specter',
    imageUrl: imageMikeSpecter,
  },
  {
    name: 'Harvey Ross',
    imageUrl: imageHarveyRoss,
  },
];

const Team = () => {
  return (
    <div className="mt-16 bg-white md:mt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet the Partners
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="relative">
                <Image
                  className="h-96 w-full object-cover"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Team;
