const Section = ({
  title,
  titleBackground = 'bg-violet-700 ',
  background = 'bg-white',
  children,
}) => (
  <div className={`py-4 flex flex-col items-center ${background}`}>
    <div className={`w-full ${titleBackground}`}>
      <h1 className='text-center text-white font-bold text-xl'>{title}</h1>
    </div>
    <div>{children}</div>
  </div>
);

export { Section };
