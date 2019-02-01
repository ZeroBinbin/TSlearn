import * as React from 'react';

class Root extends React.Component<{}, {}> {

  renderDevTool() {
    if (/* process.env.NODE_ENV !== 'production' */ true) {
      const DevTools = require('mobx-react-devtools').default;
      return (<DevTools />);
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.renderDevTool()}
      </div>
    );
  }
}

export default Root;