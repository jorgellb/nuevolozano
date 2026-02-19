import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://metalesdelsureste.com';

const coreRoutes = [
    '',
    '/servicios',
    '/nosotros',
    '/proyectos',
    '/contacto',
    '/cerrajero-24h',
    '/carpinteria-metalica-zona',
    '/aviso-legal',
    '/politica-privacidad',
];

const services = [
    'estructuras-metalicas',
    'carpinteria-aluminio',
    'cerrajeria',
    'automatizacion',
    'forja-artistica',
    'mobiliario-urbano',
    'manipulado-vidrio',
    'metalisteria',
];

const towns = [
    'huercal-overa',
    'vera',
    'overa',
    'vera-playa',
    'puerto-rey',
    'garrucha',
    'villaricos',
    'mojacar',
    'palomares',
    'cuevas-de-almanzora',
    'albox',
    'zurgena',
];

// Generate all combinations
const allPaths = [];

// Core routes
coreRoutes.forEach(route => {
    allPaths.push(route);
});

// Services detail pages
services.forEach(service => {
    allPaths.push(`/servicio/${service}`);
});

// Town pages (General)
towns.forEach(town => {
    allPaths.push(`/servicios/${town}`);
});

// Town pages (Cerrajero)
towns.forEach(town => {
    allPaths.push(`/cerrajero-24h/${town}`);
});

// Priority and changefreq mapping
const getRouteMeta = (route) => {
    if (route === '') return { p: 1.0, f: 'weekly' };
    if (route.startsWith('/servicios') || route.startsWith('/cerrajero-24h') || route === '/carpinteria-metalica-zona') {
        if (route === '/servicios' || route === '/cerrajero-24h') return { p: 0.9, f: 'weekly' };
        return { p: 0.7, f: 'monthly' }; // Town specifics
    }
    if (route.startsWith('/servicio/')) return { p: 0.8, f: 'monthly' };
    if (['/nosotros', '/proyectos'].includes(route)) return { p: 0.6, f: 'monthly' };
    if (route === '/contacto') return { p: 0.7, f: 'monthly' };
    return { p: 0.3, f: 'yearly' }; // legal docs
};

let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemapXML += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
sitemapXML += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

const generateUrlEntry = (urlPath) => {
    const meta = getRouteMeta(urlPath);

    // The 'x-default' is the original unprotected path without lang identifier, ensuring redirection to right lang
    const esUrl = `${BASE_URL}/es${urlPath}`;
    const enUrl = `${BASE_URL}/en${urlPath}`;
    const xDefaultUrl = `${BASE_URL}${urlPath}`;

    return `
  <url>
    <loc>${esUrl}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />
    <changefreq>${meta.f}</changefreq>
    <priority>${meta.p.toFixed(1)}</priority>
  </url>
  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${esUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />
    <changefreq>${meta.f}</changefreq>
    <priority>${meta.p.toFixed(1)}</priority>
  </url>`;
};

allPaths.forEach(route => {
    sitemapXML += generateUrlEntry(route);
});

sitemapXML += `\n</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXML);
console.log('✅ Sitemap has been correctly generated inside public/sitemap.xml');
