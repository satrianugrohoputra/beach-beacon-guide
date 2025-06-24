
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import { PlanProvider } from '@/contexts/PlanContext';
import ThemeToggle from '@/components/ThemeToggle';
import Index from './pages/Index';
import About from './pages/About';
import Team from './pages/Team';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PlanGraceBay from './pages/PlanGraceBay';
import PlanWhitehavenBeach from './pages/PlanWhitehavenBeach';
import PlanNavagioBeach from './pages/PlanNavagioBeach';
import Custom404Page from './pages/Custom404Page';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <PlanProvider>
          <Router>
            <div className="min-h-screen bg-background text-foreground">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/plan/grace-bay" element={<PlanGraceBay />} />
                <Route path="/plan/whitehaven-beach" element={<PlanWhitehavenBeach />} />
                <Route path="/plan/navagio-beach" element={<PlanNavagioBeach />} />
                <Route path="*" element={<Custom404Page />} />
              </Routes>
              {/* Global Theme Toggle - appears on all pages */}
              <ThemeToggle />
            </div>
          </Router>
          <Toaster />
        </PlanProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
