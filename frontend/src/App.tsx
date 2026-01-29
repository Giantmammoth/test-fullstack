import { useState, useEffect } from 'react';
import { AnalyzeService } from './services/AnalyzeService';
import { HistoriqueService } from './services/HistoriqueService';
import { AnalyzeRepository } from './repositories/AnalyzeRepository';
import { HistoriqueRepository } from './repositories/HistoriqueRepository';
import { AnalyzeForm } from './views/AnalyzeForm';
import { ScoreDisplay } from './views/ScoreDisplay';
import { HistoriqueList } from './views/HistoriqueList';
import { ErrorDisplay } from './views/ErrorDisplay';
import { AnalyzeResponse } from './models/Analyze';
import { Historique } from './models/Historique';

function App() {
  // Initialisation des services (Dependency Injection)
  const analyzeRepository = new AnalyzeRepository();
  const historiqueRepository = new HistoriqueRepository();
  const analyzeService = new AnalyzeService(analyzeRepository);
  const historiqueService = new HistoriqueService(historiqueRepository);

  // State
  const [analyzeResult, setAnalyzeResult] = useState<AnalyzeResponse | null>(null);
  const [historiques, setHistoriques] = useState<Historique[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingHistorique, setIsLoadingHistorique] = useState(false);

  // Charger l'historique au démarrage
  useEffect(() => {
    loadHistorique();
  }, []);

  const loadHistorique = async () => {
    setIsLoadingHistorique(true);
    try {
      const data = await historiqueService.getAll();
      setHistoriques(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Erreur lors du chargement de l\'historique'
      );
    } finally {
      setIsLoadingHistorique(false);
    }
  };

  const handleAnalyzeComplete = async (result: AnalyzeResponse, text: string) => {
    setAnalyzeResult(result);
    setError(null);

    // Sauvegarder dans l'historique
    try {
      await historiqueService.create({
        text: text,
        score: result.score,
      });
      // Recharger l'historique
      await loadHistorique();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Erreur lors de la sauvegarde de l\'historique'
      );
    }
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleDismissError = () => {
    setError(null);
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        Analyse de Texte IA
      </h1>

      <ErrorDisplay error={error} onDismiss={handleDismissError} />

      <AnalyzeForm
        analyzeService={analyzeService}
        onAnalyzeComplete={handleAnalyzeComplete}
        onError={handleError}
      />

      <ScoreDisplay result={analyzeResult} />

      <HistoriqueList historiques={historiques} isLoading={isLoadingHistorique} />
    </div>
  );
}

export default App;
