import React from 'react';

interface HighlightConfig {
  text: string;
  highlightTerms: string[];
}

/**
 * Colores del proyecto para resaltar, rotando entre ellos
 */
const highlightColors = [
  'bg-[#c0576f] dark:bg-[#e48679] text-white dark:text-[#470d3b]',
  'bg-[#febd84] text-[#470d3b]',
  'bg-[#e48679] dark:bg-[#c0576f] text-white dark:text-white',
];

/**
 * Resalta términos específicos en un texto alternando colores del proyecto
 * @param text - El texto a procesar
 * @param highlightTerms - Array de términos a resaltar
 * @returns JSX con los términos resaltados usando colores del proyecto
 */
export function highlightText({ text, highlightTerms }: HighlightConfig): React.ReactNode {
  if (!highlightTerms.length) return text;

  // Crear un patrón regex que matchee cualquiera de los términos
  // Ordenar por longitud descendente para evitar matches parciales
  const sortedTerms = [...highlightTerms].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

  const parts = text.split(pattern);
  let colorIndex = 0;

  return parts.map((part, index) => {
    // Si el parte matchea con uno de los términos a resaltar, devolver un span con color alterno
    if (highlightTerms.some(term => term.toLowerCase() === part.toLowerCase())) {
      const color = highlightColors[colorIndex % highlightColors.length];
      colorIndex++;
      return (
        <span key={index} className={`${color} font-semibold px-1 rounded`}>
          {part}
        </span>
      );
    }
    return part;
  });
}
