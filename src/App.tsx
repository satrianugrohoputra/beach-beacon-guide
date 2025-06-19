
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Custom404Page from "./pages/Custom404Page";
import PlanGraceBay from "./pages/PlanGraceBay";
import PlanWhitehavenBeach from "./pages/PlanWhitehavenBeach";
import PlanNavagioBeach from "./pages/PlanNavagioBeach";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<Custom404Page />} />
          <Route path="/plan/grace-bay" element={<PlanGraceBay />} />
          <Route path="/plan/whitehaven-beach" element={<PlanWhitehavenBeach />} />
          <Route path="/plan/navagio-beach" element={<PlanNavagioBeach />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
