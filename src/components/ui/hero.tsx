import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Heart,
  Check,
  X,
  ChevronDown,
  ShieldCheck,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import mockup from "@/assets/mockup-educando.png";
import heroCorner from "@/assets/hero-corner.png";
import bonus1 from "@/assets/bonus-1-updates.png";
import bonus2 from "@/assets/bonus-2-vip.png";
import bonus3 from "@/assets/bonus-3-festa-junina.png";
import atividade1 from "@/assets/atividade-1.png";
import atividade2 from "@/assets/atividade-2.png";
import atividade3 from "@/assets/atividade-3.png";
import atividade4 from "@/assets/atividade-4.png";
import atividade5 from "@/assets/atividade-5.png";
import antesDepois from "@/assets/antes-depois.png";
import kitAtividades from "@/assets/kit-atividades.png";
import depoimento1 from "@/assets/depoimento-1.png";
import depoimento2 from "@/assets/depoimento-2.png";
import depoimento3 from "@/assets/depoimento-3.png";
import depoimento4 from "@/assets/depoimento-4.png";
import depoimento5 from "@/assets/depoimento-5.png";
import depoimento6 from "@/assets/depoimento-6.png";

const CHECKOUT_URL = "https://pay.cakto.com.br/3fvtfxz_792872";

const activitySlides = [
  { title: "Fábulas & Leitura", img: atividade1 },
  { title: "Multiplicação", img: atividade2 },
  { title: "Operações", img: atividade3 },
  { title: "Caligrafia", img: atividade4 },
  { title: "Alfabetização", img: atividade5 },
];

const benefits = [
  {
    no: "Passar a noite criando atividade do zero",
    yes: "Plano da semana pronto em 5 minutos",
  },
  {
    no: "Pagar do próprio bolso por imprimir material",
    yes: "Centenas de PDFs prontos pra imprimir",
  },
  {
    no: "Sentir culpa por não dar conta de tudo",
    yes: "Tempo livre pra você e sua família",
  },
  {
    no: "Aulas repetitivas que não engajam",
    yes: "Atividades dinâmicas que prendem a turma",
  },
];

const testimonials = [
  { img: depoimento1 },
  { img: depoimento2 },
  { img: depoimento3 },
  { img: depoimento5 },
  { img: depoimento6 },
];


const faqs = [
  {
    q: "Pra quem é o Educando?",
    a: "Para professoras do 1º ao 5º ano que querem economizar tempo no planejamento e ter atividades prontas, dinâmicas e divertidas pra aplicar em sala.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento, você recebe o login por e-mail e já pode baixar e imprimir tudo.",
  },
  {
    q: "Posso imprimir e usar com toda minha turma?",
    a: "Sim! Você pode imprimir quantas vezes quiser pra usar com seus alunos. O uso comercial (revenda) não é permitido.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim, a plataforma é 100% responsiva. Você acessa do computador, tablet ou celular.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Não gostou? Devolvemos 100% do valor, sem perguntas.",
  },
];

function CurveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div aria-hidden className="relative -mt-px w-full leading-[0]" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[100px]"
      >
        <path
          d="M0,40 C320,120 720,0 1080,60 C1260,90 1380,80 1440,50 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}

function CtaButton({
  children,
  className = "",
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "md";
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-green font-display font-bold uppercase tracking-wide text-white shadow-[0_15px_30px_-10px_rgba(34,197,94,0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.8)] ${
        size === "lg" ? "px-8 py-5 text-lg" : "px-6 py-3.5 text-sm"
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white px-3 py-2.5 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.2)] transition-transform md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-between gap-3 rounded-xl bg-brand-green px-4 py-3 shadow-md"
      >
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80 line-through">
            R$ 97
          </span>
          <span className="font-display text-lg font-bold text-white">R$ 27 hoje</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-lg bg-white/15 px-3 py-2 font-display text-sm font-bold uppercase text-white">
          Garantir acesso <ArrowRight className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
}

function Stars({ size = "sm" }: { size?: "sm" | "md" }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"} fill-yellow-400 text-yellow-400`}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <>
      <HeroSection />
      <CurveDivider from="#ffffff" to="var(--background)" />
      <ActivityCarousel />
      <CurveDivider from="var(--background)" to="#ffffff" />
      <AntesDepoisSection />
      <CurveDivider from="#ffffff" to="var(--background)" />
      <SocialProof />
      <CurveDivider from="var(--background)" to="#ffffff" />
      <WhyForYou />
      <CurveDivider from="#ffffff" to="var(--background)" />
      <BonusSection />
      <CurveDivider from="var(--background)" to="#ffffff" />
      <OfferCard />
      <CurveDivider from="#ffffff" to="var(--background)" />
      <FAQ />
      <StickyMobileCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <img
        src={heroCorner}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 w-40 select-none md:w-64 lg:w-80"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-10 pt-10 text-center md:pt-16">
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green md:text-sm"
        >
          <Stars />
          <span>+8.000 professoras já usam</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="italic text-brand-pink">Sua aula</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          planejada em{" "}
          <span className="relative inline-block whitespace-nowrap">
            5 minutos.
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8 Q 50 2, 100 6 T 198 5"
                stroke="var(--brand-pink)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-background/80 md:text-lg"
        >
          Mais de <strong>1.000 atividades prontas</strong> pra baixar e imprimir.
          Pare de virar a noite criando do zero e <strong>volte a sentir prazer em ensinar</strong>.
        </motion.p>

        {/* CTA above the fold */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-7 flex flex-col items-center gap-3"
        >
          <CtaButton>Quero meu acesso por R$ 27</CtaButton>
          <div className="flex items-center gap-3 text-xs text-background/70 md:text-sm">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-brand-green" />
              7 dias de garantia
            </span>
            <span className="h-3 w-px bg-background/30" />
            <span>Acesso vitalício</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-10 w-full max-w-4xl"
        >
          <img
            src={mockup}
            alt="Plataforma Educando exibida em laptop e celular"
            className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <p className="font-display text-base font-semibold uppercase tracking-wide text-brand-pink md:text-lg">
            +1000 materiais
          </p>
          <p className="font-display text-2xl font-semibold italic text-background md:text-3xl">
            Materiais prontos para <span className="text-brand-pink">baixar e imprimir</span> na palma da sua mão
          </p>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src={kitAtividades}
            alt="Kit completo de atividades pedagógicas"
            className="mt-6 w-full max-w-3xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function AntesDepoisSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl font-display text-2xl font-semibold leading-[1.15] tracking-tight text-background sm:text-3xl md:text-5xl lg:text-6xl"
        >
          Reduza o <span className="italic text-primary">estresse da rotina</span>,
          <br className="hidden sm:block" /> organize a semana em minutos
          <br className="hidden sm:block" /> e volte a sentir prazer em ensinar.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]"
        >
          <img
            src={antesDepois}
            alt="Antes e depois: professora cansada x professora realizada"
            className="w-full"
          />
        </motion.div>

        <div className="mt-10">
          <CtaButton>Quero essa mudança por R$ 27</CtaButton>
        </div>
      </div>
    </section>
  );
}

function ActivityCarousel() {
  return (
    <section className="relative overflow-hidden bg-background py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-5xl px-6 text-center"
      >
        <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Conteúdo da plataforma
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
          Veja algumas atividades por dentro
        </h2>
        <p className="mt-3 text-foreground/75">
          Aqui você encontra atividades para qualquer matéria separada por categorias.
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
        />

        <div className="flex w-max animate-[scroll_40s_linear_infinite] gap-6 px-6">
          {[...activitySlides, ...activitySlides, ...activitySlides].map((s, i) => (
            <div
              key={i}
              className="flex h-[420px] w-72 shrink-0 flex-col overflow-hidden rounded-3xl bg-white p-3 shadow-[var(--shadow-card)]"
            >
              <div className="flex-1 overflow-hidden rounded-2xl bg-white">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="px-2 pb-1 pt-3 text-center font-display text-base font-semibold text-background">
                {s.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function WhyForYou() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Por que isso é pra você
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-background md:text-5xl">
            Você reconhece esse cansaço?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-background/75">
            Se você se identifica com pelo menos UMA dessas situações, o
            Educando foi feito exatamente pra você.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-2 overflow-hidden rounded-2xl border-2 border-primary/40 bg-primary shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-start gap-3 border-r border-background/15 bg-destructive/10 p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-destructive text-white">
                  <X className="h-4 w-4" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-destructive">
                    Antes
                  </div>
                  <p className="mt-1 text-sm font-medium text-destructive">{b.no}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-brand-green/15 p-5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-green">
                    Depois
                  </div>
                  <p className="mt-1 text-sm font-semibold text-brand-green">{b.yes}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton>Sim, isso é pra mim — quero acesso</CtaButton>
        </div>
      </div>
    </section>
  );
}

function BonusSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-5xl font-bold text-foreground md:text-6xl">
            🎁 Bônus exclusivos
          </h2>
          <p className="mt-4 font-display text-2xl font-semibold text-foreground/85 md:text-3xl">
            Comprando hoje, você leva grátis:
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <BonusCard
            image={bonus1}
            description="Toda semana adicionamos novas atividades à plataforma. Você recebe acesso vitalício a todas as próximas atualizações sem pagar nada a mais."
            value="R$ 45"
            delay={0}
          />
          <BonusCard
            image={bonus2}
            description="Comunidade exclusiva com outras professoras pra trocar ideias, tirar dúvidas e receber materiais antes de todo mundo."
            value="R$ 45"
            delay={0.15}
          />
          <BonusCard
            image={bonus3}
            description="Kit completo de materiais de decoração prontos pra imprimir e deixar sua sala de aula linda na Festa Junina."
            value="R$ 45"
            delay={0.3}
          />
        </div>

        {/* Stack de valor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]"
        >
          <h3 className="text-center font-display text-2xl font-bold text-background md:text-3xl">
            Veja tudo o que você leva:
          </h3>
          <ul className="mt-6 space-y-3 text-background">
            {[
              { label: "Plataforma Educando (+1000 atividades)", value: "R$ 97" },
              { label: "Bônus 1 — Atualizações vitalícias", value: "R$ 45" },
              { label: "Bônus 2 — Grupo VIP no WhatsApp", value: "R$ 45" },
              { label: "Bônus 3 — Kit Festa Junina", value: "R$ 45" },
            ].map((item) => (
              <li key={item.label} className="flex items-start justify-between gap-3 border-b border-background/10 pb-3">
                <span className="flex items-start gap-2 text-sm md:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" strokeWidth={3} />
                  {item.label}
                </span>
                <span className="font-semibold text-background/60">{item.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between">
            <span className="font-display text-lg font-bold text-background">Valor total:</span>
            <span className="font-display text-2xl font-bold text-background/50 line-through">R$ 232</span>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-2xl bg-brand-green/10 px-4 py-4">
            <span className="font-display text-lg font-bold text-brand-green">Hoje você paga:</span>
            <span className="font-display text-3xl font-extrabold text-brand-green md:text-4xl">R$ 27</span>
          </div>
          <div className="mt-6 flex justify-center">
            <CtaButton>Quero garantir tudo isso</CtaButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BonusCard({
  image,
  description,
  value,
  delay,
}: {
  image: string;
  description: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]"
    >
      <img
        src={image}
        alt={description}
        loading="lazy"
        className="h-auto w-full max-w-md object-contain"
      />
      <p className="mt-6 max-w-md text-base text-background/85">{description}</p>
      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-4 py-2 text-sm font-semibold text-brand-green">
        Valor real: <span className="line-through opacity-70">{value}</span> · Hoje grátis
      </div>
    </motion.div>
  );
}

function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-5xl px-6 text-center"
      >
        <div className="mb-5 inline-flex flex-col items-center gap-2">
          <Stars size="md" />
          <span className="text-sm font-semibold text-foreground/80">
            Avaliação 4.9 baseada em centenas de avaliações
          </span>
        </div>
        <h2 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
          +8.000 professoras já respiram melhor
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-foreground/75">
          Veja o que estão dizendo as professoras que já transformaram a rotina:
        </p>
      </motion.div>

      <div className="relative mx-auto h-[600px] w-full max-w-md overflow-hidden px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background to-transparent"
        />
        <div className="flex animate-[scroll-vertical_35s_linear_infinite] flex-col gap-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]"
            >
              <img
                src={t.img}
                alt="Depoimento de professora"
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <CtaButton>Quero entrar pra esse time</CtaButton>
      </div>

      <style>{`
        @keyframes scroll-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
}

function CountdownClock() {
  const [time, setTime] = useState({ h: 2, m: 59, s: 59 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="rounded-xl bg-background px-4 py-3 font-display text-3xl font-bold text-foreground tabular-nums shadow-lg md:text-4xl">
        {pad(value)}
      </div>
      <span className="mt-1.5 text-[10px] font-bold uppercase tracking-widest text-background/70">
        {label}
      </span>
    </div>
  );
  return (
    <div className="mx-auto mb-8 flex flex-col items-center gap-3">
      <div className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-background">
        <Clock className="h-4 w-4" /> Oferta expira em
      </div>
      <div className="flex items-start gap-2">
        <Box value={time.h} label="horas" />
        <span className="pt-2 font-display text-3xl font-bold text-background md:text-4xl">:</span>
        <Box value={time.m} label="min" />
        <span className="pt-2 font-display text-3xl font-bold text-background md:text-4xl">:</span>
        <Box value={time.s} label="seg" />
      </div>
    </div>
  );
}

function OfferCard() {
  return (
    <section id="oferta" className="relative bg-white py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <CountdownClock />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-background p-8 text-left shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] md:p-10"
        >
          <DecorCross className="absolute -left-4 top-6 h-20 w-20 rotate-12 text-foreground/10" />
          <DecorCross className="absolute right-6 top-16 h-14 w-14 -rotate-12 text-foreground/10" />
          <DecorCross className="absolute -right-6 bottom-32 h-24 w-24 rotate-45 text-foreground/10" />
          <DecorCross className="absolute left-8 bottom-28 h-12 w-12 -rotate-6 text-foreground/10" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3 w-3" /> Oferta de lançamento
            </div>

            <h3 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-foreground md:text-6xl">
              Educando
            </h3>

            <div className="mt-1 text-sm font-semibold text-foreground/70 line-through">
              de R$ 232
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-5xl font-bold text-brand-green md:text-6xl">
                R$27
              </span>
              <span className="font-display text-2xl font-semibold text-foreground/70">
                /único
              </span>
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-pink">
              Pagamento único · Sem mensalidade
            </div>

            <p className="mt-6 max-w-sm font-display text-lg font-semibold leading-snug text-foreground">
              Acesso vitalício à plataforma com +1000 atividades prontas, 3 bônus
              exclusivos e 7 dias de garantia.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-foreground/90">
              {[
                "+1000 atividades prontas pra imprimir",
                "Atualizações semanais (Bônus R$45)",
                "Grupo VIP no WhatsApp (Bônus R$45)",
                "Kit Festa Junina completo (Bônus R$45)",
                "Acesso vitalício, sem mensalidade",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex animate-pulse items-center justify-center gap-2 rounded-2xl bg-brand-green px-8 py-5 font-display text-lg font-bold uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              Quero garantir meu acesso <ArrowRight className="h-5 w-5" />
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-foreground/70">
              <ShieldCheck className="h-4 w-4 text-brand-green" />
              Compra 100% segura · 7 dias de garantia
            </div>
          </div>
        </motion.div>

        {/* Garantia destacada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-lg items-start gap-4 rounded-2xl border-2 border-brand-green/30 bg-brand-green/5 p-5 text-left"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-background">
              Garantia incondicional de 7 dias
            </h4>
            <p className="mt-1 text-sm text-background/75">
              Compre, teste por 7 dias. Se não gostar por qualquer motivo, devolvemos
              <strong> 100% do valor</strong>. O risco é todo nosso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DecorCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden>
      <rect x="40" y="0" width="20" height="100" rx="4" />
      <rect x="0" y="40" width="100" height="20" rx="4" />
    </svg>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-background pt-24 pb-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Tire suas dúvidas
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-foreground/75">
            Tudo o que você precisa saber antes de começar.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-lg font-semibold text-foreground">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-foreground/80">
                      {f.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA final pós-FAQ */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-center font-display text-xl font-semibold text-foreground/90">
            Pronta pra transformar sua rotina?
          </p>
          <CtaButton>Quero meu acesso por R$ 27</CtaButton>
          <p className="text-xs text-foreground/60">7 dias de garantia · acesso vitalício</p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-sm text-foreground/70">
          <Heart className="h-4 w-4 text-accent" /> Feito com carinho pra quem
          ensina o Brasil.
        </div>
      </div>
    </section>
  );
}
