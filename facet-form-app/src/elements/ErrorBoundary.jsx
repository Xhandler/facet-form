import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return  (
            <div>
                <h1>Something went wrong!</h1>
                <button onClick={ () => window.location.replace("/") }>Reload?</button>
            </div>
        );
      }
      return this.props.children; 
    }
  }