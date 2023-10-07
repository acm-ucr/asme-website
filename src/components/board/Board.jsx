import Image from "next/image";

const Board = ({ image, position, name }) => {
  return (
    <div className="font-Poppins font-bold text-base md:text-lg px-3 my-2">
      <p className="text-asme-blue-500 bg-asme-blue-100 text-right p-2 whitespace-nowrap">
        {position}
      </p>
      <Image
        className="aspect-square object-cover"
        src={image}
        alt="Board Member"
      />
      <p className="text-asme-blue-100 bg-asme-blue-500 w-full p-2">{name}</p>
    </div>
  );
};

export default Board;
