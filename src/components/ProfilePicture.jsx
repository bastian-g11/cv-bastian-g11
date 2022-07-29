const ProfilePicture = () => (
  <div className='md:w-1/2 md:ml-auto md:-translate-x-20'>
    <div className='border-l-[2rem] border-main-purple h-40 float-left' />
    <div
      className={`h-40 w-40 rounded-full bg-[url('../assets/ich.png')] bg-cover bg-center relative`}
    />
  </div>
);

export { ProfilePicture };
