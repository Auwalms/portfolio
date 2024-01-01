export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Conference Site",
    techs: ["Vue", "Buefy", "firebase"],
    link: "https://github.com/Auwalms/conference-site",
  },
  {
    title: "Slack Invite Script",
    techs: ["Javascript", "Python", "Golang", "Java", "PHP"],
    link: "https://github.com/Auwalms/slack-invites-script",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
