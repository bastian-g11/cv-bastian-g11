const Title = ({ text, background = 'bg-main-purple ' }) => (
  <div className={`${background} h-9`}>
    <h1 className='text-center text-white font-bold text-xl'>{text}</h1>
  </div>
);

export { Title };
