import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <>
      <GlobalStyles />
      <header>HEADER</header>
      <main>
        <SearchForm />
      </main>
    </>
  );
}

export default App;
