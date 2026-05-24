export const WHATSAPP_NUMBER = "50254764558";
export const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Tu Dientito, quisiera información para agendar una cita 🦷")}`;

export const SERVICES = [
  {
    icon: "tooth",
    title: "Cuidado dental niños",
    desc: "Primeras visitas, limpiezas, sellantes y fluorización en un ambiente diseñado para que tu peque sonría.",
    tag: "Odontopediatría",
    bg: "#E1F4FC",
  },
  {
    icon: "smile",
    title: "Cuidado dental adultos",
    desc: "Chequeos preventivos, limpiezas profundas y restauraciones para mantener una boca saludable.",
    tag: "Adultos",
    bg: "#FFF2E8",
  },
  {
    icon: "sparkle",
    title: "Tratamientos especiales",
    desc: "Brackets, blanqueamientos, endodoncias y cirugías menores con la última tecnología.",
    tag: "Ortodoncia",
    bg: "#F0EBFF",
  },
  {
    icon: "shield",
    title: "Emergencias dentales",
    desc: "Disponibles 24/7. Si hay dolor o un accidente, llámanos y te atendemos lo antes posible.",
    tag: "24/7",
    bg: "#E8F8EE",
  },
] as const;

export const WHY = [
  {
    h: "Equipo especializado en niños",
    p: "Odontólogos certificados en pediatría con años de experiencia haciendo que la primera visita sea inolvidable (en el buen sentido).",
  },
  {
    h: "Metodología cariñosa y profesional",
    p: "Explicamos cada paso con palabras simples, premios y mucha paciencia. Cero gritos, cero apuros — solo confianza.",
  },
  {
    h: "Ambiente seguro y amigable",
    p: "Espacios pensados para niños: colores suaves, juguetes, libros y protocolos de bioseguridad de hospital.",
  },
] as const;

export const BOOKING_REASONS = [
  { v: "kids",  l: "Limpieza niños"        },
  { v: "adult", l: "Limpieza adultos"      },
  { v: "ortho", l: "Brackets / Ortodoncia" },
  { v: "emerg", l: "Emergencia / dolor"    },
  { v: "other", l: "Otro motivo"           },
] as const;

export const DAY_NAMES  = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] as const;
export const MONTH_NAMES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"] as const;
