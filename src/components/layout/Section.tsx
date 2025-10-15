import { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  id?: string;
}

const paddingClasses = {
  none: '',
  sm: 'py-8 lg:py-12',
  md: 'py-12 lg:py-16', 
  lg: 'py-16 lg:py-24',
  xl: 'py-20 lg:py-32'
};

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-green-800',
  dark: 'bg-gray-900'
};

export function Section({ 
  children, 
  className,
  containerSize = 'xl',
  padding = 'lg',
  background = 'white',
  id
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}