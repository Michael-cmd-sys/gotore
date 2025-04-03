export const theme = {
  // Base colors
  primary: '#2d3748', // Deep navy
  secondary: '#4299e1', // Cyan
  accent: '#48bb78', // Mint
  background: '#f7fafc', // Light gray

  // Text colors
  text: {
    primary: '#2d3748',
    secondary: '#718096',
    muted: '#a0aec0',
  },

  // Border colors
  border: {
    primary: '#e2e8f0',
    secondary: '#cbd5e0',
  },

  // Shadow colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.05)',
    medium: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(0, 0, 0, 0.15)',
  },

  // Interactive states
  hover: {
    primary: '#3182ce',
    secondary: '#3182ce',
    accent: '#38a169',
  },

  active: {
    primary: '#2b6cb0',
    secondary: '#2b6cb0',
    accent: '#2f855a',
  },

  focus: {
    primary: '#4299e1',
    secondary: '#4299e1',
    accent: '#48bb78',
  },

  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  // Typography
  typography: {
    h1: {
      size: '2.5rem',
      weight: '700',
      lineHeight: '1.2',
    },
    h2: {
      size: '2rem',
      weight: '600',
      lineHeight: '1.3',
    },
    h3: {
      size: '1.75rem',
      weight: '600',
      lineHeight: '1.4',
    },
    body: {
      size: '1rem',
      weight: '400',
      lineHeight: '1.5',
    },
  },

  // Components
  components: {
    button: {
      primary: {
        background: '#4299e1',
        hover: '#3182ce',
        active: '#2b6cb0',
        text: '#ffffff',
      },
      secondary: {
        background: '#cbd5e0',
        hover: '#a0aec0',
        active: '#718096',
        text: '#2d3748',
      },
      accent: {
        background: '#48bb78',
        hover: '#38a169',
        active: '#2f855a',
        text: '#ffffff',
      },
    },
  },
};
