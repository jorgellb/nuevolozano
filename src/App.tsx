import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './i18n';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LanguageRedirect } from "./components/LanguageRedirect";

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
            {/* Root redirect to detected language */}
            <Route path="/" element={<LanguageRedirect />} />
            
            {/* All routes under /:lang prefix */}
            <Route path="/:lang" element={<Index />} />
            <Route path="/:lang/servicios" element={<ServiciosPage />} />
            <Route path="/:lang/servicios/:townSlug" element={<ServicePage />} />
            <Route path="/:lang/servicio/:serviceSlug" element={<ServiceDetailPage />} />
            <Route path="/:lang/nosotros" element={<NosotrosPage />} />
            <Route path="/:lang/proyectos" element={<ProyectosPage />} />
            <Route path="/:lang/contacto" element={<ContactoPage />} />
            <Route path="/:lang/cerrajero-24h" element={<CerrajerosZonaPage />} />
            <Route path="/:lang/cerrajero-24h/:townSlug" element={<Locksmith24hPage />} />
            <Route path="/:lang/aviso-legal" element={<AvisoLegalPage />} />
            <Route path="/:lang/politica-privacidad" element={<PoliticaPrivacidadPage />} />
            <Route path="/:lang/carpinteria-metalica-zona" element={<CarpinteriaZonaPage />} />
            
            {/* Legacy routes without lang prefix - redirect to /es/ */}
            <Route path="/servicios" element={<LanguageRedirect />} />
            <Route path="/servicios/:townSlug" element={<LanguageRedirect />} />
            <Route path="/servicio/:serviceSlug" element={<LanguageRedirect />} />
            <Route path="/nosotros" element={<LanguageRedirect />} />
            <Route path="/proyectos" element={<LanguageRedirect />} />
            <Route path="/contacto" element={<LanguageRedirect />} />
            <Route path="/cerrajero-24h" element={<LanguageRedirect />} />
            <Route path="/cerrajero-24h/:townSlug" element={<LanguageRedirect />} />
            <Route path="/aviso-legal" element={<LanguageRedirect />} />
            <Route path="/politica-privacidad" element={<LanguageRedirect />} />
            <Route path="/carpinteria-metalica-zona" element={<LanguageRedirect />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
