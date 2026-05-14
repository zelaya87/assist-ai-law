import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Scale,
  BookOpen,
  Briefcase,
  HeartPulse,
  Bus,
  Wallet,
  Home,
  Clock,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Search,
  Info,
  ChevronRight,
  Users,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DireitosPcD — Guia da Lei Brasileira de Inclusão" },
      {
        name: "description",
        content:
          "Guia informativo sobre a Lei Brasileira de Inclusão (LBI) e os direitos da Pessoa com Deficiência no Brasil.",
      },
    ],
  }),
});

type Right = {
  id: number;
  title: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
  color: string;
  lightColor: string;
  textColor: string;
};

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRight, setSelectedRight] = useState<Right | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const rightsData: Right[] = [
    {
      id: 1,
      title: "Igualdade e Não Discriminação",
      icon: <Scale className="w-7 h-7 text-white" />,
      summary: "Garantia de isonomia plena e proteção contra qualquer ato discriminatório.",
      details: [
        "Proibição de discriminação em qualquer âmbito.",
        "LBI tipifica negligência como crime.",
        "Igualdade de oportunidades garantida.",
      ],
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      id: 2,
      title: "Direito à Educação",
      icon: <BookOpen className="w-7 h-7 text-white" />,
      summary: "Acesso ao sistema educacional inclusivo e especializado sem taxas extras.",
      details: [
        "Matrícula obrigatória em escolas regulares.",
        "Acesso ao AEE gratuito.",
        "Vedada cobrança extra em instituições privadas.",
      ],
      color: "bg-indigo-600",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
    {
      id: 3,
      title: "Direito ao Trabalho",
      icon: <Briefcase className="w-7 h-7 text-white" />,
      summary: "Cotas obrigatórias e adaptação do ambiente laboral para acessibilidade.",
      details: [
        "Lei de Cotas (Art. 93 da Lei 8.213/91).",
        "Adaptação razoável do posto de trabalho.",
        "Igualdade salarial obrigatória.",
      ],
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-700",
    },
    {
      id: 4,
      title: "Direito à Saúde",
      icon: <HeartPulse className="w-7 h-7 text-white" />,
      summary: "Atendimento prioritário no SUS e acesso integral a reabilitação.",
      details: [
        "Prioridade em toda a rede de saúde.",
        "Fornecimento de órteses e próteses.",
        "Acesso a terapias multidisciplinares.",
      ],
      color: "bg-rose-600",
      lightColor: "bg-rose-50",
      textColor: "text-rose-700",
    },
    {
      id: 5,
      title: "Acessibilidade e Transporte",
      icon: <Bus className="w-7 h-7 text-white" />,
      summary: "Mobilidade sem barreiras e gratuidade interestadual para baixa renda.",
      details: [
        "Frotas de transporte 100% adaptadas.",
        "Passe livre conforme critérios de renda.",
        "Adaptação de calçadas e prédios públicos.",
      ],
      color: "bg-amber-600",
      lightColor: "bg-amber-50",
      textColor: "text-amber-700",
    },
    {
      id: 6,
      title: "Benefícios Sociais",
      icon: <Wallet className="w-7 h-7 text-white" />,
      summary: "Seguridade social através do BPC/LOAS para subsistência mínima.",
      details: [
        "BPC de 1 salário mínimo mensal.",
        "Auxílio-inclusão para quem trabalha.",
        "Critérios de vulnerabilidade econômica.",
      ],
      color: "bg-teal-600",
      lightColor: "bg-teal-50",
      textColor: "text-teal-700",
    },
    {
      id: 7,
      title: "Moradia e Autonomia",
      icon: <Home className="w-7 h-7 text-white" />,
      summary: "Prioridade em programas habitacionais e incentivo à vida independente.",
      details: [
        "Reserva de 3% das unidades habitacionais.",
        "Apoio à tomada de decisão.",
        "Direito à moradia assistida.",
      ],
      color: "bg-orange-600",
      lightColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
    {
      id: 8,
      title: "Prioridade de Atendimento",
      icon: <Clock className="w-7 h-7 text-white" />,
      summary: "Atendimento preferencial imediato em serviços públicos e privados.",
      details: [
        "Filas e guichês específicos.",
        "Extensão da prioridade ao acompanhante.",
        "Atendimento ágil em bancos e comércios.",
      ],
      color: "bg-purple-600",
      lightColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
  ];

  const filteredRights = rightsData.filter(
    (r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.summary.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const faqItems = [
    {
      q: "O que é a Lei Brasileira de Inclusão (LBI)?",
      a: "Também conhecida como Estatuto da Pessoa com Deficiência (Lei 13.146/2015), é a base legal que assegura autonomia e dignidade PcD no Brasil.",
    },
    {
      q: "Escolas particulares podem cobrar valores extras?",
      a: "Não. Cobrar taxas adicionais de alunos PcD é crime. A inclusão educacional é um dever social e institucional.",
    },
    {
      q: "Quem tem direito ao BPC/LOAS?",
      a: "Pessoas com impedimentos de longo prazo e que comprovem renda familiar per capita insuficiente para a manutenção digna.",
    },
  ];

  const denunciaSteps = [
    {
      t: "Instrução Probatória",
      d: "Reúna provas materiais como fotos, vídeos, mensagens ou testemunhas do ocorrido.",
    },
    {
      t: "Defensoria Pública",
      d: "Busque orientação jurídica gratuita caso não tenha meios de contratar um advogado.",
    },
    {
      t: "Ministério Público",
      d: "Órgão responsável por zelar pelos direitos indisponíveis e coletivos da sociedade.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Header */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all ${
          scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">DireitosPcD</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#legislacao" className="hover:text-indigo-800">Legislação</a>
            <a href="#informacoes" className="hover:text-indigo-800">Informações</a>
            <a href="#agir" className="hover:text-indigo-800">Como Agir</a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-slate-700">
            <a href="#legislacao" onClick={() => setIsMenuOpen(false)}>Legislação</a>
            <a href="#informacoes" onClick={() => setIsMenuOpen(false)}>Informações</a>
            <a href="#agir" onClick={() => setIsMenuOpen(false)}>Como Agir</a>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
                Inclusão e Cidadania
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Estatuto da Pessoa <br /> com Deficiência.
              </h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                Um guia informativo técnico sobre a Lei Brasileira de Inclusão e os mecanismos de defesa da cidadania no Brasil.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#legislacao"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-800 text-white font-bold rounded-lg hover:bg-indigo-900 transition-colors"
                >
                  Ver Direitos Fundamentais <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#agir"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 text-slate-800 font-bold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Canais de Denúncia
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full aspect-square max-w-md rounded-3xl bg-gradient-to-br from-indigo-800 to-indigo-600 flex items-center justify-center shadow-xl">
                <Users className="w-40 h-40 text-white/90" />
              </div>
            </div>
          </div>
        </section>

        {/* Busca */}
        <section className="py-10 bg-white border-y border-slate-200">
          <div className="max-w-3xl mx-auto px-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por direito, eixo ou tema..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm font-medium"
              />
            </div>
          </div>
        </section>

        {/* Grid de Direitos */}
        <section id="legislacao" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Legislação e Garantias Fundamentais
              </h2>
              <p className="mt-4 text-slate-600">
                Consulte os principais eixos da LBI e entenda como a legislação protege a autonomia e a dignidade humana.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredRights.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedRight(item)}
                  className="text-left bg-white rounded-xl p-8 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col h-full group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-5`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.summary}</p>
                  <div
                    className={`mt-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest ${item.textColor}`}
                  >
                    Detalhes Técnicos <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="informacoes" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 text-center mb-12">
              Notas Técnicas e Informativas
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => {
                const open = activeAccordion === i;
                return (
                  <div
                    key={i}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      onClick={() => setActiveAccordion(open ? null : i)}
                      className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800 hover:bg-slate-50"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-slate-600 leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Denúncia */}
        <section id="agir" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Violação de Direitos
              </h2>
              <p className="mt-4 text-slate-600">
                O desrespeito à legislação PcD é passível de sanções civis e criminais. Siga o protocolo institucional para denúncias.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {denunciaSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 border border-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.t}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>

            <div className="bg-indigo-800 text-white rounded-2xl p-8 md:p-10 flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Canal Oficial: Disque 100</h3>
                <p className="text-indigo-100 leading-relaxed">
                  O Disque Direitos Humanos é um serviço gratuito, anônimo e que funciona 24 horas por dia em todo o território nacional. É o principal mecanismo para registrar violações contra a dignidade da pessoa humana.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 font-bold text-white mb-3">
            <ShieldCheck className="w-5 h-5" /> DireitosPcD
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Observatório Acadêmico de Legislação</p>
          <p className="text-xs mt-1 text-slate-500">Desenvolvido para fins educativos</p>
        </div>
      </footer>

      {/* Modal */}
      {selectedRight && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedRight(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`${selectedRight.color} p-6 flex items-start justify-between text-white`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  {selectedRight.icon}
                </div>
                <h3 className="text-xl font-bold">{selectedRight.title}</h3>
              </div>
              <button
                onClick={() => setSelectedRight(null)}
                className="hover:bg-white/20 p-2 rounded-lg"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-6 leading-relaxed">{selectedRight.summary}</p>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                <Info className="w-4 h-4" /> Disposições da Lei
              </h4>
              <ul className="space-y-2 mb-8">
                {selectedRight.details.map((d, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700 text-sm">
                    <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${selectedRight.textColor}`} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedRight(null)}
                className="w-full px-8 py-3 bg-slate-100 font-bold rounded-lg text-slate-700 hover:bg-slate-200 transition-colors uppercase text-xs tracking-widest"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
