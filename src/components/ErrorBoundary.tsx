import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-black flex items-center justify-center p-6 text-center">
          <div className="glass-card p-12 max-w-lg border-brand-accent/20">
            <h1 className="text-4xl font-display text-white mb-4">System Disruption</h1>
            <p className="text-sm text-white/40 font-mono uppercase tracking-widest mb-8">
              An intangible error has occurred in the digital ether.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-brand-accent text-black font-mono text-xs uppercase tracking-widest rounded-lg hover:bg-brand-accent/80 transition-colors"
            >
              Re-initialize Session
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
