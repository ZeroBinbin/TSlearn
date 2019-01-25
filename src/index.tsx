import * as React from 'react';
import * as reactDom from 'react-dom';
// for hmr
if ((module as any).hot) {
    (module as any).hot.accept();
}

interface Props {
    
}

class App extends React.Component <Props, {}> {
    render () {
        return null;
    }
}


reactDom.render(<App />, document.getElementById('root'))

