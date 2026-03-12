const TwSizeIndicator = () => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed right-0 top-0 z-50 flex items-center justify-center bg-gray-200 p-1 text-xs uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200">
        <span className="block sm:hidden">all</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block">lg</span>
      </div>
    )
  } else return null
}

export default TwSizeIndicator
