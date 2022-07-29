const Title = ({ text, background = 'bg-main-purple ' }) => (
  // TODO: Add margin
  <div className={`${background} h-8 w-full md:w-1/2 `}>
    <h1 className='text-center text-white font-bold text-xl'>{text}</h1>
  </div>
);

export { Title };
