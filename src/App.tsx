import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const ServicePage = lazy(() => import("./pages/ServicePage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const Locksmith24hPage = lazy(() => import("./pages/Locksmith24hPage"));
const CerrajerosZonaPage = lazy(() => import("./pages/CerrajerosZonaPage"));
const CarpinteriaZonaPage = lazy(() => import("./pages/CarpinteriaZonaPage"));
const ServiciosPage = lazy(() => import("./pages/ServiciosPage"));
const NosotrosPage = lazy(() => import("./pages/NosotrosPage"));
const ProyectosPage = lazy(() => import("./pages/ProyectosPage"));
const ContactoPage = lazy(() => import("./pages/ContactoPage"));
const AvisoLegalPage = lazy(() => import("./pages/AvisoLegalPage"));
const PoliticaPrivacidadPage = lazy(() => import("./pages/PoliticaPrivacidadPage"));
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/servicios/:townSlug" element={<ServicePage />} />
            <Route path="/servicio/:serviceSlug" element={<ServiceDetailPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/proyectos" element={<ProyectosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/cerrajero-24h" element={<CerrajerosZonaPage />} />
            <Route path="/cerrajero-24h/:townSlug" element={<Locksmith24hPage />} />
            <Route path="/aviso-legal" element={<AvisoLegalPage />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
            <Route path="/carpinteria-metalica-zona" element={<CarpinteriaZonaPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
