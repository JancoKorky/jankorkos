import Image from 'next/image';
import pokemon from '@/public/poke.gif';

const Maintenance = () => {
  return (
    <>
      <div className="container text-center">
        <h1>Website under construction</h1>
        <div className="">
          <Image
            width="500"
            height="500"
            src={pokemon}
            alt="pokemon"
            className="w-auto mw-100 h-auto mh-100"
          />
        </div>
      </div>
    </>
  );
};

export default Maintenance;
