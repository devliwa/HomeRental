const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-bold text-white mb-4">
        {title ? title : "Title Here"}
      </h3>
      <ul className="space-y-2">
        {/* FIX: The links array contains strings, so we map using (linkText, index).
          We use linkText for the content and index for the unique key.
        */}
        {links.map((linkText, index) => (
          <li key={index}>
            <a href="#" className="hover:text-white transition-colors">
              {linkText}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;