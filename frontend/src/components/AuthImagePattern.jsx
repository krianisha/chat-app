const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 min-h-screen">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl 
                bg-primary/20 dark:bg-primary/10 
                backdrop-blur-md bg-opacity-40
                transition-all duration-700 ease-in-out 
                hover:scale-110 hover:bg-primary hover:bg-opacity-30
                ${i % 3 === 0 ? "animate-pulse" : "opacity-90"}
              `}
            />
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-4 text-primary dark:text-primary-content">
          {title}
        </h2>
        <p className="text-base text-base-content/70 dark:text-base-content/60">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
