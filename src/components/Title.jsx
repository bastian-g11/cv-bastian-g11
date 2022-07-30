const Title = ({ text, background = 'bg-main-purple ' }) => (
  <h1
    className={`${background} w-full md:w-1/2  text-center mb-4 text-white font-bold text-xl`}
  >
    {text}
  </h1>
);

export { Title };
