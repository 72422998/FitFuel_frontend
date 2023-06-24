import React from 'react'

class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // Puedes agregar lógica adicional aquí, como enviar errores a un servicio de seguimiento de errores
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          // Puedes personalizar el mensaje de error que se muestra
          return <h1>Se produjo un error. Por favor, recarga la página.</h1>;
        }
    
        // Si no hay error, renderiza los componentes hijos normalmente
        return this.props.children;
      }
}

export {ErrorBoundary}