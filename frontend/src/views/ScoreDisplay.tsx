import { AnalyzeResponse } from '../models/Analyze';

interface ScoreDisplayProps {
  result: AnalyzeResponse | null;
}

export const ScoreDisplay = ({ result }: ScoreDisplayProps) => {
  if (!result) {
    return null;
  }

  const getScoreColor = (score: number): string => {
    if (score >= 80) return '#28a745';
    if (score >= 50) return '#ffc107';
    return '#dc3545';
  };

  return (
    <div
      style={{
        padding: '1.5rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '2rem',
        border: `2px solid ${getScoreColor(result.score)}`,
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>Résultat de l'analyse</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: getScoreColor(result.score),
          }}
        >
          {result.score}
        </div>
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: '500' }}>Score</div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>
            Statut: {result.status}
          </div>
        </div>
      </div>
    </div>
  );
};
