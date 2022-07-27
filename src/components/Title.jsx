const Title = ({ text, background }) => (
  <div className={`${background}`}>
    <h1 className='text-center text-white font-bold text-xl'>{text}</h1>
  </div>
);

export { Title };
