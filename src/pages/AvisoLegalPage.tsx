import { HelmetProvider } from 'react-helmet-async'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'

const AvisoLegalPage = () => {
    return (
        <HelmetProvider>
            <SEOHead
                title="Aviso Legal | Metales Del Sureste Andaluz"
                description="Aviso Legal y Condiciones de Uso de Metales Del Sureste Andaluz SL."
            />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-32 pb-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Aviso Legal</h1>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web, le informa de lo siguiente:</p>

                            <ul>
                                <li><strong>Denominación social:</strong> Metales Del Sureste Andaluz SL</li>
                                <li><strong>NIF:</strong> B04738415</li>
                                <li><strong>Domicilio:</strong> C/ Paraje La Ventica, 8, 04600 Huércal-Overa, Almería, España</li>
                                <li><strong>Email:</strong> info@metalesdelsureste.com</li>
                                <li><strong>Teléfono:</strong> +34 653 94 07 50</li>
                            </ul>

                            <h3>1. OBJETO</h3>
                            <p>El sitio web facilita a los usuarios del mismo el acceso a información y servicios prestados por Metales Del Sureste Andaluz SL a aquellas personas u organizaciones interesadas en los mismos.</p>

                            <h3>2. ACCESO Y UTILIZACIÓN DEL SITIO WEB</h3>
                            <p>El acceso a la web tiene carácter gratuito. Los usuarios se comprometen a utilizar la web de conformidad con la Ley y el presente Aviso Legal.</p>

                            <h3>3. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
                            <p>Todos los contenidos de la web (textos, gráficos, logotipos, imágenes, etc.) son propiedad de Metales Del Sureste Andaluz SL o de terceros que han autorizado su uso.</p>

                            <h3>4. LEY APLICABLE Y JURISDICCIÓN</h3>
                            <p>Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes.</p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default AvisoLegalPage
