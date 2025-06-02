import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white max-w-2xl mx-auto mt-2">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-secondary mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
