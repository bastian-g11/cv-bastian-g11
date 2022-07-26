const Section = ({
  title,
  titleBackground = 'bg-main-purple ',
  background = 'bg-white',
  children,
}) => (
  <div className='w-full'>
    <div className={`${titleBackground}`}>
      <h1 className='text-center text-white font-bold text-xl'>{title}</h1>
    </div>
    <div className={`flex-container ${background}`}>
      <div>{children}</div>
    </div>
  </div>
);

export { Section };
