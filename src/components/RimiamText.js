'use client';

// Component per il testo RIMIAM con gradient ovunque appaia nel contenuto
export default function RimiamText({ className = "", children, ...props }) {
  if (typeof children === 'string') {
    // Sostituisce tutte le occorrenze di RIMIAM con il gradient
    const parts = children.split(/(RIMIAM)/g);
    
    return (
      <span className={className} {...props}>
        {parts.map((part, index) => 
          part === 'RIMIAM' ? (
            <span
              key={index}
              className="bg-gradient-to-r from-[#8e9aaf] via-[#f1cc5e] to-[#e6b547] bg-clip-text text-transparent font-semibold drop-shadow-sm"
            >
              RIMIAM
            </span>
          ) : part
        )}
      </span>
    );
  }
  
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}

// Hook per processare automaticamente le traduzioni
export function useRimiamText(text) {
  if (typeof text !== 'string') return text;
  
  const parts = text.split(/(RIMIAM)/g);
  
  return parts.map((part, index) => 
    part === 'RIMIAM' ? (
      <span
        key={index}
        className="bg-gradient-to-r from-[#8e9aaf] via-[#f1cc5e] to-[#e6b547] bg-clip-text text-transparent font-semibold drop-shadow-sm"
      >
        RIMIAM
      </span>
    ) : part
  );
}
