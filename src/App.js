import React from 'react';
import Header from './Header/Header';
import NoteForm from './Note/NoteForm';
import NoteList from './Note/NoteList';
import NoteContextProvider from './store/NoteContextProvider';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <NoteContextProvider>
        <NoteForm />
        <NoteList />
      </NoteContextProvider>
      <Footer />
    </>
  );
}

export default App;
