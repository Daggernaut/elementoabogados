import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Nav, Footer } from "./index";
import { partners, associates, type Partner, type Associate } from "@/lib/team";
import { partnersEn, associateProfilesEn } from "@/lib/team.en";
import { useLang } from "@/lib/i18n";
import { useUI } from "@/lib/translations";
import isologo from "@/assets/isologo.png.asset.json";

const practiceSlugMap: Record<string, string> = {
  "Litigios Penales": "litigio-penal",
  Compliance: "compliance-y-gobierno-corporativo",
  "Arbitraje y Resolución de Controversias": "resolucion-de-controversias",
  Corporativo: "derecho-corporativo",
  Inmobiliario: "derecho-inmobiliario",
  "Banca y Finanzas": "banca-y-finanzas",
  "Fusiones y adquisiciones": "fusiones-y-adquisiciones",
  "Resolución de Controversias en Materia Civil y Comercial": "resolucion-de-controversias",
  Tributario: "fiscal",
  "Derecho Administrativo y Constitucional": "derecho-constitucional",
  "Minería e Inmobiliario": "derecho-inmobiliario",
  Laboral: "migratorio-y-laboral",
  Migratorio: "migratorio-y-laboral",
  Cumplimiento: "compliance-y-gobierno-corporativo",
};

const toProfile = (a: Associate): Partner => ({
  slug: a.slug ?? "",
  name: a.name,
  role: a.role,
  headline: a.headline ?? "",
  photo: a.photo,
  photoCutout: a.photoCutout,
  email: a.email ?? "info@elementoabogados.com",
  phone: a.phone ?? "+(502) 2339 - 1922",
  bio: a.bio ?? [],
  education: a.education ?? [],
  memberships: a.memberships,
  practice: a.practice,
  languages: a.languages,
});

const profiles: Partner[] = [...partners, ...associates.filter((a) => a.slug).map(toProfile)];

const localizeProfile = (profile: Partner, lang: "es" | "en"): Partner => {
  if (lang !== "en") return profile;
  const en = partnersEn[profile.slug] ?? associateProfilesEn[profile.slug];
  return en ? { ...profile, ...en } : profile;
};

export const Route = createFileRoute("/equipo/$slug")({
  loader: ({ params }) => {
    const partner = profiles.find((p) => p.slug === params.slug);
    if (!partner) throw notFound();
    return { partner };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Perfil no encontrado | Elemento Abogados" }, { name: "robots", content: "noindex" }] };
    }
    const { partner } = loaderData;
    return {
      meta: [
        { title: `${partner.name} | Elemento Abogados` },
        { name: "description", content: `${partner.name}, ${partner.role}.` },
        { property: "og:title", content: `${partner.name} | Elemento Abogados` },
        { property: "og:description", content: `${partner.name}, ${partner.role}.` },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PartnerPage,
});

// power3.out equivalent
const ease = [0.215, 0.61, 0.355, 1] as const;


function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease, delay: i * 0.1 }}
            className="flex gap-3 leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function PartnerPage() {
  const { partner: esPartner } = Route.useLoaderData() as { partner: Partner };
  const { lang } = useLang();
  const t = useUI();
  const partner = localizeProfile(esPartner, lang);
  const index = profiles.findIndex((p) => p.slug === partner.slug);
  const prev = profiles[(index - 1 + profiles.length) % profiles.length];
  const next = profiles[(index + 1) % profiles.length];

  const cutout = partner.photoCutout;

  return (
    <main key={partner.slug} className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <Nav />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }}
        className="overflow-hidden bg-gradient-hero pt-32 text-primary-foreground"
      >
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Link to="/" className="hover:text-white">{t.common.home}</Link>
            <span>/</span>
            <Link to="/equipo" className="hover:text-white">{t.nav.team}</Link>
            <span>/</span>
            <span className="text-white">{partner.name}</span>
          </motion.nav>
          <div className="mt-6 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: "110%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="font-display text-5xl font-bold tracking-tight sm:text-6xl"
            >
              {partner.name}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.22 }}
            className="mt-4 max-w-2xl text-white/75"
          >
            {partner.role}{partner.headline && ` · ${partner.headline}`}
          </motion.p>
        </div>
      </motion.section>

      <section className="relative py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          {/* Columna izquierda: logo + foto + tarjeta */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Logo de fondo, entra primero */}
              <motion.img
                src={isologo.url}
                alt=""
                aria-hidden
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.16, scale: 1 }}
                transition={{ duration: 1, ease }}
                className="pointer-events-none absolute left-1/2 top-0 h-[92%] w-auto -translate-x-1/2 select-none"
              />
              {/* Foto encima del logo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease, delay: 0.45 }}
                className="relative"
              >
                {cutout ? (
                  <img
                    src={cutout}
                    alt={partner.name}
                    className="relative mx-auto block w-full max-w-[420px]"
                  />
                ) : (
                  <div className="overflow-hidden rounded-3xl border border-border bg-card">
                    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-primary">
                      <img
                        src={partner.photo}
                        alt={partner.name}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Tarjeta de información */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease, delay: 0.57 }}
                className="relative -mt-6 rounded-3xl border border-border bg-card p-6 text-sm shadow-lg"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {t.team.contactInfo}
                </div>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <a href={`tel:+${partner.phone.replace(/\D/g, "")}`} className="hover:text-primary">{partner.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <a href={`mailto:${partner.email}`} className="break-all hover:text-primary">{partner.email}</a>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    {t.common.officeAddress}
                  </li>
                </ul>

                {partner.practice?.length ? (
                  <>
                    <div className="my-5 border-t border-border" />
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {t.team.practiceAreas}
                    </div>
                    <ul className="mt-3 space-y-2">
                      {partner.practice.map((area, areaIndex) => {
                        const areaSlug = practiceSlugMap[esPartner.practice?.[areaIndex] ?? area];
                        return (
                          <li key={area}>
                            {areaSlug ? (
                              <Link
                                to="/servicios/$slug"
                                params={{ slug: areaSlug }}
                                className="text-foreground transition-colors hover:text-primary"
                              >
                                {area}
                              </Link>
                            ) : (
                              <span className="text-foreground">{area}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : null}
              </motion.div>
            </div>
          </div>

          {/* Columna derecha: perfil */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease, delay: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="space-y-4 text-justify leading-relaxed text-muted-foreground">
              {partner.bio.map((p, i) => (
                <motion.p
                  key={p.slice(0, 40)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {partner.education.length > 0 && (
              <div className="mt-12">
                <InfoBlock title={t.team.education} items={partner.education} />
              </div>
            )}

            {!!partner.memberships?.length && (
              <div className="mt-12">
                <InfoBlock title={t.team.memberships} items={partner.memberships} />
              </div>
            )}

            {!!partner.languages?.length && (
              <div className="mt-12">
                <InfoBlock title={t.team.languages} items={[partner.languages.join(" / ")]} />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
              <Link
                to="/equipo/$slug"
                params={{ slug: prev.slug }}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" /> {prev.name}
              </Link>
              <Link
                to="/equipo/$slug"
                params={{ slug: next.slug }}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                {next.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
