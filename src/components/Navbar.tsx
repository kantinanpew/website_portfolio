import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  // Optional: If you want to use the handleLinkClick function, uncomment this and add it to the anchor tags.
  /*
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
  };
  */

  // Social media links data
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/kantinan-paritvisut-835019302/",
      icon: <FaLinkedin className="text-white hover:text-gray-400" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/kantinanpew",
      icon: <FaGithub className="text-white hover:text-gray-400" />,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/kantinanpew/",
      icon: <FaInstagram className="text-white hover:text-gray-400" />,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/kantinan.paritvisut/",
      icon: <FaFacebook className="text-white hover:text-gray-400" />,
      label: "Facebook",
    },
  ];

  return (
    <nav className="mb-20 flex justify-between items-center py-6 px-4 z-10">
      {/* Placeholder for logo or branding */}
      <div className="flex-shrink-0 items-center">
        {/* Add your logo or branding here */}
      </div>

      {/* Social media links */}
      <div className="flex space-x-4 items-center justify-between text-2xl">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            rel="noopener noreferrer"
            href={link.href}
            target="_blank"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
