type ExperienceProps = {
  head1?: string | JSX.Element;
  head2?: string | JSX.Element;
  head3?: string | JSX.Element;
  head4?: string | JSX.Element;
  bulletPoints: (string | JSX.Element)[];
  companyUrl?: string;
  hideHead3?: boolean;
};

type EducationProps = {
  title: string;
  gpa: string;
  org: { name: string; logo: ImageProps["src"] };
  time: string;
};

type CertificateProps = {
  title: string;
  org: { name: string; logo: ImageProps["src"] };
  time?: string;
  link: string;
};
