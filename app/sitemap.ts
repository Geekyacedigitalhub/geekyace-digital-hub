import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url:
        "https://geekyacedigitalhub.com",
      lastModified:
        new Date(),
    },

    {
      url:
        "https://geekyacedigitalhub.com/about",
      lastModified:
        new Date(),
    },

    {
      url:
        "https://geekyacedigitalhub.com/solutions",
      lastModified:
        new Date(),
    },

    {
      url:
        "https://geekyacedigitalhub.com/portfolio",
      lastModified:
        new Date(),
    },

    {
      url:
        "https://geekyacedigitalhub.com/showcase",
      lastModified:
        new Date(),
    },

    {
      url:
        "https://geekyacedigitalhub.com/contact",
      lastModified:
        new Date(),
    },

  ];

}