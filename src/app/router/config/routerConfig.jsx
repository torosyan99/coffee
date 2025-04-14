import { MainPage } from "@/pages/MainPage";
import { NewsPage } from "@/pages/NewsPage";
import { AboutPage } from "@/pages/AboutPage";
import { CatalogPage } from "@/pages/CatalogPage";
import { ContactsPage } from "@/pages/ContactsPage";

export const routerConfig = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
];
