
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Quotations from "./pages/Quotations";
import Analytics from "./pages/Analytics";
import UserManagement from "./pages/UserManagement";
import UserDetails from "./pages/UserDetails";
import AgentProfile from "./pages/AgentProfile";
import AgentLeads from "./pages/AgentLeads";
import SalesProfile from "./pages/SalesProfile";
import SalesLeads from "./pages/SalesLeads";
import SalesQuotations from "./pages/SalesQuotations";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from 'react';

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [location.pathname]);

  // If on login page or not authenticated, show login
  if (location.pathname === '/login' || !isAuthenticated) {
    return <Login />;
  }

  // For sales role, use mobile-optimized layout
  if (currentUser?.role === 'sales') {
    return (
      <div className="min-h-screen bg-background">
        <main className="w-full">
          <Routes>
            <Route path="/sales/profile" element={<SalesProfile />} />
            <Route path="/sales/leads" element={<SalesLeads />} />
            <Route path="/sales/quotations" element={<SalesQuotations />} />
            <Route path="/" element={<SalesProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1">
          <div className="p-6">
            <div className="mb-4">
              <SidebarTrigger className="mb-4" />
            </div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/quotations" element={<Quotations />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/users/:userId" element={<UserDetails />} />
              <Route path="/agent/profile" element={<AgentProfile />} />
              <Route path="/agent/leads" element={<AgentLeads />} />
              <Route path="/login" element={<Login />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
