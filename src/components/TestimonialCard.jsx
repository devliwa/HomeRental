
const TestimonialCard = ({name, date, quote, imageUrl}) => {
  return (
    <div className="bg-white cursor-pointer hover:-translate-y-2 
    transition-all duration-200 ease-in p-6 rounded-xl border 
    border-zinc-200">
      {/* Top: Avatar Details */}
      <div className="flex items-center mb-4 lg:mb-8">
        {/* Avatar Image */}
        <div className="size-10 rounded-full bg-zinc-300 mr-3 
        overflow-clip">
          <img src={imageUrl} alt="avatar-image" 
            className="size-full" />
        </div>
        {/* Details */}
        <div>
          <p className="font-semibold text-zinc-900">{name}</p>
          <p className="text-sm text-zinc-500">{date}</p>
        </div>
      </div>

      {/* Bottom: Quote */}
      <p className="text-zinc-700 italic mb-4">{`"${quote}"`}

      </p>
    </div>
  );
};

export default TestimonialCard;
