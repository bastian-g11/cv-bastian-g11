const Information = ({ title, subTitle }) => (
  <div>
    <h1>{title}</h1>
    <hr className='border-light-gray' />
    <p className='info-title'>{subTitle}</p>
  </div>
);

export { Information };
