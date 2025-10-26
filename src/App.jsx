import React, { useState, useEffect, useCallback, createContext, useContext, useMemo, useRef } from 'react';

// --- Contexto de Tema ---
const ThemeContext = createContext();
// ... (código do ThemeProvider)
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' ou 'dark'

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


// --- Ícones SVG (embutidos para funcionar em um único arquivo) ---
// ... (todos os ícones SVG permanecem os mesmos)
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

const IconSparkles = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
    <path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path>
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

const IconPaperclip = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

const IconPhone = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
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
    <path d="M10.68 13.31a16 16 0 0 0 3.42 3.42"></path>
    <path d="M3.72 2.72a2.06 2.06 0 0 0-2.45 1.39 19.79 19.79 0 0 0-3.07 8.67A2 2 0 0 0 4.11 15h3a2 2 0 0 0 2-1.72 12.84 12.84 0 0 1 .7-2.81 2 2 0 0 0-.45-2.11L8.09 7.09"></path>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
    <line x1="2" y1="2" x2="22" y2="22"></line>
  </svg>
);

const IconSettings = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const IconFile = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
);

// --- Ícones para Pausa e Menus ---
const IconPause = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);

const IconPlay = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const IconUserCircle = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="10" r="3"></circle>
    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
  </svg>
);

const IconBell = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const IconBookOpen = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const IconCalendar = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <path d="M20 8v6"></path>
    <path d="M23 11h-6"></path>
  </svg>
);

// Ícone para Relatório
const IconFileText = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);

// Ícone para Excel/Planilha
const IconGrid = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

// --- Novos Ícones (Omnichannel, Co-browse, Dashboard) ---

// Ícone do WhatsApp
const IconWhatsApp = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" style={{ display: 'none' }}></path> {/* Path dummy para evitar erro, ícone real abaixo */}
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.77.46 3.45 1.28 4.96L2.04 22l5.1-1.37c1.45.77 3.06 1.2 4.77 1.2h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM17.6 15.5c-.29-.15-1.7-.84-1.96-.94-.27-.1-.46-.15-.66.15-.2.3-.74.94-.9 1.13-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.34.46-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.66-1.58-.9-2.15-.24-.57-.48-.48-.66-.48h-.57c-.2 0-.5.07-.75.37-.25.3-.97.94-.97 2.3 0 1.36.99 2.66 1.13 2.85.14.2 1.96 3 4.76 4.17 2.8 1.17 2.8.78 3.3.73.5-.05 1.7-.7 1.94-1.36.24-.66.24-1.2.17-1.36c-.07-.15-.27-.22-.56-.37z" fill="currentColor"></path>
  </svg>
);

// Ícone do Instagram
const IconInstagram = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Ícone de Co-browsing
const IconMousePointerClick = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
    <path d="m13 13 6 6"></path>
  </svg>
);

// Ícone do Dashboard de Gestão
const IconLayoutDashboard = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="9"></rect>
    <rect x="14" y="3" width="7" height="5"></rect>
    <rect x="14" y="12" width="7" height="9"></rect>
    <rect x="3" y="16" width="7" height="5"></rect>
  </svg>
);

// Ícone de Microfone (para transcrição)
const IconMic = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

// Ícone de "X" (Fechar Pop-up)
const IconX = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Ícone de Alerta (Coaching)
const IconAlertTriangle = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);


// --- Dados Mockados (Simulados) ---

const mockOperator = {
  name: "Ana Silva",
  role: "Especialista de Suporte Sênior", // Novo campo de cargo
  avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=AS"
};

const initialChats = [
  { id: 1, customerName: "Bruno Gomes", lastMessage: "Meu pedido está atrasado...", time: "2m", unread: 2, status: 'waiting', source: 'web' },
  { id: 2, customerName: "Carla Dias", lastMessage: "Não consigo fazer login.", time: "5m", unread: 1, status: 'waiting', source: 'whatsapp' },
  { id: 4, customerName: "Juliana Paes", lastMessage: "Vi um post sobre o produto X...", time: "10m", unread: 0, status: 'waiting', source: 'instagram' },
  { id: 3, customerName: "Marcos Andrade", lastMessage: "Obrigado pela ajuda!", time: "1h", unread: 0, status: 'resolved', source: 'web' },
];

const mockCustomerData = {
  1: {
    name: "Bruno Gomes",
    email: "bruno.g@exemplo.com",
    phone: "(11) 98765-4321",
    sentiment: "Frustrado",
    sentimentEmoji: "😠",
    tags: ["Cliente Ouro", "Risco de Churn"],
    triage: { "Problema": "Entrega", "Pedido": "A1023", "Resumo": "Pedido atrasado, não recebido." },
    orderHistory: [
      { id: "A1023", item: "Fone de Ouvido XYZ", status: "Atrasado" },
      { id: "A1001", item: "Mouse Gamer", status: "Entregue" },
    ]
  },
  2: {
    name: "Carla Dias",
    email: "carla.d@exemplo.com",
    phone: "(21) 91234-5678",
    sentiment: "Neutro",
    sentimentEmoji: "😐",
    tags: ["Novo Cliente"],
    triage: { "Problema": "Login", "Resumo": "Não consegue redefinir a senha." },
    orderHistory: []
  },
  4: {
    name: "Juliana Paes",
    email: "juliana.p@exemplo.com",
    phone: "(31) 95555-1234",
    sentiment: "Curioso",
    sentimentEmoji: "🤔",
    tags: ["Lead", "Venda Potencial"],
    triage: { "Problema": "Dúvida de Produto", "Produto": "Produto X (Post)" },
    orderHistory: []
  }
};

const mockChatHistory = {
  1: [
    { from: "customer", text: "Olá, estou com um problema." },
    { from: "customer", text: "Meu pedido #A1023 está marcado como entregue, mas não recebi." },
    { from: "operator", text: "Olá, Bruno! Lamento por isso. Deixe-me verificar o que aconteceu." },
    { from: "customer", text: "Fico no aguardo. É urgente." },
  ],
  2: [
    { from: "customer", text: "Não consigo fazer login." },
    { from: "customer", text: "Já tentei redefinir a senha e não chega o email." },
  ],
  4: [
    { from: "customer", text: "Oii, tudo bem? Vi um post de vocês no Insta sobre o Produto X. Podem me explicar como funciona?" },
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
    "Agradecer o contato e perguntar qual foi o post.",
    "Enviar o link da página do Produto X.",
    "Perguntar se ela tem interesse em [Produto Y] que é complementar."
  ]
};

// Mock para Transcrição de Áudio
const mockTranscription = [
  { speaker: "customer", text: "Alô? Estou a ligar porque o meu pedido A1023 não chegou." },
  { speaker: "operator", text: "Olá Sr. Bruno, lamento ouvir isso. Pode confirmar o seu email, por favor?" },
  { speaker: "customer", text: "Claro, é bruno.g@exemplo.com." },
  { speaker: "star", text: "[STAR: Cliente frustrado. Pedido A1023. Sugerir verificação de morada.]" },
];

// Mock para Dashboard de Gestor
const mockManagerStats = {
  agentsOnline: 8,
  agentsInCall: 5,
  agentsPaused: 2,
  agentsWrapup: 1,
  queueWaiting: 12,
  maxWaitTime: "8m 45s",
  sla: "85%",
};

// Mock para Análise de QA da Star
const mockQaAnalysis = [
  { operator: "Ana Silva", score: 95, sentiment: "Positivo", note: "Excelente empatia, resolução rápida." },
  { operator: "Carlos Souza", score: 78, sentiment: "Neutro", note: "Resolveu, mas faltou empatia no início." },
  { operator: "Maria Lima", score: 88, sentiment: "Positivo", note: "Boa condução, sugeriu upsell." },
];

// NOVO: Lista de palavras para o filtro
const mockBadWords = ["palavrao", "obsceno", "chulao", "idiota", "burro", "caralho", "porra", "cu", "puta"]; // Lista de simulação


// --- Componentes da Aplicação ---

/**
 * NOVO: Componente Handle para Redimensionar
 */
const ResizeHandle = ({ onMouseDown }) => {
  return (
    <div
      className="w-2 flex-shrink-0 cursor-col-resize bg-light-border dark:bg-dark-border hover:bg-blue-500 transition-colors duration-200"
      onMouseDown={onMouseDown}
    />
  );
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
    if (username === "operador" && password === "123") {
      onLogin(mockOperator);
    } else {
      setError("Usuário ou senha inválidos. (Tente: operador / 123)");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-inter">
      <div className="w-full max-w-md p-8 space-y-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-xl">
        <div className="text-center">
          <IconMessageSquare className="w-12 h-12 mx-auto text-blue-600" />
          <h2 className="mt-4 text-3xl font-bold">
            CS HUB ExP
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
                           bg-light-input dark:bg-dark-input border-light-border dark:border-dark-border text-light-text dark:text-dark-text"
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
                           bg-light-input dark:bg-dark-input border-light-border dark:border-dark-border text-light-text dark:text-dark-text"
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
      </div>
    </div>
  );
};

/**
 * Cronômetro de Tempo de Trabalho
 */
const WorkTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado de Pausa

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) { // Só incrementa se não estiver pausado
        setSeconds(s => s + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]); // Adiciona isPaused como dependência

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
      {/* Botão de Pausa/Play */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        title={isPaused ? "Retomar" : "Pausar"}
        className="p-1 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150"
      >
        {isPaused ? <IconPlay className="w-4 h-4" /> : <IconPause className="w-4 h-4" />}
      </button>
    </div>
  );
};

/**
 * Toggle de Tema
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150 shadow-sm"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {theme === 'light' ? (
        <IconMoon className="w-5 h-5" />
      ) : (
        <IconSun className="w-5 h-5" />
      )}
    </button>
  );
};

/**
 * Componente Dropdown Genérico
 */
const DropdownItem = ({ icon, label, href, onClick }) => {
  // Classes CSS comuns
  const classes = "flex items-center w-full px-4 py-2 text-sm text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150";

  // Renderiza como <button> se onClick for fornecido
  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {icon}
        <span className="ml-3">{label}</span>
      </button>
    );
  }

  // Renderiza como <a> (link) por padrão
  return (
    <a
      href={href || "#"}
      className={classes}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </a>
  );
};

/**
 * Cabeçalho do Dashboard
 */
const DashboardHeader = ({ operator, completedChats, onLogout }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false); // Novo estado para o modal de relatório

  const profileRef = useRef(null);
  const settingsRef = useRef(null);

  // Lógica para fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handler para exportar relatório
  const handleExportReport = () => {
    // Agora, em vez de exportar, abre o modal
    setShowReportModal(true);
    setIsProfileOpen(false); // Fechar o menu de perfil
  };


  return (
    <>
      <header className="flex items-center justify-between h-16 px-6 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border shadow-sm shrink-0">
        
        {/* Lado Esquerdo */}
        <div className="flex items-center space-x-6">
          {/* Título */}
          <div className="flex items-center space-x-2">
             <IconMessageSquare className="w-6 h-6 text-blue-600" />
             <h1 className="text-xl font-bold text-light-text dark:text-dark-text">Atendimento</h1>
          </div>
          {/* Contagem de Chats */}
           <div className="flex items-center p-2 space-x-2 bg-light-input dark:bg-dark-input rounded-xl shadow-inner">
             <IconCheckCircle className="w-5 h-5 text-blue-500" />
             <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Atendimentos Hoje:</span>
             <span className="text-sm font-bold text-light-text dark:text-dark-text">{completedChats}</span>
           </div>
        </div>

        {/* Lado Direito */}
        <div className="flex items-center space-x-4">
          <WorkTimer />
          <div className="w-px h-6 bg-light-border dark:bg-dark-border"></div>

          {/* Menu de Perfil (Avatar) */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(prev => !prev)}
              className="w-8 h-8 rounded-full shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              title="Menu do Perfil"
            >
              <img src={operator.avatar} alt="Avatar" />
            </button>
            
            {/* Dropdown do Perfil */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-light-card dark:bg-dark-card rounded-xl shadow-lg z-20 border border-light-border dark:border-dark-border">
                <div className="px-4 py-3 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm font-medium text-light-text dark:text-dark-text truncate">{operator.name}</p>
                  <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary truncate">{operator.role}</p>
                </div>
                <nav className="py-1">
                  <DropdownItem icon={<IconUserCircle className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />} label="Ver Perfil" />
                  <DropdownItem icon={<IconBell className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />} label="Notificações" />
                  <DropdownItem icon={<IconBookOpen className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />} label="Treinamentos" />
                  <DropdownItem icon={<IconCalendar className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />} label="Agenda" />
                  <DropdownItem icon={<IconUsers className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />} label="Meetings" />
                  <DropdownItem 
                    icon={<IconFileText className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary" />} 
                    label="Exportar Relatório"
                    onClick={handleExportReport} 
                  />
                </nav>
                {/* Botão Sair movido para cá */}
                <div className="py-1 border-t border-light-border dark:border-dark-border">
                  <button
                    onClick={onLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150"
                  >
                    <IconLogOut className="w-5 h-5" />
                    <span className="ml-3">Sair</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Menu de Configurações (Engrenagem) */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setIsSettingsOpen(prev => !prev)}
              title="Configurações"
              className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 shadow-sm"
            >
              <IconSettings className="w-5 h-5" />
            </button>
            
            {/* Dropdown de Configurações */}
            {isSettingsOpen && (
               <div className="absolute right-0 mt-2 w-48 bg-light-card dark:bg-dark-card rounded-xl shadow-lg py-1 z-20 border border-light-border dark:border-dark-border">
                  {/* Item customizado para o Tema */}
                  <div className="flex items-center justify-between w-full px-4 py-2 text-sm text-light-text dark:text-dark-text">
                    <span>Tema</span>
                    <ThemeToggle />
                  </div>
                  <DropdownItem label="Idioma" />
                  <DropdownItem label="Atalhos" />
                  <DropdownItem label="Ajuda" />
               </div>
            )}
          </div>
        </div>
      </header>

      {/* Modal de Relatório (movido para fora do header mas controlado por ele) */}
      <ReportModal 
        isOpen={showReportModal} 
        onClose={() => setShowReportModal(false)} 
      />
    </>
  );
};

/**
 * Fila de Atendimentos (Sidebar Esquerda)
 * MODIFICADO: Aceita `style` e `className` para redimensionamento
 */
const ChatQueue = ({ chats, activeChatId, onSelectChat, style, className }) => {
  const waitingChats = chats.filter(c => c.status === 'waiting');
  const resolvedChats = chats.filter(c => c.status === 'resolved');

  // Helper para ícone da fonte (Omnichannel)
  const SourceIcon = ({ source }) => {
    switch (source) {
      case 'whatsapp':
        return <IconWhatsApp className="w-4 h-4 text-green-500" title="WhatsApp" />;
      case 'instagram':
        return <IconInstagram className="w-4 h-4 text-pink-500" title="Instagram" />;
      default:
        return <IconMessageSquare className="w-4 h-4 text-blue-500" title="Web Chat" />;
    }
  };

  return (
    <aside 
      className={`flex flex-col h-full bg-light-card dark:bg-dark-card border-r border-light-border dark:border-dark-border shadow-md overflow-hidden ${className || ''}`}
      style={style}
    >
      <div className="p-4 border-b border-light-border dark:border-dark-border flex-shrink-0">
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
              {/* Ícone da Fonte */}
              <div className="mr-3 pt-1">
                <SourceIcon source={chat.source} />
              </div>
              
              <div className="flex-1 overflow-hidden">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold truncate">{chat.customerName}</span>
                  <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary flex-shrink-0">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary truncate">{chat.lastMessage}</p>
                  {/* Badge de Não Lido (some ao clicar) */}
                  {chat.unread > 0 && (
                    <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full flex-shrink-0">
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
          <div className="p-4 mt-4 border-t border-light-border dark:border-dark-border flex-shrink-0">
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
              <div className="mr-3 pt-1">
                <SourceIcon source={chat.source} />
              </div>
              <div className="flex-1 overflow-hidden">
                 <span className="text-sm font-semibold text-light-text dark:text-dark-text truncate">{chat.customerName}</span>
                 <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary truncate">{chat.lastMessage}</p>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

/**
 * Pop-up de Coaching da "Star"
 */
const StarCoachingPopup = ({ tip, onClose }) => {
  if (!tip) return null;

  const isBadTip = tip.type === 'bad';

  return (
    <div className={`absolute bottom-24 right-6 w-72 bg-light-card dark:bg-dark-card rounded-xl shadow-2xl z-20 border ${isBadTip ? 'border-red-500' : 'border-blue-500'}`}>
      <div className="flex items-center justify-between p-3 border-b border-light-border dark:border-dark-border">
        <div className="flex items-center space-x-2">
          {isBadTip ? (
            <IconAlertTriangle className="w-5 h-5 text-red-500" />
          ) : (
            <IconSparkles className="w-5 h-5 text-yellow-500" />
          )}
          <h4 className="text-sm font-semibold text-light-text dark:text-dark-text">Dica da IA Star</h4>
        </div>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-light-hover dark:hover:bg-dark-hover">
          <IconX className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary" />
        </button>
      </div>
      <div className="p-4 text-sm text-light-text dark:text-dark-text">
        {tip.message}
      </div>
    </div>
  );
};

/**
 * Ecrã de Resumo (Auto-Wrapup) da "Star"
 */
const AutoWrapupScreen = ({ customer, onConfirm }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-light-bg dark:bg-dark-bg h-full">
      <div className="w-full max-w-lg p-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-xl">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 text-yellow-800 dark:bg-yellow-500 dark:text-yellow-900 font-bold text-lg shadow-sm flex-shrink-0">
            S
          </div>
          <IconFileText className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">Resumo do Atendimento (IA Star)</h2>
        </div>
        
        <p className="mt-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
          A "Star" gerou o seguinte resumo para o atendimento de <span className="font-medium">{customer.name}</span>.
        </p>

        <div className="my-6 p-4 bg-light-input dark:bg-dark-input rounded-xl border border-light-border dark:border-dark-border space-y-2">
          <div>
            <h4 className="text-xs font-bold uppercase text-light-text-secondary dark:text-dark-text-secondary">Problema</h4>
            <p className="text-sm text-light-text dark:text-dark-text">Cliente {customer.sentiment.toLowerCase()} ({customer.triage?.Problema}) referente ao pedido {customer.triage?.Pedido}.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase text-light-text-secondary dark:text-dark-text-secondary">Ação</h4>
            <p className="text-sm text-light-text dark:text-dark-text">Operador verificou o status, confirmou o atraso com a transportadora.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase text-light-text-secondary dark:text-dark-text-secondary">Resolução</h4>
            <p className="text-sm text-light-text dark:text-dark-text">Oferecido cupom de desconto de 10% pela inconveniência. Cliente aceitou.</p>
          </div>
        </div>

        <button
          onClick={onConfirm}
          className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
        >
          <IconCheckCircle className="w-5 h-5 mr-2" />
          Confirmar e Fechar Atendimento
        </button>
      </div>
    </div>
  );
};


/**
 * Janela de Chat (Centro)
 * MODIFICADO: Recebe `callStatus`, `setCallStatus`, `needsWrapup`, `setNeedsWrapup` como props
 */
const ChatWindow = ({ 
  chat, 
  customer, 
  history, 
  aiSuggestions, 
  onEndChat,
  callStatus,
  setCallStatus,
  needsWrapup,
  setNeedsWrapup
}) => {
  const [newMessage, setNewMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [coachingTip, setCoachingTip] = useState(null); // Estado para o pop-up da Star

  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);
  
  // NOVO: Filtro de palavras
  const containsBadWord = (message) => {
    const lowerMessage = message.toLowerCase();
    return mockBadWords.some(word => lowerMessage.includes(word));
  };

  useEffect(() => {
    if (chatEndRef.current && callStatus === 'none') {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, callStatus]);

  // Limpa o coaching tip ao mudar de chat
  useEffect(() => {
    setCoachingTip(null);
  }, [chat]);

  // Simula o Coaching da Star
  const handleStarCoaching = (message) => {
    // Limpa dica anterior
    setCoachingTip(null);
    
    let tip = null;
    const lowerMessage = message.toLowerCase();

    if (containsBadWord(lowerMessage)) {
       tip = {
        type: 'bad',
        message: 'Linguagem inadequada detetada. Por favor, reveja a sua mensagem antes de enviar. Mantenha a comunicação profissional.'
      };
    } else if (lowerMessage.includes("não posso") || lowerMessage.includes("impossível") || lowerMessage.includes("errado")) {
      tip = {
        type: 'bad',
        message: 'O seu tom parece negativo. Tente focar-se no que *pode* ser feito. Se precisar de ajuda, contacte o seu supervisor.'
      };
    } else if (lowerMessage.includes("lamento") || lowerMessage.includes("entendo") || lowerMessage.includes("compreendo")) {
      tip = {
        type: 'good',
        message: 'Excelente uso de empatia! Continue assim.'
      };
    }
    
    if (tip) {
      setTimeout(() => setCoachingTip(tip), 1500); // Dá um tempo para a "Star" pensar
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    // NOVO: Verificação de filtro de palavras
    if (containsBadWord(newMessage)) {
      handleStarCoaching(newMessage); // Mostra o pop-up de aviso
      return; // Impede o envio
    }

    // Simula o envio
    console.log("Mensagem enviada:", newMessage);
    if (mockChatHistory[chat.id]) {
      mockChatHistory[chat.id].push({ from: 'operator', text: newMessage });
    }

    // Chama o Coaching da Star (para dicas de empatia, etc.)
    handleStarCoaching(newMessage);
    
    setNewMessage('');
  };

  // Inicia o processo de encerramento (mostra o wrapup)
  const handleEndClick = () => {
    setCallStatus('none'); // Desliga a chamada se estiver numa
    setNeedsWrapup(chat); // Ativa o ecrã de wrapup
  };

  // Confirma o encerramento (depois do wrapup)
  const handleConfirmEndChat = () => {
    // Simula o fim do chat e a recepção de um feedback
    const mockFeedback = {
      rating: Math.floor(Math.random() * 2) + 4, // 4 ou 5 estrelas
      comment: Math.random() > 0.5 ? "Atendimento rápido e resolveu meu problema!" : "Muito atencioso, obrigado(a)!",
      customerName: customer.name,
    };
    onEndChat(chat.id, mockFeedback); // Chama a função principal de encerramento
    setNeedsWrapup(null); // Limpa o estado de wrapup
  };

  // --- Funções de Anexo de Ficheiro ---
  const triggerFileInput = () => fileInputRef.current.click();
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) console.log("Ficheiros selecionados:", files);
  };
  const handleDragEnter = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); e.stopPropagation(); setIsDragging(false); };
  const handleDragOver = (e) => { e.preventDefault(); e.stopPropagation(); };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) console.log("Ficheiros largados:", files);
  };
  // --- Fim das Funções de Anexo ---

  // --- Funções de Chamada ---
  const startAudioCall = () => {
    setCallStatus('in_audio_call');
    setCoachingTip(null); // Limpa dicas
  };
  const startVideoCall = () => {
    setCallStatus('in_video_call'); // (UI não implementada, mas a lógica está aqui)
    setCoachingTip(null); // Limpa dicas
  };
  // --- Fim das Funções de Chamada ---

  if (!chat || !customer) {
    return (
      <div className="flex flex-col items-center justify-center flex-1 h-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
        <IconMessageSquare className="w-16 h-16 text-light-text-secondary dark:text-dark-text-secondary opacity-50" />
        <h3 className="mt-4 text-xl font-semibold text-light-text dark:text-dark-text">Nenhum atendimento selecionado</h3>
        <p className="mt-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">Selecione um cliente na fila para começar a atender.</p>
      </div>
    );
  }

  // --- Renderização do Ecrã de Auto-Wrapup ---
  if (needsWrapup) {
    return (
      <div className="relative flex flex-col flex-1 h-full rounded-2xl md:mx-4 md:my-2 shadow-xl">
        <AutoWrapupScreen 
          customer={customer} 
          onConfirm={handleConfirmEndChat} 
        />
      </div>
    );
  }

  return (
    <div 
      className="relative flex flex-col flex-1 h-full bg-light-card dark:bg-dark-card rounded-2xl md:mx-4 md:my-2 shadow-xl"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Overlay de Drag-and-Drop */}
      {isDragging && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-blue-500 bg-opacity-75 rounded-2xl border-4 border-dashed border-white pointer-events-none">
          <IconFile className="w-16 h-16 text-white" />
          <p className="mt-4 text-xl font-semibold text-white">Solte os arquivos aqui</p>
        </div>
      )}

      {/* Cabeçalho do Chat */}
      <div className="flex items-center justify-between h-16 px-6 bg-light-card dark:bg-dark-card border-b border-light-border dark:border-dark-border rounded-t-2xl flex-shrink-0">
        <div>
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">{customer.name}</h3>
          <p className={`text-sm ${callStatus !== 'none' ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
            {callStatus === 'in_audio_call' ? 'Em chamada de áudio...' : (callStatus === 'in_video_call' ? 'Em chamada de vídeo...' : 'Online')}
          </p>
        </div>
        <div className="flex items-center space-x-2">
           {/* Botões de Ação (Chamada, Vídeo, Transferir) */}
           <button
            title="Ligar (áudio)"
            onClick={startAudioCall}
            disabled={callStatus !== 'none'}
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover disabled:opacity-50 transition duration-150 shadow-sm"
          >
            <IconPhone className="w-5 h-5" />
          </button>
          <button
            title="Ligar (vídeo)"
            onClick={startVideoCall}
            disabled={callStatus !== 'none'}
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover disabled:opacity-50 transition duration-150 shadow-sm"
          >
            <IconVideo className="w-5 h-5" />
          </button>
           <button
            title="Co-browsing"
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150 shadow-sm"
          >
            <IconMousePointerClick className="w-5 h-5" />
          </button>
          <button
            title="Transferir chat"
            className="p-2 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150 shadow-sm"
          >
            <IconUserPlus className="w-5 h-5" />
          </button>

          <div className="w-px h-6 mx-2 bg-light-border dark:border-dark-border"></div>

          {/* Botão Encerrar (Ícone) */}
          <button
            onClick={handleEndClick}
            title="Encerrar Atendimento"
            className="p-2 text-white bg-red-600 rounded-xl shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
          >
            <IconPhoneOff className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- CONTEÚDO PRINCIPAL (Chat ou Transcrição) --- */}
      
      {/* Modo de Chamada de Áudio (Transcrição) */}
      {callStatus === 'in_audio_call' ? (
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-center text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <IconMic className="w-4 h-4 mr-2 animate-pulse text-red-500" />
            Transcrição em tempo real da "IA Star"
          </div>
          {mockTranscription.map((msg, index) => (
            <div key={index} className={`flex ${msg.speaker === 'operator' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                  msg.speaker === 'operator'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : (msg.speaker === 'star' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border border-yellow-300' : 'bg-light-message dark:bg-dark-message text-light-text dark:text-dark-text rounded-bl-none')
                }`}
              >
                <span className="text-xs font-bold capitalize">{msg.speaker === 'customer' ? customer.name : msg.speaker}</span>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      ) : (
        /* Modo de Chat Normal */
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {history.map((msg, index) => (
            <div key={index} className={`flex ${msg.from === 'operator' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                  msg.from === 'operator'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-light-message dark:bg-dark-message text-light-text dark:text-dark-text rounded-bl-none'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} /> {/* Para scroll automático */}
        </div>
      )}


      {/* Sugestões da IA (Aparece apenas no modo chat) */}
      {callStatus === 'none' && (
        <div className="p-4 bg-light-input dark:bg-dark-input border-t border-light-border dark:border-dark-border rounded-b-2xl flex-shrink-0">
          <div className="flex items-center mb-2 space-x-2">
            {/* Avatar da IA "Star" */}
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-yellow-800 dark:bg-yellow-500 dark:text-yellow-900 font-bold text-xs shadow-sm flex-shrink-0">
              S
            </div>
            <IconSparkles className="w-5 h-5 text-yellow-500" />
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
      )}

      {/* Input de Mensagem (Aparece apenas no modo chat) */}
      {callStatus === 'none' && (
        <div className="p-4 bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border flex-shrink-0">
          {/* Input de Ficheiro (escondido) */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileSelect}
            className="hidden" 
            multiple 
          />
          <form onSubmit={handleSend} className="flex items-center space-x-3">
            {/* Botão de Anexo */}
            <button
              type="button"
              title="Anexar arquivo"
              onClick={triggerFileInput}
              className="p-3 text-light-text-secondary dark:text-dark-text-secondary rounded-xl hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            >
              <IconPaperclip className="w-5 h-5" />
            </button>
            
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 w-full px-4 py-3 text-sm rounded-xl shadow-inner focus:outline-none focus:ring-blue-500 focus:border-blue-500
                         bg-light-input dark:bg-dark-input border-light-border dark:border-dark-border text-light-text dark:text-dark-text"
            />
            <button
              type="submit"
              className="p-3 text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
            >
              <IconSend className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Pop-up de Coaching (flutua sobre esta janela) */}
      <StarCoachingPopup tip={coachingTip} onClose={() => setCoachingTip(null)} />

    </div>
  );
};

/**
 * Painel de Contexto do Cliente (Sidebar Direita - Inovador)
 * MODIFICADO: Aceita `style` e `className` para redimensionamento
 */
const CustomerContextPanel = ({ customer, callStatus, style, className }) => {
  const [activeTab, setActiveTab] = useState('details');
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Se uma chamada começar, muda automaticamente para a tab de "Ajuda" (IA Star)
    if (callStatus !== 'none') {
      setActiveTab('help');
    } else {
      setActiveTab('details');
    }
  }, [callStatus]);

  if (!customer) {
    return (
      <aside 
        className={`flex-col hidden h-full bg-light-bg dark:bg-dark-bg border-l border-light-border dark:border-dark-border lg:flex overflow-hidden ${className || ''}`} 
        style={style}
      >
        {/* Painel de contexto vazio */}
      </aside>
    );
  }

  // Variáveis para usar o tema (retirado de dentro do src da imagem)
  const avatarBg = theme === 'dark' ? '1F2937' : 'EBF4FF';
  const avatarText = theme === 'dark' ? '9CA3AF' : '4299E1';

  return (
    <aside 
      className={`flex-col hidden h-full bg-light-card dark:bg-dark-card border-l border-light-border dark:border-dark-border lg:flex overflow-hidden shadow-md ${className || ''}`}
      style={style}
    >
      {/* Tabs */}
      <div className="border-b border-light-border dark:border-dark-border flex-shrink-0">
        <nav className="flex -mb-px" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('details')}
            disabled={callStatus !== 'none'} // Desabilita a tab de detalhes durante a chamada
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition duration-150
              ${activeTab === 'details'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:border-gray-300 dark:hover:border-gray-600'}
              ${callStatus !== 'none' ? 'opacity-50 cursor-not-allowed' : ''}
              `}
          >
            Contexto
          </button>
          <button
            onClick={() => setActiveTab('help')}
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition duration-150
              ${activeTab === 'help'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text hover:border-gray-300 dark:hover:border-gray-600'}
              `}
          >
            Ajuda (IA Star)
          </button>
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Tab de Detalhes (Contexto) */}
        {activeTab === 'details' && (
          <div className="p-6 space-y-6">
            <div className="text-center">
              <img 
                src={`https://placehold.co/100x100/${avatarBg}/${avatarText}?text=${customer.name.charAt(0)}`} 
                alt="Avatar Cliente" 
                className="w-20 h-20 mx-auto rounded-full shadow-md" 
              />
              <h3 className="mt-3 text-lg font-semibold text-light-text dark:text-dark-text">{customer.name}</h3>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{customer.email}</p>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{customer.phone}</p>
            </div>

            {/* Triagem (Star Bot) */}
            {customer.triage && (
              <div className="p-4 bg-light-input dark:bg-dark-input rounded-xl shadow-sm border border-light-border dark:border-dark-border">
                <h4 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Pré-Triagem (IA Star)</h4>
                <ul className="mt-2 space-y-1">
                  {Object.entries(customer.triage).map(([key, value]) => (
                    <li key={key} className="text-sm text-light-text dark:text-dark-text">
                      <span className="font-semibold">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sentimento & Tags (Inovador) */}
            <div className="p-4 bg-light-input dark:bg-dark-input rounded-xl shadow-sm border border-light-border dark:border-dark-border">
              <h4 className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Sentimento (IA Star)</h4>
              <p className={`text-lg font-semibold ${customer.sentiment === 'Frustrado' ? 'text-red-500' : 'text-light-text dark:text-dark-text'}`}>
                {customer.sentimentEmoji} {customer.sentiment}
              </p>
              
              <h4 className="mt-4 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">Tags</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {customer.tags.map(tag => (
                  <span key={tag} className={`px-3 py-1 text-xs font-medium rounded-xl shadow-sm
                    ${tag.includes('Venda') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
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

        {/* Tab de Ajuda (IA Star) */}
        {activeTab === 'help' && (
          <div className="p-6 space-y-6">
            {/* Contexto da Chamada (Aparece durante a chamada) */}
            {callStatus !== 'none' && (
              <div className="p-4 bg-light-input dark:bg-dark-input rounded-xl shadow-sm border border-blue-500">
                <div className="flex items-center space-x-2 text-blue-500">
                  <IconMic className="w-5 h-5 animate-pulse" />
                  <h4 className="text-base font-semibold">A "Star" está a Ouvir...</h4>
                </div>
                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-light-text dark:text-dark-text">Cliente mencionou: <span className="font-semibold">"Pedido A1023"</span></li>
                  <li className="text-sm text-light-text dark:text-dark-text">Sentimento: <span className="font-semibold text-red-500">Frustrado</span></li>
                  <li className="text-sm text-light-text dark:text-dark-text">Sugestão: <span className="font-semibold text-blue-600 dark:text-blue-400">Oferecer cupom.</span></li>
                </ul>
              </div>
            )}

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

/**
 * Modal de Feedback
 */
const FeedbackModal = ({ feedback, onClose }) => {
  if (!feedback) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
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
          <p className="mt-4 text-lg italic text-light-text dark:text-dark-text">
            "{feedback.comment}"
          </p>
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


/**
 * Novo Modal de Relatório
 */
const ReportModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleExportPDF = () => {
    console.log("Simulando geração de PDF com gráficos da IA Star...");
    onClose();
  };

  const handleExportExcel = () => {
    console.log("Simulando exportação de Excel com métricas...");
    onClose();
  };

  // Lista de métricas incluídas
  const metricsList = [
    "Satisfação do Cliente (CSAT)",
    "Tempo Médio de Atendimento (AHT)",
    "Chamados Atendidos vs. Não Atendidos",
    "Chamados Transferidos (Setor/Jornada)",
    "Vendas de Novos Produtos (Upsell)",
    "Desempenho Geral (Nota da Star)",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-lg p-6 bg-light-card dark:bg-dark-card rounded-2xl shadow-xl text-light-text dark:text-dark-text">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Exportar Relatório de Produtividade
          </h2>
          <button onClick={onClose} className="p-1 text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-hover dark:hover:bg-dark-hover rounded-full">&times;</button>
        </div>
        
        <p className="mt-2 mb-6 text-sm text-light-text-secondary dark:text-dark-text-secondary">
          Selecione o formato de exportação. Ambos os relatórios incluem as seguintes métricas:
        </p>

        {/* Lista de Métricas */}
        <div className="mb-6 p-4 bg-light-input dark:bg-dark-input rounded-xl border border-light-border dark:border-dark-border">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
            {metricsList.map(metric => (
              <li key={metric} className="flex items-center text-xs text-light-text dark:text-dark-text">
                <IconCheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                {metric}
              </li>
            ))}
          </ul>
        </div>


        <div className="space-y-4">
          {/* Opção PDF com IA */}
          <button
            onClick={handleExportPDF}
            className="w-full flex items-center p-4 text-left bg-light-input dark:bg-dark-input rounded-xl shadow-sm hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <IconFileText className="w-8 h-8 text-red-500 flex-shrink-0" />
            <div className="ml-4">
              <p className="font-semibold text-light-text dark:text-dark-text">Gerar PDF com Gráficos</p>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                Relatório visual com <span className="font-bold text-yellow-500">IA Star Insights</span>.
              </p>
            </div>
          </button>

          {/* Opção Excel */}
          <button
            onClick={handleExportExcel}
            className="w-full flex items-center p-4 text-left bg-light-input dark:bg-dark-input rounded-xl shadow-sm hover:bg-light-hover dark:hover:bg-dark-hover transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <IconGrid className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div className="ml-4">
              <p className="font-semibold text-light-text dark:text-dark-text">Exportar Excel (Métricas)</p>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                Dados brutos e métricas pré-definidas para análise.
              </p>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};


/**
 * NOVO: Dashboard do Gestor
 */
const ManagerDashboard = () => {

  const StatCard = ({ title, value, icon, colorClass }) => (
    <div className="flex items-center p-4 bg-light-card dark:bg-dark-card rounded-2xl shadow-lg border border-light-border dark:border-dark-border">
      <div className={`p-3 rounded-full ${colorClass} bg-opacity-20 ${colorClass.replace('text-', 'dark:bg-').replace('text-', 'dark:bg-opacity-20')} `}>
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">{title}</p>
        <p className="text-2xl font-bold text-light-text dark:text-dark-text">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="flex-1 h-full p-6 overflow-y-auto bg-light-bg dark:bg-dark-bg">
      <h1 className="text-3xl font-bold text-light-text dark:text-dark-text mb-6">Dashboard de Gestão</h1>

      {/* Secção 1: Wallboard em Tempo Real */}
      <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">Wallboard (Tempo Real)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Fila de Espera" value={mockManagerStats.queueWaiting} icon={<IconUsers className="w-6 h-6" />} colorClass="text-red-500" />
        <StatCard title="Tempo Máx. Espera" value={mockManagerStats.maxWaitTime} icon={<IconClock className="w-6 h-6" />} colorClass="text-yellow-500" />
        <StatCard title="Agentes Online" value={mockManagerStats.agentsOnline} icon={<IconUserCircle className="w-6 h-6" />} colorClass="text-green-500" />
        <StatCard title="Nível de Serviço (SLA)" value={mockManagerStats.sla} icon={<IconCheckCircle className="w-6 h-6" />} colorClass="text-blue-500" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
         <div className="p-3 bg-light-card dark:bg-dark-card rounded-xl shadow text-center">
            <p className="text-xs uppercase text-light-text-secondary dark:text-dark-text-secondary">Em Chamada</p>
            <p className="text-xl font-bold text-light-text dark:text-dark-text">{mockManagerStats.agentsInCall}</p>
         </div>
         <div className="p-3 bg-light-card dark:bg-dark-card rounded-xl shadow text-center">
            <p className="text-xs uppercase text-light-text-secondary dark:text-dark-text-secondary">Em Pausa</p>
            <p className="text-xl font-bold text-light-text dark:text-dark-text">{mockManagerStats.agentsPaused}</p>
         </div>
         <div className="p-3 bg-light-card dark:bg-dark-card rounded-xl shadow text-center">
            <p className="text-xs uppercase text-light-text-secondary dark:text-dark-text-secondary">Em Resumo (Wrapup)</p>
            <p className="text-xl font-bold text-light-text dark:text-dark-text">{mockManagerStats.agentsWrapup}</p>
         </div>
         <div className="p-3 bg-light-card dark:bg-dark-card rounded-xl shadow text-center">
            <p className="text-xs uppercase text-light-text-secondary dark:text-dark-text-secondary">Disponíveis</p>
            <p className="text-xl font-bold text-green-500">
              {mockManagerStats.agentsOnline - mockManagerStats.agentsInCall - mockManagerStats.agentsPaused - mockManagerStats.agentsWrapup}
            </p>
         </div>
      </div>

      {/* Secção 2: Análise de Qualidade (QA) da Star */}
      <h2 className="text-xl font-semibold text-light-text dark:text-dark-text mt-10 mb-4">Análise de Qualidade (IA Star)</h2>
      <div className="bg-light-card dark:bg-dark-card rounded-2xl shadow-lg border border-light-border dark:border-dark-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-light-border dark:border-dark-border bg-light-input dark:bg-dark-input">
              <tr>
                <th className="px-6 py-3 text-xs font-medium uppercase text-light-text-secondary dark:text-dark-text-secondary">Operador</th>
                <th className="px-6 py-3 text-xs font-medium uppercase text-light-text-secondary dark:text-dark-text-secondary">Nota (QA)</th>
                <th className="px-6 py-3 text-xs font-medium uppercase text-light-text-secondary dark:text-dark-text-secondary">Sentimento Médio</th>
                <th className="px-6 py-3 text-xs font-medium uppercase text-light-text-secondary dark:text-dark-text-secondary">Nota da Star</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light-border dark:divide-dark-border">
              {mockQaAnalysis.map(qa => (
                <tr key={qa.operator}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-light-text dark:text-dark-text">{qa.operator}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`font-bold ${qa.score >= 90 ? 'text-green-500' : (qa.score >= 80 ? 'text-blue-500' : 'text-yellow-500')}`}>
                      {qa.score} / 100
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-light-text dark:text-dark-text">{qa.sentiment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-light-text-secondary dark:text-dark-text-secondary">{qa.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


/**
 * Componente Principal da Aplicação
 */
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [operator, setOperator] = useState(null);
  const [currentView, setCurrentView] = useState('agent'); // 'agent' ou 'manager'
  
  // Estado do Dashboard
  const [chats, setChats] = useState(initialChats);
  const [activeChatId, setActiveChatId] = useState(null);
  const [completedChats, setCompletedChats] = useState(1); // Começa com 1 (mockado)
  const [lastFeedback, setLastFeedback] = useState(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  // --- NOVOS ESTADOS (Elevados) ---
  const [callStatus, setCallStatus] = useState('none'); // 'none' | 'in_audio_call' | 'in_video_call'
  const [needsWrapup, setNeedsWrapup] = useState(null); // Estado para o auto-wrapup

  // --- LÓGICA DE REDIMENSIONAMENTO ---
  const [leftPanelWidth, setLeftPanelWidth] = useState(384); // lg:w-96
  const [rightPanelWidth, setRightPanelWidth] = useState(384); // lg:w-96
  const resizeHandleRef = useRef(null); // Stores { side, startX, startLeft, startRight }

  const minWidth = 320; // w-80
  const maxWidth = 640; // 

  const handleMouseMove = useCallback((e) => {
    if (!resizeHandleRef.current) return;
    
    // Desabilitar seleção de texto e eventos do rato no corpo
    document.body.style.userSelect = 'none';
    document.body.style.pointerEvents = 'none';
    
    const { side, startX, startLeft, startRight } = resizeHandleRef.current;
    const deltaX = e.clientX - startX;

    if (side === 'left') {
      const newWidth = startLeft + deltaX;
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setLeftPanelWidth(newWidth);
      }
    } else if (side === 'right') {
      const newWidth = startRight - deltaX; // Drag da direita é invertido
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setRightPanelWidth(newWidth);
      }
    }
  }, []); // Vazio, pois lê os valores iniciais do ref

  const handleMouseUp = useCallback(() => {
    resizeHandleRef.current = null;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    
    // Re-habilitar seleção de texto e eventos
    document.body.style.userSelect = '';
    document.body.style.pointerEvents = '';
  }, [handleMouseMove]);

  const handleMouseDown = (e, side) => {
    e.preventDefault();
    resizeHandleRef.current = {
      side,
      startX: e.clientX,
      startLeft: leftPanelWidth,
      startRight: rightPanelWidth,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  // --- FIM DA LÓGICA DE REDIMENSIONAMENTO ---


  const handleLogin = (op) => {
    setOperator(op);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setOperator(null);
    setCurrentView('agent'); // Volta para a vista de agente ao sair
  };
  
  const handleSelectChat = (chatId) => {
    setActiveChatId(chatId);
    // Remove o badge de não lido
    setChats(prevChats => 
      prevChats.map(c => 
        c.id === chatId ? { ...c, unread: 0 } : c
      )
    );
    // Reseta os estados do chat anterior
    setCallStatus('none');
    setNeedsWrapup(null);
  };

  const handleEndChat = useCallback((chatId, feedback) => {
    setChats(prevChats => 
      prevChats.map(c => 
        c.id === chatId ? { ...c, status: 'resolved', lastMessage: "Atendimento finalizado.", unread: 0 } : c
      )
    );
    setActiveChatId(null);
    setCompletedChats(c => c + 1);
    setLastFeedback(feedback);
    setShowFeedbackModal(true);
  }, []);
  
  const closeFeedbackModal = () => {
    setShowFeedbackModal(false);
    setLastFeedback(null);
  };
  
  // Memos para otimizar a passagem de props
  const activeChat = useMemo(() => {
    return chats.find(c => c.id === activeChatId);
  }, [activeChatId, chats]);
  
  const activeCustomer = useMemo(() => {
    return activeChatId ? mockCustomerData[activeChatId] : null;
  }, [activeChatId]);
  
  const activeChatHistory = useMemo(() => {
     return activeChatId ? (mockChatHistory[activeChatId] || []) : [];
  }, [activeChatId]);
  
  const activeAiSuggestions = useMemo(() => {
     return activeChatId ? (mockAiSuggestions[activeChatId] || []) : [];
  }, [activeChatId]);


  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }
  
  // A vista principal (Agente ou Gestor)
  const MainView = () => {
    if (currentView === 'manager') {
      return <ManagerDashboard />;
    }
    
    // Vista do Agente (AGORA COM PAINÉIS REDIMENSIONÁVEIS)
    return (
      <main className="flex flex-1 w-full h-[calc(100vh-7rem)] overflow-hidden">
        {/* Painel Esquerdo (Fila) */}
        <ChatQueue
          chats={chats}
          activeChatId={activeChatId}
          onSelectChat={handleSelectChat}
          style={{ flexBasis: `${leftPanelWidth}px` }}
          className="flex-shrink-0"
        />
        
        {/* Handle Esquerdo */}
        <ResizeHandle onMouseDown={(e) => handleMouseDown(e, 'left')} />

        {/* Painel Central (Chat) - Wrapper flexível */}
        <div className="flex-1 flex flex-col min-w-0 h-full relative"> {/* min-w-0 é crucial para flexbox */}
          <ChatWindow
            chat={activeChat}
            customer={activeCustomer}
            history={activeChatHistory}
            aiSuggestions={activeAiSuggestions}
            onEndChat={handleEndChat}
            // Passa os estados elevados
            callStatus={callStatus}
            setCallStatus={setCallStatus}
            needsWrapup={needsWrapup}
            setNeedsWrapup={setNeedsWrapup}
          />
        </div>
        
        {/* Handle Direito */}
        <ResizeHandle onMouseDown={(e) => handleMouseDown(e, 'right')} />
        
        {/* Painel Direito (Contexto) */}
        <CustomerContextPanel
          customer={activeCustomer}
          callStatus={callStatus} // Recebe o estado elevado
          style={{ flexBasis: `${rightPanelWidth}px` }}
          className="flex-shrink-0"
        />
      </main>
    );
  };


  return (
    <ThemeProvider>
      {/*
        Adicionei classes baseadas no tema diretamente no HTML para que o Tailwind possa pegar.
        O bloco <style> abaixo define as cores necessárias, 
        eliminando a necessidade de um 'tailwind.config.js' externo para este exemplo.
      */}
      <style>{`
        .light {
          --color-bg: #f3f4f6;
          --color-card: #ffffff;
          --color-input: #f9fafb;
          --color-border: #e5e7eb;
          --color-text: #1f2937;
          --color-text-secondary: #6b7280;
          --color-message: #f0f4f8;
          --color-hover: #f0f0f0;
        }
        .dark {
          --color-bg: #1a202c;
          --color-card: #2d3748;
          --color-input: #4a5568;
          --color-border: #4a5568;
          --color-text: #f7fafc;
          --color-text-secondary: #a0aec0;
          --color-message: #4f5e71;
          --color-hover: #3a4455;
        }

        .bg-light-bg { background-color: var(--color-bg); }
        .bg-light-card { background-color: var(--color-card); }
        .bg-light-input { background-color: var(--color-input); }
        .border-light-border { border-color: var(--color-border); }
        .text-light-text { color: var(--color-text); }
        .text-light-text-secondary { color: var(--color-text-secondary); }
        .bg-light-message { background-color: var(--color-message); }
        .hover\\:bg-light-hover:hover { background-color: var(--color-hover); }
        
        .dark .bg-dark-bg { background-color: var(--color-bg); }
        .dark .bg-dark-card { background-color: var(--color-card); }
        .dark .bg-dark-input { background-color: var(--color-input); }
        .dark .border-dark-border { border-color: var(--color-border); }
        .dark .text-dark-text { color: var(--color-text); }
        .dark .text-dark-text-secondary { color: var(--color-text-secondary); }
        .dark .bg-dark-message { background-color: var(--color-message); }
        .dark .hover\\:bg-dark-hover:hover { background-color: var(--color-hover); }
      `}</style>

      {/* Layout principal do Dashboard */}
      <div className="flex flex-col w-full h-screen overflow-hidden bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-inter">
        <DashboardHeader
          operator={operator}
          completedChats={completedChats}
          onLogout={handleLogout}
        />
        
        {/* Container principal (Agente ou Gestor) */}
        <MainView />
        
        {/* Rodapé com Logo e Seletor de Vista */}
        <footer className="h-12 flex items-center justify-between px-6 bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border shrink-0">
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
            &copy; {new Date().getFullYear()} [Logo da Sua Empresa]
          </p>
          {/* Seletor de Vista (Gestor/Agente) */}
          <div className="flex items-center space-x-2">
             <span className="text-sm font-medium text-light-text dark:text-dark-text">Vista:</span>
             <button 
                onClick={() => setCurrentView('agent')}
                disabled={currentView === 'agent'}
                className={`px-3 py-1 rounded-lg text-sm transition ${currentView === 'agent' ? 'bg-blue-600 text-white' : 'bg-light-input dark:bg-dark-input hover:bg-light-hover dark:hover:bg-dark-hover'}`}
              >
                Agente
              </button>
              <button 
                onClick={() => setCurrentView('manager')}
                disabled={currentView === 'manager'}
                className={`px-3 py-1 rounded-lg text-sm transition ${currentView === 'manager' ? 'bg-blue-600 text-white' : 'bg-light-input dark:bg-dark-input hover:bg-light-hover dark:hover:bg-dark-hover'}`}
              >
                Gestor
              </button>
          </div>
        </footer>


        {/* Modal de Feedback (só aparece se não estiver no modo gestor) */}
        {currentView === 'agent' && (
           <FeedbackModal feedback={lastFeedback} onClose={closeFeedbackModal} />
        )}
      </div>
    </ThemeProvider>
  );
}

