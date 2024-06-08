
/**
 * @method ReactErrorBoundary
 * @author bvaughn
 * @author Efecan Okkalioglu
 * @see {@link https://www.npmjs.com/package/react-error-boundary}
 * @description
 * derived custom ErrorBoundary component that logs detailed
 * error information, including the component stack trace
 */

"use client";

import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Custom Fallback Component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// Error Logger
const logError = (error, { componentStack }) => {
  console.error('Error:', error);
  console.error('Component Stack:', componentStack);
};

// Custom ErrorBoundary Wrapper Component
const ReactErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={logError}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
        console.log('Resetting error boundary with details:', details);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ReactErrorBoundary;
