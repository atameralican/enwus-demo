import { lazy } from "react";
import aboutUs from "./assets/images/banners/about-us.webp";
import catalogBanner from "./assets/images/banners/catalog-banner.webp";
import catalogBannerSmall from "./assets/images/banners/catalog-banner-sm.webp";
import argeBanner from "./assets/images/banners/arge.webp";
import defenseBanner from "./assets/images/banners/defense.webp";
import manufacturingBanner from "./assets/images/banners/manufacturing.webp";

const AboutUsPage = lazy(() => import("./pages/about-us"));
const CatalogsPage = lazy(() => import("./pages/catalogs"));
const Arge = lazy(() => import("./pages/arge"));
const Defense = lazy(() => import("./pages/defense-industry"));
const Manufacturing = lazy(() => import("./pages/manufacturing"));

const routes = [
  {
    name: "Hakkımızda",
    route: "/about-us",
    component: AboutUsPage,
    key: "about-us",
    bannerImg: aboutUs,
  },
  {
    name: "Faaliyet Alanlarımız",
    key: "faaliyet-alanlari",
    collapse: [
      {
        name: "Ar-ge",
        route: "/arge",
        component: Arge,
        key: "arge",
        bannerImg: argeBanner,
        bannerTitle: "Ar-ge ve Mühendislik Hizmetleri",
      },
      {
        name: "Savunma Sanayi",
        route: "/defense-industry",
        component: Defense,
        key: "defense",
        bannerImg: defenseBanner,
        bannerTitle: "Savunma Sanayi Hizmetleri",
      },
      {
        name: "İmalat Sanati",
        route: "/manufacturing",
        component: Manufacturing,
        key: "manufacturing",
        bannerImg: manufacturingBanner,
        bannerTitle: "İmalat Sanayi Hizmetleri",
      },
    ],
  },
  {
    name: "Kataloglar",
    route: "/catalogs",
    component: CatalogsPage,
    key: "catalogs",
    bannerImg: catalogBanner,
    bannerSmall: catalogBannerSmall,
  },
];

export default routes;
