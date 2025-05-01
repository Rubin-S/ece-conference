import React from "react";
import Section from "../common/Section";
import { socials } from "../../assets/socials/socials";

const Footer = () => {

  // const socials = [
  //   {
  //     id: "0",
  //     title: "Discord",
  //     iconUrl: discordBlack,
  //     url: "#",
  //   },
  //   {
  //     id: "1",
  //     title: "Twitter",
  //     iconUrl: twitter,
  //     url: "#",
  //   },
  //   {
  //     id: "2",
  //     title: "Instagram",
  //     iconUrl: instagram,
  //     url: "#",
  //   },
  //   {
  //     id: "3",
  //     title: "Telegram",
  //     iconUrl: telegram,
  //     url: "#",
  //   },
  //   {
  //     id: "4",
  //     title: "Facebook",
  //     iconUrl: facebook,
  //     url: "#",
  //   },
  // ];

  return (
    <Section crosses className="!px-0 !py-10 bg-light-sb">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-light-st lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-light-altBg rounded-full transition-colors hover:bg-light-divider"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
