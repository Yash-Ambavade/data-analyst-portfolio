import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;  // Add this line to accept className
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={className}   // <-- apply the className here
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div style={{ marginTop: '0.5rem' }}>{children}</div>;
}
