import { motion } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3, Building2, FileText, ChevronRight, Lock } from 'lucide-react';

function App() {
  return (
    <div className="app-container">
      {/* Background Gradients */}
      <div className="gradient-bg" />
      <div className="gradient-bg-2" />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/logo.png" alt="Sinal Verde" style={{ height: '32px' }} />
          <span>Sinal Verde</span>
        </div>
        <div className="nav-links">
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#solucoes" className="nav-link">Soluções B2B</a>
          <a href="#tecnologia" className="nav-link">Tecnologia</a>
          <a href="#sobre" className="nav-link">Sobre nós</a>
        </div>
        <div className="nav-actions">
          <a href="#login" className="btn-login" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <Lock size={16} /> Portal do Cliente
          </a>
          <button className="btn-primary">Falar com Especialista</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-pill"
        >
          <Zap size={16} color="var(--primary-color)" />
          A nova era da assessoria paralegal
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-title"
        >
          Desburocratização rápida para empresas modernas.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle"
        >
          Alvarás, licenças e gestão societária com 100% de visibilidade através do nosso portal exclusivo. Atendimento em todas as capitais do Brasil.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-buttons"
        >
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Solicitar Diagnóstico <ChevronRight size={18} />
          </button>
          <button className="btn-secondary">Ver como funciona</button>
        </motion.div>

        {/* Dashboard Mockup Component */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="dashboard-mockup"
        >
          <div className="dashboard-header">
            <div className="mac-btn close" />
            <div className="mac-btn min" />
            <div className="mac-btn max" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '1rem' }}>
              app.sinalverde.com.br/dashboard
            </span>
          </div>
          <div className="dashboard-content">
            <div className="dashboard-card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Status Alvará</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '0.5rem' }}>Aprovado ✅</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary-color)', marginTop: '0.5rem' }}>Pronto para download</div>
            </div>
            <div className="dashboard-card" style={{ borderLeft: '4px solid #f59e0b' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Alteração Contratual</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '0.5rem' }}>Na JUCESP ⏱️</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Prazo: 2 dias</div>
            </div>
            <div className="dashboard-card" style={{ borderLeft: '4px solid #3b82f6' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Registro INPI</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '0.5rem' }}>Em Análise 🔍</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Etapa 3 de 5</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof Stats */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-value">500+</div>
          <div className="stat-label">Empresas Atendidas</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">95%</div>
          <div className="stat-label">Taxa de Aprovação</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">48h</div>
          <div className="stat-label">Tempo Médio de Resposta</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">27</div>
          <div className="stat-label">Capitais Cobertas</div>
        </div>
      </section>

      {/* Features / Services */}
      <section className="features-section" id="servicos">
        <div className="section-header">
          <h2 className="section-title">Infraestrutura paralegal completa</h2>
          <p className="hero-subtitle">Tudo o que você precisa para manter sua empresa 100% legalizada, em um só lugar.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Building2 size={24} /></div>
            <h3 className="feature-title">Societário & Holdings</h3>
            <p className="feature-desc">Aberturas, alterações, encerramentos e estruturação complexa de holdings familiares e grupos econômicos.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon"><FileText size={24} /></div>
            <h3 className="feature-title">Alvarás & Licenças</h3>
            <p className="feature-desc">AVCB, Vigilância Sanitária, CETESB, Prefeitura. Descomplicamos a obtenção e renovação de todas as licenças.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><ShieldCheck size={24} /></div>
            <h3 className="feature-title">Propriedade Intelectual</h3>
            <p className="feature-desc">Registro de marcas e patentes no INPI com acompanhamento semanal para garantir seus ativos.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><BarChart3 size={24} /></div>
            <h3 className="feature-title">Certidões & Regularização</h3>
            <p className="feature-desc">Emissão de CNDs, regularização fiscal e compliance documental para participação em licitações.</p>
          </div>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Sua empresa está 100% regularizada?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Faça nosso diagnóstico gratuito em 2 minutos e descubra riscos ocultos no seu CNPJ antes que virem multas.</p>
          
          <div className="cta-input-group">
            <input type="text" placeholder="Digite seu CNPJ" className="cta-input" />
            <button className="btn-primary" style={{ backgroundColor: 'var(--primary-color)', boxShadow: 'none' }}>
              Analisar Agora
            </button>
          </div>
        </div>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '300px', height: '300px', background: 'var(--primary-color)', opacity: 0.2, filter: 'blur(80px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-50%', left: '-10%', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.4)', opacity: 0.2, filter: 'blur(80px)', borderRadius: '50%' }} />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="Sinal Verde" style={{ height: '24px' }} />
            <span>Sinal Verde</span>
          </div>
          <p className="footer-text" style={{ marginBottom: '1rem' }}>
            Assessoria paralegal de alto nível. Desburocratizamos seus negócios com tecnologia e agilidade.
          </p>
          <p className="footer-text">CNPJ: 00.000.000/0001-00</p>
          <p className="footer-text">Av. Paulista, 1000 - Bela Vista, São Paulo/SP</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <span className="link-title">Serviços</span>
            <a href="#" className="footer-link">Societário</a>
            <a href="#" className="footer-link">Licenças e Alvarás</a>
            <a href="#" className="footer-link">Registro de Marcas</a>
            <a href="#" className="footer-link">Regularização Fiscal</a>
          </div>
          <div className="link-group">
            <span className="link-title">Empresa</span>
            <a href="#" className="footer-link">Sobre nós</a>
            <a href="#" className="footer-link">Portal do Cliente</a>
            <a href="#" className="footer-link">Contato</a>
          </div>
          <div className="link-group">
            <span className="link-title">Legal</span>
            <a href="#" className="footer-link">Termos de Uso</a>
            <a href="#" className="footer-link">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
