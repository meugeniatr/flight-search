import React from 'react';

import GlobalStyles from './components/GlobalStyles';
import SearchForm from './components/SearchForm/SearchForm';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <SearchForm />
      </main>
    </>
  );
}

export default App;
