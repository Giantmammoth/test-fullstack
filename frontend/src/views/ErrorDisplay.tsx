interface ErrorDisplayProps {
  error: string | null;
  onDismiss: () => void;
}

export const ErrorDisplay = ({ error, onDismiss }: ErrorDisplayProps) => {
  if (!error) {
    return null;
  }

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        border: '1px solid #f5c6cb',
        borderRadius: '4px',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>{error}</span>
      <button
        onClick={onDismiss}
        style={{
          background: 'none',
          border: 'none',
          color: '#721c24',
          fontSize: '1.2rem',
          cursor: 'pointer',
          padding: '0 0.5rem',
        }}
        aria-label="Fermer"
      >
        ×
      </button>
    </div>
  );
};
