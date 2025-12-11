const ListingCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="bg-white cursor-pointer hover:-translate-y-2 
      transition-transform duration-200 ease-in rounded-xl overflow-hidden 
      border border-zinc-200"
    >
      <div className="h-72 bg-zinc-300 flex items-center justify-center 
        text-zinc-500 overflow-hidden"
      >
        <img 
          src={imageUrl} 
          alt="room-image" 
          className="w-full h-full object-cover saturate-150 
            hover:scale-105 transition-transform duration-200 ease-in"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
        <p className="text-zinc-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default ListingCard;
