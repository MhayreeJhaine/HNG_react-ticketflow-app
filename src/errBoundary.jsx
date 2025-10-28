import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-3xl font-bold mb-2">
            Oops! Something went wrong 😅
          </h1>
          <p className="text-gray-500">Please refresh or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
