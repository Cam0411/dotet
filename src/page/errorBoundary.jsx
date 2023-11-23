import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
 
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return navigate(`/`);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;