import { useState, useEffect } from "react";

export type Page = "home" | "work" | "about" | "services" | "blog" | "contact" | "blog-detail" | "work-detail";

interface RouterProps {
  children: (page: Page, setPage: (page: Page, id?: string) => void, params?: { id?: string }) => React.ReactNode;
}

export function Router({ children }: RouterProps) {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [params, setParams] = useState<{ id?: string }>({});

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const [page, id] = hash.split('/');
      
      if (page && ["home", "work", "about", "services", "blog", "contact", "blog-detail", "work-detail"].includes(page)) {
        setCurrentPage(page as Page);
        setParams({ id });
      } else {
        setCurrentPage("home");
        setParams({});
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (page: Page, id?: string) => {
    if (id) {
      window.location.hash = `${page}/${id}`;
    } else {
      window.location.hash = page;
    }
    setCurrentPage(page);
    setParams({ id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <>{children(currentPage, navigate, params)}</>;
}