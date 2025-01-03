type ComponentType =
  | "layout.hero"
  | "layout.hero-with-video"
  | "layout.card-grid"
  | "layout.section-heading"
  | "layout.content-with-image"
  | "layout.price-grid"
  | "layout.cover-image"
  | "layout.page-title"
  | "elements.breadcrumbs";

interface Base<T extends ComponentType, D extends {} = {}> {
  __component: T;
  id: string;
  createdAt: string;
  updatedAt: string;
  data: D;
}

export interface NavLink {
  href: string;
  text: string;
  isExternal: boolean;
  isPrimary: boolean;
}

export type Block =
  | HeroProps
  | HeroWithVideoProps
  | CardGridProps
  | SectionHeadingProps
  | ContentWithImageProps
  | PriceGridProps
  | CoverImageProps
  | PageTitleProps
  | BreadcrumbsProps;

export interface HeroProps extends Base<"layout.hero"> {
  heading: string;
  text: string;
  topLink?: NavLink;
  buttonLink?: NavLink[];
  image: {
    url: string;
    alternativeText: string | null;
    name: string;
  };
}

export interface HeroWithVideoProps extends Base<"layout.hero-with-video"> {
  heading: string;
  text: string;
  buttonLink?: NavLink[];
  youtubeVideoId: string;
};

export interface CardGridProps extends Base<"layout.card-grid"> {
  cardItems: {
    id: string;
    heading: string;
    text?: string;
    icon: string;
  }[];
}

export interface SectionHeadingProps extends Base<"layout.section-heading"> {
  heading: string;
  subHeading: string;
  text: string;
  centered?: boolean;
}

export interface ContentWithImageProps extends Base<"layout.content-with-image"> {
  reverse: boolean;
  image: {
    url: string;
    name: string;
  };
  heading: string;
  subHeading: string;
  text: string;
  buttonLink?: NavLink[];
  variant?: string;
}

export interface PriceGridProps extends Base<"layout.price-grid"> {
  priceCard: {
    id: string;
    heading: string;
    description: string;
    price: string;
    selected: boolean;
    feature: {
      id: string;
      description: string;
    }[];
    link: NavLink;
  }[];
}

export interface CoverImageProps extends Base<"layout.cover-image"> {
  image: {
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
  };
}

export interface PageTitleProps extends Base<"layout.page-title"> {
  title: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbsProps extends Base<"elements.breadcrumbs"> {
  items: BreadcrumbItem[];
}
