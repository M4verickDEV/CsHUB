import React, { useState, useEffect, useCallback, createContext, useContext, useMemo, useRef } from 'react';

// --- Contexto de Tema ---
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' ou 'dark'

  useEffect(() => {
    // Add/remove theme class from the root HTML element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]); // Correctly depends on theme

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []); // useCallback because the function itself doesn't depend on external state

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeProvider.displayName = 'ThemeProvider'; // Add display name

// --- Ícones SVG (embutidos para funcionar em um único arquivo) ---
// Usando ícones da biblioteca "Lucide"

// NOTE: Only relevant icons are kept for brevity in this example.
// Ensure all necessary icons from the original code are included if needed.

const IconUser = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconLock = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const IconLogOut = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const IconClock = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconMessageSquare = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const IconSend = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const IconStar = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IconSearch = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconCheckCircle = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const IconSun = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
);

const IconMoon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
  </svg>
);

const IconPlay = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const IconPause = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

const IconSettings = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const IconPaperclip = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

const IconPhone = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const IconVideo = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const IconUserPlus = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <line x1="20" y1="8" x2="20" y2="14"></line>
    <line x1="17" y1="11" x2="23" y2="11"></line>
  </svg>
);

const IconPhoneOff = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
    <line x1="2" y1="2" x2="22" y2="22"></line>
  </svg>
);

const IconLayoutDashboard = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

// REMOVED: Duplicate IconGrid

const IconFileText = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const IconInstagram = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconBrandWhatsapp = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
  </svg>
);

const IconMousePointerClick = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
    <path d="M13 13l6 6"></path>
    <path d="M16.026 8.99l-4.48 4.48"></path>
  </svg>
);

const IconAlertCircle = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

const IconCheck = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const IconChevronDown = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconX = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconBrain = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2"></path>
    <path d="M14.5 2a2.5 2.5 0 0 1 2.5 2.5v0A2.5 2.5 0 0 1 14.5 7"></path>
    <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v0A2.5 2.5 0 0 0 9.5 7"></path>
    <path d="M14.5 7a2.5 2.5 0 0 1 2.5 2.5v0A2.5 2.5 0 0 1 14.5 12"></path>
    <path d="M9.5 7A2.5 2.5 0 0 0 7 9.5v0A2.5 2.5 0 0 0 9.5 12"></path>
    <path d="M12 12a2.5 2.5 0 0 1 2.5 2.5v0A2.5 2.5 0 0 1 12 17"></path>
    <path d="M12 12a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 12 17"></path>
    <path d="M17 14.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5"></path>
    <path d="M7 14.5a2.5 2.5 0 0 0-2.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5"></path>
    <path d="M12 17a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5"></path>
    <path d="M12 17a2.5 2.5 0 0 0-2.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5"></path>
    <path d="M14.5 19.5a2.5 2.5 0 0 1 2.5 2.5v0"></path>
    <path d="M9.5 19.5A2.5 2.5 0 0 0 7 22v0"></path>
  </svg>
);

const IconFileSliders = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <path d="M14 2v6h6"></path>
    <path d="M12 18v-1a2 2 0 0 1 2-2h1"></path>
    <path d="M8 15v1a2 2 0 0 0 2 2h1"></path>
    <path d="M12 12v-1a2 2 0 0 0-2-2H9"></path>
  </svg>
);

const IconUploadCloud = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 10a4 4 0 0 0-4-4h-1a5 5 0 0 0-10 0v1a3 3 0 0 0 3 3h1"></path>
    <path d="M12 15l-3-3l3-3"></path>
    <path d="M9 12h9"></path>
    <path d="M16 19l3 3l3-3"></path>
    <path d="M19 22v-9"></path>
  </svg>
);

const IconKey = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 2l-7 7L13 8l-7 7-4-4-2 2 4 4 7-7 1 1 7 7 2-2-4-4 2-2z"></path>
    <path d="M15 9l4 4"></path>
  </svg>
);

// --- Dados Mockados (Simulados) ---

const mockOperator = {
  name: "Ana Silva",
  role: "Especialista de Suporte Sênior",
  avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=AS"
};

const initialChats = [
  { id: 1, customerName: "Bruno Gomes", lastMessage: "Meu pedido está atrasado...", time: "2m", unread: 2, status: 'waiting', source: 'web' },
  { id: 2, customerName: "Carla Dias", lastMessage: "Não consigo fazer login.", time: "5m", unread: 1, status: 'waiting', source: 'whatsapp' },
  { id: 3, customerName: "Marcos Andrade", lastMessage: "Obrigado pela ajuda!", time: "1h", unread: 0, status: 'resolved', source: 'web' },
  { id: 4, customerName: "Juliana Paiva", lastMessage: "Problema com a fatura.", time: "10m", unread: 1, status: 'waiting', source: 'instagram' },
];

const mockCustomerData = {
  1: {
    name: "Bruno Gomes",
    email: "bruno.g@exemplo.com",
    phone: "(11) 98765-4321",
    sentiment: "Frustrado",
    sentimentEmoji: "😠",
    tags: ["Cliente Ouro", "Risco de Churn"],
    orderHistory: [
      { id: "A1023", item: "Fone de Ouvido XYZ", status: "Atrasado" },
      { id: "A1001", item: "Mouse Gamer", status: "Entregue" },
    ],
    starPreScreen: {
      problem: "Pedido Atrasado",
      orderId: "A1023",
      verified: true,
    }
  },
  2: {
    name: "Carla Dias",
    email: "carla.d@exemplo.com",
    phone: "(21) 91234-5678",
    sentiment: "Neutro",
    sentimentEmoji: "😐",
    tags: ["Novo Cliente"],
    orderHistory: [],
    starPreScreen: {
      problem: "Login",
      orderId: null,
      verified: false,
    }
  },
  4: {
    name: "Juliana Paiva",
    email: "juliana.p@exemplo.com",
    phone: "(31) 95555-1234",
    sentiment: "Confusa",
    sentimentEmoji: "😕",
    tags: ["Cliente Prata"],
    orderHistory: [
       { id: "B2040", item: "Plano Mensal", status: "Ativo" },
    ],
    starPreScreen: {
      problem: "Faturação",
      orderId: "B2040",
      verified: true,
    }
  },
};

const initialChatHistories = {
      1: [
        { id: 'm1-1', from: "star-bot", text: "Olá! Sou a Star, IA de atendimento. Verifiquei que seu pedido A1023 está atrasado. Transferindo para um especialista." },
        { id: 'm1-2', from: "customer", text: "Olá, estou com um problema." },
        { id: 'm1-3', from: "customer", text: "Meu pedido #A1023 está marcado como entregue, mas não recebi." },
        { id: 'm1-4', from: "operator", text: "Olá, Bruno! Lamento por isso. Deixe-me verificar o que aconteceu." },
        { id: 'm1-5', from: "customer", text: "Fico no aguardo. É urgente." },
      ],
      2: [
        { id: 'm2-1', from: "star-bot", text: "Olá! Sou a Star. Vi que está com problemas de login. Vou transferir para um especialista." },
        { id: 'm2-2', from: "customer", text: "Não consigo fazer login." },
        { id: 'm2-3', from: "customer", text: "Já tentei redefinir a senha e não chega o email." },
      ],
      4: [
        { id: 'm4-1', from: "star-bot", text: "Olá! Sou a Star. Vi que tem uma dúvida sobre fatura. Transferindo..." },
        { id: 'm4-2', from: "customer", text: "Oi, minha fatura veio com valor errado." },
      ]
  };

const mockAiSuggestions = {
  1: [
    "Peça desculpas pelo atraso e peça para confirmar o endereço.",
    "Oferecer um cupom de desconto pela inconveniência.",
    "Verificar o status com a transportadora."
  ],
  2: [
    "Perguntar qual email está sendo usado.",
    "Pedir para verificar a caixa de spam.",
    "Sugerir o passo-a-passo de redefinição de senha."
  ],
  4: [
    "Pedir o número da fatura.",
    "Confirmar o plano assinado.",
    "Verificar cobranças adicionais."
  ]
};

const mockBadWords = [
  "idiota", "burro", "estupido", "palavrao", "incompetente", "lixo"
];


// --- Componentes da Aplicação ---

/**
 * Hook para fechar dropdowns ao clicar fora
 */
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Re-run if ref or handler changes
};

/**
 * Tela de Login
 */
const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // Simple mock login
    if (username === "operador" && password === "123") {
      onLogin(mockOperator);
    } else {
      setError("Usuário ou senha inválidos. (Tente: operador / 123)");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-light-text dark:text-dark-text font-inter">
      {/* Background: Animated Gradient + Orbs. Removed pattern references. */}
      {/* Ensure animate-gradient, animate-blob etc. are defined in global CSS/Tailwind */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 animate-gradient"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Glass Morphism Login Card */}
      <div className="z-10 w-full max-w-md p-8 space-y-6 bg-light-card/70 dark:bg-dark-card/70 backdrop-blur-md rounded-2xl shadow-xl border border-light-border/30 dark:border-dark-border/30">
        <div className="text-center">
          <IconMessageSquare className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400" />
          <h2 className="mt-4 text-3xl font-bold">
            Central de Atendimento
          </h2>
          <p className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            Faça login para iniciar sua sessão
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium"
            >
              Usuário
            </label>
            <div className="relative mt-1">
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-xl shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                           bg-light-input/80 dark:bg-dark-input/80 border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary"
                placeholder="seu.usuario"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <IconUser className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium"
            >
              Senha
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-10 rounded-xl shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
                           bg-light-input/80 dark:bg-dark-input/80 border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-text-secondary dark:placeholder-dark-text-secondary"
                placeholder="••••••••"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <IconLock className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
              </span>
            </div>
          </div>

          {error && (
            <p className="text-sm text-center text-red-500">{error}</p>
          )}

          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
            >
              Entrar
            </button>
          </div>
        </form>

        {/* Opções adicionais de login */}
        <div className="flex flex-col space-y-3 mt-6">
          <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline text-center">Esqueceu sua senha?</a>
          <button
            type="button"
            className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-blue-600 dark:text-blue-200 bg-blue-50 dark:bg-blue-900 rounded-xl shadow-md hover:bg-blue-100 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
          >
            <IconKey className="w-5 h-5 mr-2" />
            Login Enterprise
          </button>
        </div>
      </div>
    </div>
  );
};
LoginScreen.displayName = 'LoginScreen';

/**
 * Cronômetro de Tempo de Trabalho
 */
const WorkTimer = React.memo(() => { // Memoized as it only depends on internal state
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return [hours, minutes, secs]
      .map(v => v.toString().padStart(2, '0'))
      .join(':');
  };

  return (
    <div className="flex items-center space-x-2 p-2 bg-light-input dark:bg-dark-input rounded-xl shadow-inner">
      <IconClock className={`w-5 h-5 ${isPaused ? 'text-yellow-500' : 'text-green-500'}`} />
      <span className="font-mono text-sm font-medium text-light-text dark:text-dark-text" title="Tempo Online">
        {formatTime(seconds)}
      </span>
      <button
        onClick={() => setIsPaused(!isPaused)}
        title={isPaused ? "Retomar" : "Pausar"}
        className="p-1 text-light-text-secondary dark:text-dark-text-secondary rounded-full hover:bg-light-hover dark:hover:bg-dark-hover"
      >
        {isPaused ? <IconPlay className="w-4 h-4" /> : <IconPause className="w-4 h-4" />}
      </button>
    </div>
  );
});
WorkTimer.displayName = 'WorkTimer'; // Add display name

/**
 * Toggle de Tema
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-between w-full px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover"
      aria-label="Alternar tema"
    >
      <span>{theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</span>
      {theme === 'light' ? (
        <IconMoon className="w-5 h-5" />
      ) : (
        <IconSun className="w-5 h-5" />
      )}
    </button>
  );
};
ThemeToggle.displayName = 'ThemeToggle';

/**
 * Cabeçalho do Dashboard
 */
const DashboardHeader = React.memo(({ operator, completedChats, onLogout, onToggleViewMode, currentView }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const profileRef = useRef(null);
  const settingsRef = useRef(null);

  useClickOutside(profileRef, () => setProfileOpen(false));
  useClickOutside(settingsRef, () => setSettingsOpen(false));

  const handleExportReport = () => {
    setProfileOpen(false); // Close dropdown first
    setShowReportModal(true);
  };

  return (
    <>
      <header className="flex items-center justify-between h-16 px-6 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border shadow-sm shrink-0">
        {/* Lado Esquerdo: Título e Métricas */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <IconMessageSquare className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-light-text dark:text-dark-text">
              {currentView === 'agent' ? 'Atendimento' : 'Dashboard Gestão'}
            </h1>
          </div>
          {currentView === 'agent' && (
            <div className="hidden sm:flex items-center p-2 space-x-2 bg-light-input dark:bg-dark-input rounded-xl shadow-inner">
              <IconCheckCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Atendimentos Hoje:</span>
              <span className="text-sm font-bold text-light-text dark:text-dark-text">{completedChats}</span>
            </div>
          )}
        </div>

        {/* Lado Direito: Controles do Operador */}
        <div className="flex items-center space-x-4">
          {currentView === 'agent' && <WorkTimer />}

          <div className="w-px h-6 bg-light-border dark:bg-dark-border"></div>

          {/* Botão de Troca de Visão */}
          <button
            onClick={onToggleViewMode}
            title={currentView === 'agent' ? "Ver Dashboard de Gestor" : "Ver Painel de Atendimento"}
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 shadow-sm"
          >
            <IconLayoutDashboard className="w-5 h-5" />
          </button>

          {/* Menu Configurações */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setSettingsOpen(o => !o)}
              title="Configurações"
              className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 shadow-sm"
            >
              <IconSettings className="w-5 h-5" />
            </button>
            {/* Dropdown Configurações */}
            {settingsOpen && (
              <div className="absolute right-0 z-30 w-56 mt-2 origin-top-right bg-light-card dark:bg-dark-card rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <div className="px-4 py-2 text-xs font-semibold uppercase text-light-text-secondary dark:text-dark-text-secondary">Configurações</div>
                  <ThemeToggle />
                  <a href="#" className="block px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover">
                    Idioma
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover">
                    Notificações
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Menu Perfil */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(o => !o)}
              className="flex items-center space-x-2 text-sm font-medium text-light-text dark:text-dark-text rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="hidden md:inline group">
                <span className="group-hover:underline">{operator.name}</span>
                <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary group-hover:underline">{operator.role}</div>
              </span>
              <img
                  src={operator.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full shadow-sm"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/ccc/fff?text=?" }} // Basic fallback
              />
              <IconChevronDown className="hidden md:block w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
            </button>
            {/* Dropdown Perfil */}
            {profileOpen && (
              <div className="absolute right-0 z-30 w-56 mt-2 origin-top-right bg-light-card dark:bg-dark-card rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <div className="px-4 py-3 border-b border-light-border dark:border-dark-border">
                    <p className="text-sm font-medium text-light-text dark:text-dark-text">Logado como</p>
                    <p className="text-sm font-medium text-light-text dark:text-dark-text truncate">{operator.name}</p>
                    <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary truncate">{operator.role}</p>
                  </div>
                  <a href="#" className="block px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover">Ver Perfil</a>
                  <a href="#" className="block px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover">Agenda</a>
                  <a href="#" className="block px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover">Treinamentos</a>
                  <a href="#" className="block px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover">Meetings</a>
                   <button
                    onClick={handleExportReport}
                    className="w-full text-left px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover"
                  >
                    Exportar Relatório
                  </button>
                  <div className="border-t border-light-border dark:border-dark-border my-1"></div>
                  <button
                    onClick={onLogout}
                    className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-light-hover dark:hover:bg-dark-hover"
                  >
                    <IconLogOut className="w-5 h-5" />
                    <span>Sair</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </header>

      <ReportModal
        show={showReportModal}
        onClose={() => setShowReportModal(false)}
      />
    </>
  );
});
DashboardHeader.displayName = 'DashboardHeader'; // Add display name

/**
 * Fila de Atendimentos (Sidebar Esquerda)
 */
const ChatQueue = React.memo(({ chats, activeChatId, onSelectChat }) => {
  const waitingChats = useMemo(() => chats.filter(c => c.status === 'waiting'), [chats]);
  const resolvedChats = useMemo(() => chats.filter(c => c.status === 'resolved'), [chats]);

  const SourceIcon = React.memo(({ source }) => { // Memoized icon component
    switch (source) {
      case 'whatsapp':
        return <IconBrandWhatsapp className="w-4 h-4 text-green-500" title="WhatsApp" />;
      case 'instagram':
        return <IconInstagram className="w-4 h-4 text-pink-500" title="Instagram" />;
      default:
        return <IconMessageSquare className="w-4 h-4 text-blue-500" title="Chat Web" />;
    }
  });
  SourceIcon.displayName = 'SourceIcon'; // Add display name for debugging

  return (
    <aside className="flex flex-col h-full bg-light-card dark:bg-dark-card border-r border-light-border dark:border-dark-border shadow-md shrink-0 w-full">
      <div className="p-4 border-b border-light-border dark:border-dark-border">
        <h2 className="text-lg font-semibold text-light-text dark:text-dark-text">Fila de Atendimento</h2>
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{waitingChats.length} aguardando</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="flex flex-col p-2">
          {waitingChats.length > 0 ? waitingChats.map(chat => (
            <button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`flex items-start p-4 mb-2 text-left rounded-xl shadow-sm transition duration-150
                ${activeChatId === chat.id
                  ? 'bg-blue-100 dark:bg-blue-800 border-blue-500 border-l-4 text-blue-900 dark:text-blue-100'
                  : 'bg-light-input dark:bg-dark-input hover:bg-light-hover dark:hover:bg-dark-hover text-light-text dark:text-dark-text'
                }`
              }
            >
              <div className="flex-1 min-w-0"> {/* Added min-w-0 for proper truncation */}
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold truncate">{chat.customerName}</span>
                  <div className="flex items-center space-x-2 flex-shrink-0"> {/* Prevent icons shrinking */}
                    <SourceIcon source={chat.source} />
                    <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{chat.time}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full flex-shrink-0"> {/* Prevent badge shrinking */}
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          )) : (
             <p className="p-4 text-sm text-center text-light-text-secondary dark:text-dark-text-secondary">Nenhum cliente aguardando.</p>
          )}

          {/* Chats resolvidos (opcional) */}
          <div className="p-4 mt-4 border-t border-light-border dark:border-dark-border">
            <h3 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase">Resolvidos</h3>
          </div>
          {resolvedChats.map(chat => (
            <button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={`flex items-start p-4 mb-2 text-left rounded-xl shadow-sm transition duration-150 opacity-70
                ${activeChatId === chat.id
                  ? 'bg-gray-200 dark:bg-gray-700 border-gray-400 border-l-4'
                  : 'bg-light-input dark:bg-dark-input hover:bg-light-hover dark:hover:bg-dark-hover'
                }`
              }
            >
              <div className="flex-1 min-w-0"> {/* Added min-w-0 */}
                 <span className="text-sm font-semibold text-light-text dark:text-dark-text truncate">{chat.customerName}</span>
                 <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary truncate">{chat.lastMessage}</p>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
});
ChatQueue.displayName = 'ChatQueue';

/**
 * Janela de Chat (Centro)
 */
const ChatWindow = ({ chat, customer, history, aiSuggestions, onEndChat, onSendMessage, callStatus, onCallAction, needsWrapup }) => {
  const [newMessage, setNewMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Scroll to bottom effect
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, callStatus]); // Rerun when history or callStatus changes

  const handleSend = useCallback((e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    onSendMessage(chat.id, newMessage);
    setNewMessage('');
  }, [newMessage, chat?.id, onSendMessage]); // Include chat?.id safely

  const handleEnd = useCallback(() => {
     if (chat?.id) { // Only call if chat exists
        onEndChat(chat.id);
     }
  }, [chat?.id, onEndChat]);

  // Drag-n-Drop Handlers
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0 && chat?.id) {
      console.log("Arquivos soltos:", files[0].name); // Simulate upload
      onSendMessage(chat.id, `[Arquivo anexado: ${files[0].name}]`);
    }
  }, [chat?.id, onSendMessage]);

  // File Attach Handler
  const handleFileAttach = useCallback((e) => {
    const files = e.target.files;
    if (files.length > 0 && chat?.id) {
      console.log("Arquivos anexados:", files[0].name); // Simulate upload
      onSendMessage(chat.id, `[Arquivo anexado: ${files[0].name}]`);
      e.target.value = null; // Reset input value for subsequent uploads of the same file
    }
  }, [chat?.id, onSendMessage]);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);


  if (!chat || !customer) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 h-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
        <IconMessageSquare className="w-16 h-16 text-light-text-secondary dark:text-dark-text-secondary opacity-50" />
        <h3 className="mt-4 text-xl font-semibold text-light-text dark:text-dark-text">Nenhum atendimento selecionado</h3>
        <p className="mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">Selecione um cliente na fila para começar a atender.</p>
      </div>
    );
  }

  // Se estamos em modo "Wrapup"
  if (needsWrapup) {
    return (
      <AutoWrapupScreen
        chat={chat}
        customer={customer}
        history={history}
        onConfirmWrapup={() => onCallAction('confirm_wrapup')}
      />
    );
  }

  return (
    <div
      className="relative flex flex-col flex-1 h-full bg-light-card dark:bg-dark-card rounded-2xl md:my-2 shadow-xl"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Overlay de Drag-n-Drop */}
      {isDragging && (
        <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white bg-blue-600 bg-opacity-80 rounded-2xl border-4 border-dashed border-white">
          Solte os arquivos aqui para anexar
        </div>
      )}

      {/* Cabeçalho do Chat */}
      <div className="flex items-center justify-between h-16 px-6 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border rounded-t-2xl shrink-0">
        <div>
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">{customer.name}</h3>
          <p className={`text-sm ${callStatus === 'active' ? 'text-red-500 font-semibold animate-pulse' : 'text-green-500'}`}>
            {callStatus === 'active' ? "EM LIGAÇÃO (Simulado)" : "Online"}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {/* Botões de Ação */}
          <button
            onClick={() => onCallAction('audio')}
            title="Ligar (Áudio)"
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          >
            <IconPhone className="w-5 h-5" />
          </button>
          <button
            title="Ligar (Vídeo)" // Placeholder functionality
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          >
            <IconVideo className="w-5 h-5" />
          </button>
          <button
            title="Co-browsing" // Placeholder functionality
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          >
            <IconMousePointerClick className="w-5 h-5" />
          </button>
          <button
            title="Transferir Atendimento" // Placeholder functionality
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          >
            <IconUserPlus className="w-5 h-5" />
          </button>
          <div className="w-px h-6 bg-light-border dark:border-dark-border"></div>
          <button
            onClick={handleEnd}
            title="Encerrar Atendimento"
            className="p-2 text-red-600 rounded-xl hover:bg-red-100 dark:hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
          >
            <IconPhoneOff className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Janela de Conteúdo (Chat ou Transcrição) */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 min-h-0">
        {callStatus === 'active' ? (
          <CallTranscriptionView />
        ) : (
          history.map((msg) => (
            <div key={msg.id} className={`flex ${msg.from === 'operator' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm break-words ${ // Added break-words
                  msg.from === 'operator'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : msg.from === 'star-bot'
                    ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-bl-none'
                    : 'bg-light-message dark:bg-dark-message text-light-text dark:text-dark-text rounded-bl-none'
                }`}
              >
                {msg.from === 'star-bot' && <strong className="block text-xs font-semibold">IA Star (Triagem):</strong>}
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))
        )}
        <div ref={chatEndRef} /> {/* For auto-scroll */}
      </div>

      {/* Sugestões da IA */}
      <div className="p-4 bg-light-input dark:bg-dark-input border-t border-light-border dark:border-dark-border">
        <div className="flex items-center mb-2 space-x-2">
          <span className="flex items-center justify-center w-6 h-6 text-sm font-bold text-white bg-purple-600 rounded-full shadow-sm">S</span>
          <h4 className="text-sm font-semibold text-light-text dark:text-dark-text">Sugestões da IA Star</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {aiSuggestions.map((suggestion, i) => (
            <button
              key={i}
              onClick={() => setNewMessage(suggestion)}
              className="px-3 py-1 text-xs text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 rounded-xl hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-150 shadow-sm"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input de Mensagem */}
      <div className="p-4 bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border rounded-b-2xl">
        <form onSubmit={handleSend} className="flex items-center space-x-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileAttach}
            className="hidden"
            multiple
          />
          <button
            type="button"
            onClick={triggerFileInput}
            title="Anexar arquivo"
            className="p-3 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          >
            <IconPaperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={callStatus === 'active' ? "Em chamada, digite notas aqui..." : "Digite sua mensagem..."}
            className="flex-1 w-full px-4 py-3 text-sm rounded-xl shadow-inner focus:outline-none focus:ring-blue-500 focus:border-blue-500
                       bg-light-input dark:bg-dark-input border-light-border dark:border-dark-border text-light-text dark:text-dark-text"
          />
          <button
            type="submit"
            className="p-3 text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
            aria-label="Enviar mensagem"
          >
            <IconSend className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
ChatWindow.displayName = 'ChatWindow';

/**
 * Tela de Transcrição de Chamada (Simulada)
 */
const CallTranscriptionView = () => {
  // Simulação de transcrição
  const transcript = useMemo(() => [ // Memoize transcript data
    { speaker: 'customer', text: "Olá? Estou a ligar sobre a minha fatura." },
    { speaker: 'operator', text: "Olá Sra. Juliana, sou a Ana. Em que posso ajudar com a sua fatura?" },
    { speaker: 'customer', text: "O valor veio 50 reais mais alto este mês e não sei porquê." },
  ], []);

  return (
    <div className="space-y-4">
      <div className="p-3 text-center bg-gray-100 dark:bg-gray-700 rounded-xl">
        <p className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Transcrição da chamada em tempo real (IA Star)</p>
      </div>
      {transcript.map((line, i) => (
        <div key={i}>
          <span className={`font-semibold text-sm ${line.speaker === 'operator' ? 'text-blue-600 dark:text-blue-400' : 'text-light-text dark:text-dark-text'}`}>
            {line.speaker === 'operator' ? 'Operador:' : 'Cliente:'}
          </span>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary ml-2">{line.text}</p>
        </div>
      ))}
      <div className="text-sm text-gray-500 animate-pulse">A ouvir...</div>
    </div>
  );
};
CallTranscriptionView.displayName = 'CallTranscriptionView';

/**
 * Tela de Resumo (Auto-Wrapup)
 */
const AutoWrapupScreen = ({ chat, customer, history, onConfirmWrapup }) => {
  const simulatedSummary = useMemo(() => [ // Memoize summary calculation
    "Cliente contactou via " + chat.source + " sobre " + customer.starPreScreen.problem + ".",
    "Sentimento inicial: " + customer.sentiment + ".",
    history.length + " trocas de mensagens.",
    "Problema resolvido com a verificação da fatura e estorno da cobrança indevida.",
    "Feedback do cliente: 5 estrelas." // Mocked feedback for summary
  ].join("\n"), [chat, customer, history]);

  return (
    <div className="flex flex-col flex-1 h-full p-6 bg-light-card dark:bg-dark-card rounded-2xl md:my-2 shadow-xl space-y-4">
      <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">Resumo do Atendimento (IA Star)</h2>
      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
        Atendimento com <span className="font-medium">{customer.name}</span> finalizado. A IA Star gerou o seguinte resumo para o histórico.
      </p>

      <div className="flex-1 p-4 bg-light-input dark:bg-dark-input rounded-xl border border-light-border dark:border-dark-border overflow-y-auto"> {/* Added overflow */}
        <h3 className="text-sm font-semibold text-light-text dark:text-dark-text">Resumo da IA Star</h3>
        <textarea
          readOnly
          value={simulatedSummary}
          className="w-full h-48 p-2 mt-2 text-sm font-mono bg-light-card dark:bg-dark-card rounded-md resize-none border-none" // Removed resize and border
        />

        <h3 className="mt-4 text-sm font-semibold text-light-text dark:text-dark-text">Etiquetas (Sugeridas pela IA)</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {/* Example tags - could be dynamic */}
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-xl shadow-sm">Faturação</span>
          <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-xl shadow-sm">Resolvido</span>
          <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-xl shadow-sm">Estorno</span>
        </div>
      </div>

      <button
        onClick={onConfirmWrapup}
        className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 flex-shrink-0" // Added shrink-0
      >
        Confirmar e Fechar (Voltar à Fila)
      </button>
    </div>
  );
};
AutoWrapupScreen.displayName = 'AutoWrapupScreen';

/**
 * Painel de Contexto do Cliente (Sidebar Direita)
 */
// FIXED: Removed React.memo wrapper
const CustomerContextPanel = ({ customer, callStatus }) => {
  const [activeTab, setActiveTab] = useState('details');
  const { theme } = useContext(ThemeContext);

  // All hooks are now at the top level
  useEffect(() => {
    if (callStatus === 'active') {
      setActiveTab('help');
    } else if (customer) {
      setActiveTab('details');
    }
  }, [callStatus, customer]);

  const avatarUrl = useMemo(() => {
    if (!customer) return "https://placehold.co/100x100/ccc/fff?text=?";
    const bgColor = theme === 'dark' ? '1F2937' : 'EBF4FF';
    const textColor = theme === 'dark' ? '9CA3AF' : '4299E1';
    const initial = customer.name?.charAt(0)?.toUpperCase() || '?';
    return `https://placehold.co/100x100/${bgColor}/${textColor}?text=${initial}`;
  }, [customer, theme]); // customer object as dependency

  // Conditional return *after* all hooks
  if (!customer) {
    return <aside className="hidden h-full bg-light-bg dark:bg-dark-bg border-l border-light-border dark:border-dark-border lg:flex shrink-0 w-full"></aside>;
  }

  return (
    <aside className="flex flex-col hidden h-full bg-light-card dark:bg-dark-card border-l border-light-border dark:border-dark-border lg:flex shrink-0 shadow-md w-full">
      {/* Tabs */}
      <div className="border-b border-light-border dark:border-dark-border">
        <nav className="flex -mb-px" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition duration-150
              ${activeTab === 'details'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:border-gray-300 dark:hover:border-gray-600'
              }`}
          >
            Contexto
          </button>
          <button
            onClick={() => setActiveTab('help')}
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition duration-150
              ${activeTab === 'help'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:border-gray-300 dark:hover:border-gray-600'
              }`}
          >
            Ajuda (IA Star)
          </button>
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Tab de Detalhes */}
        {activeTab === 'details' && (
          <div className="p-6 space-y-6">
            <div className="text-center">
              <img
                src={avatarUrl}
                alt="Avatar Cliente"
                className="w-20 h-20 mx-auto rounded-full shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/ccc/fff?text=?" }} // Basic fallback
              />
              <h3 className="mt-3 text-lg font-semibold text-light-text dark:text-dark-text">{customer.name}</h3>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{customer.email}</p>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{customer.phone}</p>
            </div>

            {/* Pré-Triagem da Star */}
            <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-xl shadow-sm border border-purple-200 dark:border-purple-700">
              <h4 className="text-sm font-semibold text-purple-800 dark:text-purple-200">Pré-Triagem (IA Star)</h4>
              <p className="text-sm text-light-text dark:text-dark-text">Problema: <span className="font-medium">{customer.starPreScreen.problem}</span></p>
              <p className="text-sm text-light-text dark:text-dark-text">Pedido: <span className="font-medium">{customer.starPreScreen.orderId || 'N/A'}</span></p>
              <p className="text-sm text-light-text dark:text-dark-text">Verificado: <span className="font-medium">{customer.starPreScreen.verified ? 'Sim' : 'Não'}</span></p>
            </div>

            {/* Sentimento & Tags */}
            <div className="p-4 bg-light-input dark:bg-dark-input rounded-xl shadow-sm border border-light-border dark:border-dark-border">
              <h4 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Sentimento (IA Star)</h4>
              <p className={`text-lg font-semibold ${customer.sentiment === 'Frustrado' ? 'text-red-500' : 'text-light-text dark:text-dark-text'}`}>
                {customer.sentimentEmoji} {customer.sentiment}
              </p>

              <h4 className="mt-4 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Tags</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {customer.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 rounded-xl shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Histórico de Pedidos */}
            <div>
              <h4 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Histórico de Pedidos</h4>
              <ul className="mt-2 space-y-3">
                {customer.orderHistory.length > 0 ? customer.orderHistory.map(order => (
                  <li key={order.id} className="p-3 bg-light-input dark:bg-dark-input rounded-xl shadow-sm border border-light-border dark:border-dark-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-light-text dark:text-dark-text">{order.item}</span>
                      <span className={`text-xs font-bold ${order.status === 'Atrasado' ? 'text-red-500' : 'text-green-500'}`}>
                        {order.status}
                      </span>
                    </div>
                    <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">ID: {order.id}</span>
                  </li>
                )) : (
                  <li className="p-3 text-sm text-center text-light-text-secondary dark:text-dark-text-secondary bg-light-input dark:bg-dark-input rounded-xl">
                    Nenhum pedido anterior.
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}

        {/* Tab de Ajuda (IA) */}
        {activeTab === 'help' && (
          <div className="p-6 space-y-6">
            <h4 className="text-base font-semibold text-light-text dark:text-dark-text">Base de Conhecimento (IA Star)</h4>
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar artigos..."
                className="w-full py-2 pl-10 pr-4 text-sm rounded-xl shadow-inner focus:ring-blue-500 focus:border-blue-500
                           bg-light-input dark:bg-dark-input border-light-border dark:border-dark-border text-light-text dark:text-dark-text"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IconSearch className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
              </span>
            </div>

            {/* Se estiver em chamada, mostra sugestões baseadas no áudio */}
            {callStatus === 'active' && (
              <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-xl shadow-sm border border-purple-200 dark:border-purple-700">
                <h4 className="text-sm font-semibold text-purple-800 dark:text-purple-200">A "Star" está a Ouvir...</h4>
                <p className="mt-1 text-sm text-light-text dark:text-dark-text">Cliente mencionou "fatura" e "50 reais".</p>
                <ul className="mt-2 space-y-2 list-disc list-inside">
                  <li className="text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">Verificar cobranças de serviço do mês passado.</li>
                  <li className="text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">Política de estorno para cobrança indevida.</li>
                </ul>
              </div>
            )}

            {/* Resultados Falsos */}
            <ul className="space-y-2">
              <li className="p-3 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline bg-light-input dark:bg-dark-input rounded-xl shadow-sm">
                Como rastrear um pedido atrasado
              </li>
              <li className="p-3 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline bg-light-input dark:bg-dark-input rounded-xl shadow-sm">
                Política de devolução e reembolso
              </li>
              <li className="p-3 text-sm text-blue-600 dark:text-blue-400 cursor-pointer hover:underline bg-light-input dark:bg-dark-input rounded-xl shadow-sm">
                Procedimento para troca de produto
              </li>
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};
CustomerContextPanel.displayName = 'CustomerContextPanel';

/**
 * Modal de Feedback
 */
const FeedbackModal = ({ feedback, onClose }) => {
  if (!feedback) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"> {/* Added padding for small screens */}
      <div className="w-full max-w-md p-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-xl text-light-text dark:text-dark-text">
        <h2 className="text-xl font-semibold text-center">
          Atendimento Encerrado!
        </h2>
        <p className="mt-2 text-sm text-center text-light-text-secondary dark:text-dark-text-secondary">
          Feedback recebido de <span className="font-medium">{feedback.customerName}</span>:
        </p>

        <div className="py-6 my-6 text-center border-t border-b border-light-border dark:border-dark-border">
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <IconStar
                key={i}
                className={`w-8 h-8 ${i < feedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
              />
            ))}
          </div>
          {feedback.comment && ( // Only show comment if it exists
              <p className="mt-4 text-lg italic text-light-text dark:text-dark-text">
                 "{feedback.comment}"
              </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
FeedbackModal.displayName = 'FeedbackModal';

/**
 * Modal de Relatório
 */
const ReportModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleExportPDF = () => {
    console.log("Simulando geração de PDF com gráficos (IA)...");
    onClose();
  };

  const handleExportExcel = () => {
    console.log("Simulando exportação de Excel com métricas...");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"> {/* Added padding */}
      <div className="w-full max-w-lg p-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-xl text-light-text dark:text-dark-text">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Exportar Relatório de Produtividade</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-light-hover dark:hover:bg-dark-hover" aria-label="Fechar modal">
            <IconX className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />
          </button>
        </div>
        <p className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
          Selecione o formato para o seu relatório diário.
        </p>

        <div className="space-y-4 mt-6">
          {/* Opção PDF */}
          <button
            onClick={handleExportPDF}
            className="flex items-center w-full p-4 text-left border rounded-xl shadow-sm border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150"
          >
            <IconFileText className="w-10 h-10 text-red-600 shrink-0" />
            <div className="ml-4">
              <p className="font-semibold text-light-text dark:text-dark-text">Gerar PDF com Gráficos</p>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                Relatório visual com <span className="font-medium text-purple-500">insights da IA Star</span> e gráficos de desempenho.
              </p>
            </div>
          </button>

          {/* Opção Excel */}
          <button
            onClick={handleExportExcel}
            className="flex items-center w-full p-4 text-left border rounded-xl shadow-sm border-light-border dark:border-dark-border hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150"
          >
            {/* Using LayoutDashboard as Grid was removed */}
            <IconLayoutDashboard className="w-10 h-10 text-green-600 shrink-0" />
            <div className="ml-4">
              <p className="font-semibold text-light-text dark:text-dark-text">Exportar Excel (Métricas)</p>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                Dados brutos: CSAT, AHT, N. de chamados, Vendas, etc.
              </p>
            </div>
          </button>
        </div>

        <p className="mt-6 text-xs text-center text-light-text-secondary dark:text-dark-text-secondary">
          O relatório será gerado com base no dia de hoje (até o momento).
        </p>
      </div>
    </div>
  );
};
ReportModal.displayName = 'ReportModal';

/**
 * Pop-up de Coaching da IA Star
 */
const StarCoachingPopup = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Effect to show/hide with fade and auto-close
  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        // Fully close after transition
        setTimeout(onClose, 300);
      }, 5000); // Auto-close after 5 seconds

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [message, onClose]);

  if (!message && !isVisible) return null; // Only render if message exists or fading out

  const isBad = type === 'bad';
  const Icon = isBad ? IconAlertCircle : IconCheck;

  return (
    <div className={`fixed bottom-4 right-4 z-50 w-80 p-4 rounded-xl shadow-2xl transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}
      ${isBad
        ? 'bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700'
        : 'bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700'
      }`}
    >
      <div className="flex items-start">
        <Icon className={`w-6 h-6 shrink-0 ${isBad ? 'text-red-600' : 'text-green-600'}`} />
        <div className="ml-3">
          <h4 className={`text-sm font-semibold ${isBad ? 'text-red-800 dark:text-red-200' : 'text-green-800 dark:text-green-200'}`}>
            Dica da IA Star!
          </h4>
          <p className={`mt-1 text-sm ${isBad ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'}`}>
            {message}
          </p>
        </div>
        <button onClick={onClose} className="ml-auto p-1 rounded-full hover:bg-black/10" aria-label="Fechar dica">
          <IconX className={`w-4 h-4 ${isBad ? 'text-red-700' : 'text-green-700'}`} />
        </button>
      </div>
    </div>
  );
};
StarCoachingPopup.displayName = 'StarCoachingPopup';


/**
 * Dashboard do Gestor
 */
const ManagerDashboard = React.memo(({ operatorName, onToggleViewMode }) => {
  const [managerTab, setManagerTab] = useState('metrics'); // 'metrics', 'qa', 'knowledge'

  const TabButton = useCallback(({ tabId, currentTab, setTab, children, Icon }) => (
    <button
      onClick={() => setTab(tabId)}
      className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition duration-150
        ${currentTab === tabId
          ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
          : 'border-b-2 border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text'
        }`}
    >
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </button>
  ), []); // Memoized tab button

  return (
    <div className="flex flex-col flex-1 h-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      {/* Abas de Navegação */}
      <div className="px-6 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border shadow-sm shrink-0">
        <nav className="flex" aria-label="Tabs">
          <TabButton tabId="metrics" currentTab={managerTab} setTab={setManagerTab} Icon={IconLayoutDashboard}>Métricas (Wallboard)</TabButton>
          <TabButton tabId="qa" currentTab={managerTab} setTab={setManagerTab} Icon={IconFileSliders}>Qualidade (QA Star)</TabButton>
          <TabButton tabId="knowledge" currentTab={managerTab} setTab={setManagerTab} Icon={IconBrain}>Conhecimento (IA)</TabButton>
        </nav>
      </div>

      {/* Conteúdo das Abas */}
      <div className="flex-1 p-6 overflow-y-auto">
        {managerTab === 'metrics' && <WallboardMetrics />}
        {managerTab === 'qa' && <StarQAAnalysis operatorName={operatorName} />}
        {managerTab === 'knowledge' && <KnowledgeBaseManager />}
      </div>
    </div>
  );
});
ManagerDashboard.displayName = 'ManagerDashboard';

/**
 * [Aba 1] Métricas do Wallboard (Componente Simulado)
 */
const WallboardMetrics = () => {
  const metrics = useMemo(() => [
    { title: "Clientes na Fila", value: "8", change: "+2", good: false },
    { title: "Operadores Online", value: "14", change: "+1", good: true },
    { title: "Tempo Médio de Espera (TME)", value: "3:45m", change: "+0:30s", good: false },
    { title: "Nível de Serviço (SLA)", value: "89%", change: "-2%", good: false },
    { title: "CSAT (Hoje)", value: "92%", change: "+1%", good: true },
    { title: "Total de Atendimentos", value: "284", change: "", good: true },
  ], []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map(metric => (
        <div key={metric.title} className="p-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg border border-light-border dark:border-dark-border">
          <h3 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary uppercase">{metric.title}</h3>
          <div className="flex items-baseline justify-between mt-2">
            <p className="text-4xl font-bold text-light-text dark:text-dark-text">{metric.value}</p>
            {metric.change && (
              <span className={`text-sm font-semibold ${metric.good ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
WallboardMetrics.displayName = 'WallboardMetrics';

/**
 * [Aba 2] Análise de Qualidade (QA) da IA Star (Componente Simulado)
 */
const StarQAAnalysis = React.memo(({ operatorName }) => {
  const ranking = useMemo(() => [
     { name: operatorName, score: "98% CSAT", isGood: true },
     { name: "Carlos Mendes", score: "95% CSAT", isGood: true },
     { name: "Sofia Lima", score: "89% CSAT", isGood: false }, // Example of lower score
  ], [operatorName]);

  return (
    <div className="p-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg border border-light-border dark:border-dark-border">
      <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">Análise de Qualidade (IA Star)</h2>
      <p className="mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">
        A IA Star analisa 100% dos atendimentos para identificar tendências e oportunidades de coaching.
      </p>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">Ranking de Operadores (CSAT)</h3>
        <ul className="mt-4 space-y-3">
          {ranking.map((op, index) => (
             <li key={op.name} className="flex items-center justify-between p-3 bg-light-input dark:bg-dark-input rounded-xl">
               <span className="font-medium">{index + 1}. {op.name}</span>
               <span className={`font-semibold ${op.isGood ? 'text-green-500' : 'text-yellow-500'}`}>{op.score}</span>
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
StarQAAnalysis.displayName = 'StarQAAnalysis';

/**
 * [Aba 3] Gestor da Base de Conhecimento da IA Star
 */
const KnowledgeBaseManager = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback((e) => {
    const files = e.target.files;
    if (files.length > 0) {
      console.log(`Simulando upload de ${files[0].name}...`);
      // API call for upload would go here
      e.target.value = null; // Reset input
    }
  }, []);

  // Mock data should ideally come from state/props if dynamic
  const mockDocuments = useMemo(() => [
    { name: "codigo_defesa_consumidor.pdf", size: "2.5MB", date: "20/10/2025" },
    { name: "politica_retorno_2025.docx", size: "120KB", date: "15/10/2025" },
    { name: "regras_negocio_faturacao.txt", size: "15KB", date: "01/09/2025" },
  ], []);

  return (
    <div className="p-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg border border-light-border dark:border-dark-border">
      <div className="flex flex-wrap items-center justify-between gap-4"> {/* Added flex-wrap and gap */}
        <div>
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">Gerenciar Base de Conhecimento (IA Star)</h2>
          <p className="mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            Faça upload de documentos (PDFs, DOCs) para "ensinar" a Star.
          </p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple
          accept=".pdf,.doc,.docx,.txt" // Specify accepted types
        />
        <button
          onClick={handleUploadClick}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
        >
          <IconUploadCloud className="w-5 h-5" />
          <span>Carregar Documento</span>
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">Documentos Ativos</h3>
        <ul className="mt-4 space-y-3">
          {mockDocuments.map(doc => (
            <li key={doc.name} className="flex flex-wrap items-center justify-between gap-4 p-3 bg-light-input dark:bg-dark-input rounded-xl border border-light-border dark:border-dark-border"> {/* Added flex-wrap and gap */}
              <div className="flex items-center space-x-3 min-w-0"> {/* min-w-0 for truncation */}
                <IconFileText className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="font-medium truncate">{doc.name}</span>
              </div>
              <div className="flex items-center space-x-4 shrink-0"> {/* Prevent shrinking */}
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{doc.size}</span>
                <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Carregado: {doc.date}</span>
                <button className="text-red-500 hover:underline text-sm">Remover</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
KnowledgeBaseManager.displayName = 'KnowledgeBaseManager';

/**
 * Handle de Redimensionamento
 */
const ResizeHandle = React.memo(({ onMouseDown }) => (
  <div
    className="w-2 h-full cursor-col-resize group flex-shrink-0"
    onMouseDown={onMouseDown}
    role="separator" // Accessibility
    aria-orientation="vertical"
  >
    <div className="w-0.5 h-full bg-light-border dark:bg-dark-border group-hover:bg-blue-500 transition-colors duration-200 mx-auto"></div>
  </div>
));
ResizeHandle.displayName = 'ResizeHandle';


/**
 * Componente Principal da Aplicação
 */
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [operator, setOperator] = useState(null);

  // Estado do Dashboard
  const [viewMode, setViewMode] = useState('agent'); // 'agent' ou 'manager'
  const [chats, setChats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(null);
  const [completedChats, setCompletedChats] = useState(1);
  const [lastFeedback, setLastFeedback] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  // Estado dos painéis redimensionáveis
  const [leftPanelWidth, setLeftPanelWidth] = useState(384);
  const [rightPanelWidth, setRightPanelWidth] = useState(384);
  const [isResizing, setIsResizing] = useState(null); // 'left', 'right', or null

  // Estado elevado (para controle de chamadas e wrapup)
  const [callStatus, setCallStatus] = useState('idle');
  const [needsWrapup, setNeedsWrapup] = useState(false);

  // Estado do coaching da IA
  const [coachingMsg, setCoachingMsg] = useState(null); // { message: '...', type: 'good' | 'bad' }

  // Histórico de chats no estado
  const [chatHistories, setChatHistories] = useState(initialChatHistories);

  // --- Lógica de Redimensionamento ---
  const startResizing = useCallback((panel) => (e) => {
      e.preventDefault(); // Prevent text selection during drag
      setIsResizing(panel);
  }, []);

  const stopResizing = useCallback(() => {
      setIsResizing(null);
  }, []);

  const handleResize = useCallback((e) => {
      if (!isResizing) return;

      if (isResizing === 'left') {
          setLeftPanelWidth(Math.max(280, Math.min(e.clientX, 600)));
      } else if (isResizing === 'right') {
          const newWidth = window.innerWidth - e.clientX;
          setRightPanelWidth(Math.max(280, Math.min(newWidth, 600)));
      }
  }, [isResizing]);

  // FIXED: Consolidated resize listeners into one useEffect
  useEffect(() => {
      if (!isResizing) return; // Only add listeners when resizing

      const handleMouseMove = (e) => handleResize(e);
      const handleMouseUp = () => stopResizing();

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      // Add touch equivalents if needed
      // window.addEventListener('touchmove', handleMouseMove);
      // window.addEventListener('touchend', handleMouseUp);

      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
          // window.removeEventListener('touchmove', handleMouseMove);
          // window.removeEventListener('touchend', handleMouseUp);
      };
  }, [isResizing, handleResize, stopResizing]); // Re-run when resizing state changes


  // --- Funções de Handler ---
  const handleLogin = useCallback((op) => {
    setOperator(op);
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setOperator(null);
    setViewMode('agent'); // Reset view on logout
    setActiveChatId(null); // Reset active chat
    setCallStatus('idle');
    setNeedsWrapup(false);
  }, []);

  const resetChatState = useCallback(() => {
    // Keep activeChatId to know which chat ended, but reset call/wrapup
    setCallStatus('idle');
    setNeedsWrapup(false);
  }, []);

  const handleSelectChat = useCallback((chatId) => {
    // Reset call/wrapup state *before* selecting new chat
    resetChatState();

    setChats(prevChats =>
      prevChats.map(c =>
        c.id === chatId ? { ...c, unread: 0 } : c
      )
    );
    setActiveChatId(chatId); // Set the new active chat
  }, [resetChatState]);


  const handleSendMessage = useCallback((chatId, text) => {
    // Filter Bad Words
    const hasBadWord = mockBadWords.some(word => text.toLowerCase().includes(word));
    if (hasBadWord) {
      setCoachingMsg({ message: "Linguagem inadequada detectada.", type: 'bad' });
      return;
    }

    // Positive Coaching Example
    if (text.toLowerCase().includes("lamento") || text.toLowerCase().includes("desculpe")) {
      setCoachingMsg({ message: "Excelente uso de empatia!", type: 'good' });
    } else {
        // Clear previous coaching message if message is okay
        // Consider clearing only after timeout if using auto-hide
       // setCoachingMsg(null);
    }

    // Update Chat History State (Immutable Update)
    setChatHistories(prev => {
      const currentHistory = prev[chatId] || [];
      const newMessageObj = {
          id: `m${chatId}-${Date.now()}`,
          from: 'operator',
          text: text
      };
      return { ...prev, [chatId]: [...currentHistory, newMessageObj] };
    });

    // Update Last Message in Chat List (Optional UI enhancement)
    setChats(prev =>
      prev.map(c =>
        c.id === chatId ? { ...c, lastMessage: text, time: 'Agora' } : c // Update time as well
      )
    );
  }, []); // Dependencies: none needed if using functional updates correctly

  const handleEndChat = useCallback((chatId) => {
    const mockFeedback = {
      rating: Math.floor(Math.random() * 2) + 4,
      comment: Math.random() > 0.5 ? "Rápido e resolveu!" : "Muito atencioso.",
      customerName: mockCustomerData[chatId]?.name || "Cliente",
    };
    setLastFeedback(mockFeedback);
    setNeedsWrapup(true); // Go to wrapup screen
    setCallStatus('idle'); // Ensure call status is reset
  }, []);

  const handleConfirmWrapup = useCallback(() => {
    if (!activeChatId) return; // Guard clause

    setChats(prev =>
      prev.map(c =>
        c.id === activeChatId ? { ...c, status: 'resolved', lastMessage: "Atendimento finalizado.", unread: 0 } : c
      )
    );
    setCompletedChats(c => c + 1);
    setShowFeedbackModal(true); // Show feedback *after* confirming wrapup
    setNeedsWrapup(false); // Exit wrapup mode
    setActiveChatId(null); // Deselect chat after wrapup
  }, [activeChatId]); // Depend on activeChatId

  const closeFeedbackModal = useCallback(() => {
    setShowFeedbackModal(false);
    setLastFeedback(null);
  }, []);

  const handleCallAction = useCallback((action) => {
    if (action === 'audio') {
      setCallStatus(s => s === 'active' ? 'idle' : 'active');
    } else if (action === 'confirm_wrapup') {
      handleConfirmWrapup(); // Call the wrapup handler
    }
    // Add other actions (video, transfer, etc.) here
  }, [handleConfirmWrapup]); // Depends on handleConfirmWrapup

  const handleToggleViewMode = useCallback(() => {
     setViewMode(v => v === 'agent' ? 'manager' : 'agent');
  }, []);


  // --- Memos for Derived State ---
  const activeChat = useMemo(() => chats.find(c => c.id === activeChatId), [activeChatId, chats]);
  const activeCustomer = useMemo(() => activeChatId ? mockCustomerData[activeChatId] : null, [activeChatId]);
  const activeChatHistory = useMemo(() => activeChatId ? chatHistories[activeChatId] || [] : [], [activeChatId, chatHistories]);
  const activeAiSuggestions = useMemo(() => activeChatId ? (mockAiSuggestions[activeChatId] || []) : [], [activeChatId]);

  // --- Render Logic ---
  if (!isLoggedIn) {
    return (
      <ThemeProvider>
        {/*
          NOTE: CSS Variables and classes (like animate-gradient, animate-blob)
          should be defined in your global CSS / Tailwind config, not inline.
        */}
        <LoginScreen onLogin={handleLogin} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="flex flex-col w-full h-screen overflow-hidden bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-inter">
        <DashboardHeader
          operator={operator}
          completedChats={completedChats}
          onLogout={handleLogout}
          currentView={viewMode}
          onToggleViewMode={handleToggleViewMode}
        />

        {/* Container principal (Varia entre Agente e Gestor) */}
        {viewMode === 'agent' ? (
          <main className="flex flex-1 w-full h-[calc(100vh-6rem)] overflow-hidden"> {/* FIXED: Adjusted height calc for header+footer */}
            {/* Fila (Sidebar Esquerda) */}
            <div
              className="h-full flex-shrink-0"
              style={{ width: `${leftPanelWidth}px` }}
            >
              <ChatQueue
                chats={chats}
                activeChatId={activeChatId}
                onSelectChat={handleSelectChat}
              />
            </div>

            <ResizeHandle onMouseDown={startResizing('left')} />

            {/* Janela de Chat (Centro) */}
            <ChatWindow
              chat={activeChat}
              customer={activeCustomer}
              history={activeChatHistory}
              aiSuggestions={activeAiSuggestions}
              onEndChat={handleEndChat}
              onSendMessage={handleSendMessage}
              callStatus={callStatus}
              onCallAction={handleCallAction}
              needsWrapup={needsWrapup}
            />

            <ResizeHandle onMouseDown={startResizing('right')} />

            {/* Contexto (Sidebar Direita) */}
            <div
              className="h-full flex-shrink-0"
              style={{ width: `${rightPanelWidth}px` }}
            >
              <CustomerContextPanel
                customer={activeCustomer}
                callStatus={callStatus}
              />
            </div>
          </main>
        ) : (
          <ManagerDashboard
            operatorName={operator.name}
            onToggleViewMode={handleToggleViewMode} // Pass toggle back to manager view
          />
        )}

        {/* Rodapé */}
        <footer className="h-8 px-6 bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border text-light-text-secondary dark:text-dark-text-secondary flex items-center justify-between text-xs shrink-0">
          <div>
            <span className="font-semibold text-light-text dark:text-dark-text">Logo</span> | Hub v2.0
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> {/* Added pulse */}
            <span>Sistema Operacional</span>
          </div>
        </footer>

        {/* Modais Globais */}
        <FeedbackModal feedback={lastFeedback} onClose={closeFeedbackModal} />
        <StarCoachingPopup
          message={coachingMsg?.message}
          type={coachingMsg?.type}
          onClose={() => setCoachingMsg(null)} // Clear message on close
        />
      </div>
    </ThemeProvider>
  );
}

