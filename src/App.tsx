import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Hospitals from "./pages/Hospitals";
import Ambulances from "./pages/Ambulances";
import Tracking from "./pages/Tracking";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/DashboardLayout";
import UserHome from "./pages/user/UserHome";
import UserRequest from "./pages/user/UserRequest";
import UserHospitals from "./pages/user/UserHospitals";
import UserTrack from "./pages/user/UserTrack";

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
          {/* User-facing pages */}
          <Route path="/user" element={<UserHome />} />
          <Route path="/user/request" element={<UserRequest />} />
          <Route path="/user/hospitals" element={<UserHospitals />} />
          <Route path="/user/track" element={<UserTrack />} />
          {/* Admin pages */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/ambulances" element={<Ambulances />} />
            <Route path="/tracking" element={<Tracking />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
