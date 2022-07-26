const Section = ({
  title,
  titleBackground = 'bg-main-purple ',
  background = 'bg-white',
  children,
}) => (
  <div className={`flex-container py-4 ${background}`}>
    <div className={`w-full ${titleBackground}`}>
      <h1 className='text-center text-white font-bold text-xl'>{title}</h1>
    </div>
    <div>{children}</div>
  </div>
);

export { Section };
