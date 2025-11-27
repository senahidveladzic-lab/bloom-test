import Image from "next/image";

const socialLinks = [
  {
    id: "twitter",
    href: "https://x.com/bloomsocialhq",
    alt: "X (Twitter) social icon",
    src: "https://pulsarmoney.b-cdn.net/icons/social/x.png",
    width: 15,
    height: 15,
    className: "h-4 w-4 object-contain brightness-0 invert",
  },
  {
    id: "discord",
    href: "https://discord.com/invite/SNpyJUT6xZ",
    alt: "Discord social icon",
    src: "https://pulsarmoney.b-cdn.net/icons/social/dicord.png",
    width: 22,
    height: 16,
    className: "h-[16px] w-[22px] object-contain brightness-0 invert",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/bloomsocialhq",
    alt: "Linkedin social icon",
    src: "/social/linked.svg",
    width: 18,
    height: 18,
    className: "h-[18px] w-[18px] object-contain brightness-0 invert",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3 lg:gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden p-2 opacity-70 transition-opacity hover:opacity-100 md:block"
        >
          <Image
            alt={social.alt}
            src={social.src}
            width={social.width}
            height={social.height}
            className={social.className}
            priority
          />
        </a>
      ))}
    </div>
  );
}
