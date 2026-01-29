import { useState } from 'react';
import { IAnalyzeService } from '../services/IAnalyzeService';
import { AnalyzeResponse } from '../models/Analyze';

interface AnalyzeFormProps {
  analyzeService: IAnalyzeService;
  onAnalyzeComplete: (result: AnalyzeResponse, text: string) => void;
  onError: (error: string) => void;
}

export const AnalyzeForm = ({
  analyzeService,
  onAnalyzeComplete,
  onError,
}: AnalyzeFormProps) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      onError('Le texte ne peut pas être vide');
      return;
    }

    setIsLoading(true);
    const textToAnalyze = text;
    try {
      const result = await analyzeService.analyze({ text: textToAnalyze });
      onAnalyzeComplete(result, textToAnalyze);
      setText('');
    } catch (error) {
      onError(
        error instanceof Error
          ? error.message
          : 'Erreur lors de l\'analyse du texte'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="text-input" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Texte à analyser :
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Entrez votre texte ici..."
          rows={5}
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'inherit',
          }}
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !text.trim()}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: isLoading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
        }}
      >
        {isLoading ? 'Analyse en cours...' : 'Analyser'}
      </button>
    </form>
  );
};
