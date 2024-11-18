import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Logo = ({ to = "/#home", className = "" }) => {
  const [showText, setShowText] = useState(false);
  return (
    <HashLink
      to={to}
      title="Imvura y'Ibihembo"
      aria-description="Babi Games Nawe - Hindura Ubuzima"
      className={className}
    >
      <div className="w-fit">
        {showText ? (
          <h1 className="text-3xl font-bold text-secondary">Babi Games</h1>
        ) : (
          <img
            loading="lazy"
            src="/logo.png"
            alt="VunaDeile Logo"
            className="w-14 hover:scale-125 transition-all duration-300 object-contain"
            onError={() => setShowText(true)}
          />
        )}
      </div>
    </HashLink>
  );
};

export default Logo;
