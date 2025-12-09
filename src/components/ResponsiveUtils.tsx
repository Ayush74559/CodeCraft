import React, { useState, useEffect } from 'react';

// Hook to detect screen size
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    handleResize(); // Set initial values
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

// Responsive container component
interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  padding?: boolean;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = 'full',
  padding = true,
}) => {
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`
        w-full mx-auto
        ${maxWidthClasses[maxWidth]}
        ${padding ? 'px-4 sm:px-6 lg:px-8' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// Touch-friendly button component
interface TouchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const TouchButton: React.FC<TouchButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'primary',
  size = 'md',
}) => {
  const { isMobile } = useResponsive();

  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${isMobile ? 'min-h-[44px] min-w-[44px]' : 'min-h-[36px] min-w-[36px]'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;

  const variantClasses = {
    primary: `
      bg-blue-600 text-white
      hover:bg-blue-700 active:bg-blue-800
      focus:ring-blue-500
    `,
    secondary: `
      bg-gray-200 text-gray-900
      hover:bg-gray-300 active:bg-gray-400
      focus:ring-gray-500
    `,
    outline: `
      border-2 border-blue-600 text-blue-600
      hover:bg-blue-600 hover:text-white
      active:bg-blue-700 active:border-blue-700
      focus:ring-blue-500
    `,
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Mobile-specific optimizations
export const MobileOptimized: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return <div className="mobile-optimized performance-mobile">{children}</div>;
  }

  return <>{children}</>;
};

// Hide on mobile/desktop/tablet
interface ResponsiveHideProps {
  children: React.ReactNode;
  on?: 'mobile' | 'tablet' | 'desktop';
}

export const ResponsiveHide: React.FC<ResponsiveHideProps> = ({ children, on }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const shouldHide = {
    mobile: isMobile,
    tablet: isTablet,
    desktop: isDesktop,
  };

  if (shouldHide[on]) {
    return null;
  }

  return <>{children}</>;
};

// Show only on specific device
interface ResponsiveShowProps {
  children: React.ReactNode;
  on?: 'mobile' | 'tablet' | 'desktop';
}

export const ResponsiveShow: React.FC<ResponsiveShowProps> = ({ children, on }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const shouldShow = {
    mobile: isMobile,
    tablet: isTablet,
    desktop: isDesktop,
  };

  if (!shouldShow[on]) {
    return null;
  }

  return <>{children}</>;
};

// Performance optimization for mobile
export const PerformanceOptimized: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile } = useResponsive();

  return (
    <div className={isMobile ? 'performance-optimized' : ''}>
      {children}
    </div>
  );
};