import { services as servicesEs, type Service } from "@/lib/services";
import { servicesEn } from "@/lib/services.en";
import {
  partners as partnersEs,
  associates as associatesEs,
  type Partner,
  type Associate,
} from "@/lib/team";
import { partnersEn, associatesEn } from "@/lib/team.en";
import { useLang, type Lang } from "@/lib/i18n";

export function localizeService(service: Service, lang: Lang): Service {
  if (lang !== "en") return service;
  const en = servicesEn[service.slug];
  return en ? { ...service, ...en } : service;
}

export function localizeServices(lang: Lang): Service[] {
  return servicesEs.map((s) => localizeService(s, lang));
}

export function localizePartner(partner: Partner, lang: Lang): Partner {
  if (lang !== "en") return partner;
  const en = partnersEn[partner.slug];
  return en ? { ...partner, ...en } : partner;
}

export function localizeAssociate(associate: Associate, lang: Lang): Associate {
  if (lang !== "en") return associate;
  const en = associatesEn[associate.name];
  return en ? { ...associate, ...en } : associate;
}

export function useServices(): Service[] {
  const { lang } = useLang();
  return localizeServices(lang);
}

export function usePartners(): Partner[] {
  const { lang } = useLang();
  return partnersEs.map((p) => localizePartner(p, lang));
}

export function useAssociates(): Associate[] {
  const { lang } = useLang();
  return associatesEs.map((a) => localizeAssociate(a, lang));
}
