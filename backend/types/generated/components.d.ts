import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
    description: '';
  };
  attributes: {
    logoText: Schema.Attribute.String;
    navItems: Schema.Attribute.Component<'elements.link', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    logoImage: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    subHeading: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutPriceGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_price_grids';
  info: {
    displayName: 'Price Grid';
  };
  attributes: {
    priceCard: Schema.Attribute.Component<'elements.price-card', true>;
  };
}

export interface LayoutPageTitle extends Struct.ComponentSchema {
  collectionName: 'components_layout_page_titles';
  info: {
    displayName: 'Page Title';
    icon: 'heading';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    topLink: Schema.Attribute.Component<'elements.link', false>;
    buttonLink: Schema.Attribute.Component<'elements.link', true>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutHeroWithVideo extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_with_videos';
  info: {
    displayName: 'Hero With Video';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    buttonLink: Schema.Attribute.Component<'elements.link', true>;
    youtubeVideoId: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    text: Schema.Attribute.Text;
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutCoverImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_cover_images';
  info: {
    displayName: 'Cover Image';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media & Schema.Attribute.Required;
    altText: Schema.Attribute.String;
  };
}

export interface LayoutContentWithImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_with_images';
  info: {
    displayName: 'Content With Image';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    buttonLink: Schema.Attribute.Component<'elements.link', true>;
    variant: Schema.Attribute.Enumeration<['default', 'wide']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface LayoutCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_card_grids';
  info: {
    displayName: 'Card Grid';
    description: '';
  };
  attributes: {
    cardItems: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_price_cards';
  info: {
    displayName: 'Price Card';
    description: '';
  };
  attributes: {
    selected: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    price: Schema.Attribute.String;
    feature: Schema.Attribute.Component<'elements.feature', true>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      [
        'Frame',
        'Download',
        'Globe',
        'Sparkles',
        'LayoutPanelLeft',
        'Palette',
        'Kayaking',
        'Surfing',
        'SUPing',
      ]
    >;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsBreadcrumbs extends Struct.ComponentSchema {
  collectionName: 'components_elements_breadcrumbs';
  info: {
    displayName: 'Breadcrumbs';
    description: '';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.breadcrumb-item', true>;
  };
}

export interface ElementsBreadcrumbItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_breadcrumb_items';
  info: {
    displayName: 'Breadcrumb Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    href: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.top-nav': LayoutTopNav;
      'layout.section-heading': LayoutSectionHeading;
      'layout.price-grid': LayoutPriceGrid;
      'layout.page-title': LayoutPageTitle;
      'layout.hero': LayoutHero;
      'layout.hero-with-video': LayoutHeroWithVideo;
      'layout.footer': LayoutFooter;
      'layout.cover-image': LayoutCoverImage;
      'layout.content-with-image': LayoutContentWithImage;
      'layout.card-grid': LayoutCardGrid;
      'elements.price-card': ElementsPriceCard;
      'elements.link': ElementsLink;
      'elements.feature': ElementsFeature;
      'elements.card': ElementsCard;
      'elements.breadcrumbs': ElementsBreadcrumbs;
      'elements.breadcrumb-item': ElementsBreadcrumbItem;
    }
  }
}
