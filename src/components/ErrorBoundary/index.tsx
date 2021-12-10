import React from 'react'
// Wrap a component with <ErrorBoundary></ErrorBoundary>
// to show an error UI if it or any child of it throws
type Props = {
  children: any
}
type Error = string | number | null
type ErrorInfo = {
  componentStack: string
} | null

type ErrorState = {
  error: Error
  errorInfo: ErrorInfo
}

export default class ErrorBoundary extends React.Component<Props, ErrorState> {
  constructor(props: any) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: string | number | null) {
    // catch errors in render phase
    return { hasError: true }
  }
  // @ts-ignore
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Catch errors in commit phase in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
    // log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, render children
    return this.props.children
  }
}
