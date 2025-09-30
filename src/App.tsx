import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; // ✅ Correct for plain React
import ReactGA from "react-ga4";

const queryClient = new QueryClient();

// 📦 GA page tracking component
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-JJ9CGXLP3R"); // ✅ Your GA4 Measurement ID
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GAListener /> {/* 🧠 Track route changes */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <SpeedInsights /> {/* ✅ Correct placement inside BrowserRouter */}
        </BrowserRouter>
        <Analytics /> {/* ✅ Vercel Analytics */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
