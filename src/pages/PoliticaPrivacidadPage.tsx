import { HelmetProvider } from 'react-helmet-async'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'

const PoliticaPrivacidadPage = () => {
    return (
        <HelmetProvider>
            <SEOHead
                title="Política de Privacidad | Metales Del Sureste Andaluz"
                description="Política de Privacidad y Protección de Datos de Metales Del Sureste Andaluz SL."
            />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-32 pb-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Política de Privacidad</h1>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p>Metales Del Sureste Andaluz SL informa a los usuarios del sitio web sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través de su sitio web.</p>

                            <h3>1. Responsable del tratamiento</h3>
                            <ul>
                                <li><strong>Identidad:</strong> Metales Del Sureste Andaluz SL</li>
                                <li><strong>NIF:</strong> B04738415</li>
                                <li><strong>Dirección:</strong> C/ Paraje La Ventica, 8, 04600 Huércal-Overa, Almería, España</li>
                                <li><strong>Email:</strong> info@metalesdelsureste.com</li>
                            </ul>

                            <h3>2. Finalidad del tratamiento</h3>
                            <p>Tratamos la información que nos facilitan los interesados con el fin de gestionar el envío de la información que nos soliciten y facilitar a los interesados ofertas de productos y servicios de su interés.</p>

                            <h3>3. Legitimación</h3>
                            <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado al rellenar los formularios de contacto.</p>

                            <h3>4. Destinatarios</h3>
                            <p>Los datos no se cederán a terceros salvo obligación legal.</p>

                            <h3>5. Derechos</h3>
                            <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Metales Del Sureste Andaluz SL estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos.</p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default PoliticaPrivacidadPage
