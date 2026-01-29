import { Historique } from '../models/Historique';

interface HistoriqueListProps {
  historiques: Historique[];
  isLoading: boolean;
}

export const HistoriqueList = ({ historiques, isLoading }: HistoriqueListProps) => {
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        Chargement de l'historique...
      </div>
    );
  }

  if (historiques.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
        Aucun historique disponible
      </div>
    );
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getScoreColor = (score: number): string => {
    if (score >= 80) return '#28a745';
    if (score >= 50) return '#ffc107';
    return '#dc3545';
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>Historique des analyses</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {historiques.map((historique) => (
          <div
            key={historique.id}
            style={{
              padding: '1rem',
              backgroundColor: 'white',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '0.5rem', fontWeight: '500' }}>
                  {historique.text}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#666' }}>
                  {formatDate(historique.createdAt)}
                </div>
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: getScoreColor(historique.score),
                  marginLeft: '1rem',
                }}
              >
                {historique.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
