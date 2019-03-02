declare namespace React {
  interface SuspenseProps {
    maxDuration?: number
  }
}

declare namespace ReactDOM {
  interface ReactWork {
    then(callback: () => void): void
  }

  interface ReactRoot {
    render(
      children: React.ReactChild | React.ReactNodeArray,
      callback?: () => void
    ): ReactWork
    unmount(callback?: () => void): ReactWork
    // eslint-disable-next-line
    legacy_renderSubtreeIntoContainer(
      parent: React.Component<any, any> | null,
      children: React.ReactChild | React.ReactNodeArray,
      callback?: () => void
    ): ReactWork
    createBatch(): ReactBatch
  }

  interface ReactBatch extends ReactWork {
    render(children: React.ReactChild | React.ReactNodeArray): ReactWork
    commit(): void
  }

  interface RootOptions {
    hydrate?: boolean
  }

  // eslint-disable-next-line
  export function unstable_createRoot(el: ?ParentNode, options?: RootOptions): ReactRoot
}
