import Image from 'next/image';
import pokemon from '@/public/poke.gif';

const Maintenance = () => {
  return (
    <>
      <div className="carousel-dark">
        <div className="container text-center">
          <h1>Website under construction</h1>
          <Image width="500" height="500" src={pokemon} alt="pokemon" />
        </div>
      </div>
    </>
  );
};

export default Maintenance;
