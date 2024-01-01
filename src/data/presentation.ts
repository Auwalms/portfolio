type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "auwalforall@gmail.com",
  title: "Hi, I’m Auwal 👋",
  profile:
    "https://lh3.googleusercontent.com/a/ACg8ocIbJHxZNJSNhO7BwGlfk8o_ajlN2MXZnhMNvpMJ85v23lxF=s288-c-no",
  description:
    "Bonjour, I'm a software engineer and Program Manager from Lafia, Nigeria. I have experience across Web and Mobile App Development . I am equally a Program Manager and Developer Relations professional with 6yrs+ experience supporting developer programs and communities. Beside solving problems, speaking at technical conferences and mentoring upcoming developers, I enjoy reading manga and watching anime.",
  socials: [
    {
      label: "Google Dev Profile",
      link: "https://g.dev/auwalms",
    },
    {
      label: "X (Twitter)",
      link: "https://twitter.com/auwalms",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/auwalms",
    },
    {
      label: "Github",
      link: "https://github.com/auwalms",
    },
  ],
};

export default presentation;
