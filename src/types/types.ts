export type TProject = {
  title: string;
  desc: string;
  year: string;
  content: string;
  hidden: boolean;
  featured: boolean;
  image: string;
  imagealt: string;
  live: string;
  link: string;
  tags: string[];
  showcase: {
    introduction: string[];
    desc: string[];
    mainSection: {
      title: string;
      text: string[];
    };
    longSection: {
      title: string;
      text: string[];
    };
    tags: string[];
    contentSection: {
      title: string;
      text: string[];
      image: string;
      imagealt: string;
    }[];
  };
};

export type TCertification = {
  title: string;
  status: number;
  expandable?: number;
  school?: number;
  link: string;
  cert?: string;
  place: string;
  type: string;
  startDate: string;
  endDate: string;
  desc: string;
  topics: string[];
  tags: string[];
};

export type TActivity = {
  id: number;
  title: string;
  imageUrl: string;
  comment: string;
  place: string;
  type: string;
  startDate: string;
  endDate: string;
};
