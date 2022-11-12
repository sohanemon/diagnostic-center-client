const Heading = ({ children, sub }) => {
  return (
    <div className='py-20'>
      <h1 className='text-5xl font-bebas tracking-widest text-center text-gray-900'>
        {children}
      </h1>
      <p className='text-gray-700 text-center max-w-lg mx-auto pt-5'>
        {sub
          ? sub
          : "Lorem ipsum. Molestias quaerat optio debitis! Cum odit aliquid sapiente omnis mollitia?"}
      </p>
    </div>
  );
};

export default Heading;
