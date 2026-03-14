import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";

// ✅ Lazy load CaseStudy to improve code splitting
const CaseStudy = lazy(() => 
  import("./pages/CaseStudy").then(module => ({ 
    default: module.CaseStudy 
  }))
);

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c0576f]"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { 
        path: "projects/:projectId", 
        Component: () => (
          <Suspense fallback={<LoadingFallback />}>
            <CaseStudy />
          </Suspense>
        ),
      },
    ],
  },
]);
