
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { VideoProvider } from "@/contexts/VideoContext";
import Index from "./pages/Index";
import VideoDemo from "./pages/VideoDemo";
import Installation from "./pages/Installation";
import ConseilsCommunaute from "./pages/ConseilsCommunaute";
import ModuleESP32CAM from "./pages/ModuleESP32CAM";
import ModuleESP32Simple from "./pages/ModuleESP32Simple";
import ModuleESP32CAMMB from "./pages/ModuleESP32CAMMB";
import ModuleESP8266 from "./pages/ModuleESP8266";
import ProjectLibrary from "./pages/ProjectLibrary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <VideoProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/demo" element={<VideoDemo />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/conseils" element={<ConseilsCommunaute />} />
              <Route path="/modules/esp32cam" element={<ModuleESP32CAM />} />
              <Route path="/modules/esp32simple" element={<ModuleESP32Simple />} />
              <Route path="/modules/esp32cam-mb" element={<ModuleESP32CAMMB />} />
              <Route path="/modules/esp8266" element={<ModuleESP8266 />} />
              <Route path="/projets" element={<ProjectLibrary />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </VideoProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
