

const QuoteSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 grid 
    md:grid-cols-2 gap-12 items-start">
      {/* Left Column */}
      <div className="text-zinc-600 font-medium text-xl 
      lg:text-2xl pt-2">
        We are next generation <br/> House rental platform
        <br/> that will help you to find your dream house
        <br/> easily, quickly and reliably.
      </div>
      {/* Right Column */}
      <h2 className="text-5xl font-bold leading-tight 
      text-zinc-900">
        Prepare yourself to get a new house
        <br/> with ease and comfort.
      </h2>
    </section>  
  )
}

export default QuoteSection
