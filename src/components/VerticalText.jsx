const VerticalText = ({ text, left = true }) => {
  return (
    <p
      className={`whitespace-nowrap font-bold font-poppins text-asme-textShadow rotate-90 text-6xl absolute ${
        left
          ? "left-5 top-[100px] origin-bottom-left -translate-y-full"
          : "right-5 top-6 origin-top-left translate-x-full "
      }`}
    >
      {text}
    </p>
  );
};

export default VerticalText;
