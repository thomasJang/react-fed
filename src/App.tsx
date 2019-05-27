import React from 'react';
import MarkdownView from './markdown/Markdown';
import './styles/index';

const App: React.FC = () => {
  return (
    <div style={{ padding: '0 20px' }}>
      <MarkdownView />
    </div>
  );
};

export default App;
