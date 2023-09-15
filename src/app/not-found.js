import Link from "next/link";

const notFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <p className="font-poppins font-extrabold text-7xl text-asme-blue-200 m-1">
        404
      </p>
      <p className="font-poppins font-bold text-3xl m-1">Page Not Found</p>
      <div className="mb-2 h-[2px] w-12 bg-asme-blue-500" />
      <Link
        href="/"
        className="font-poppins border-1 border-gray-500 text-center text-xl text-asme-blue-600 no-underline px-4 py-2 m-1"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default notFound;
