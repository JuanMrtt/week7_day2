import React from 'react';

import { citiesList, badMoviesList, goodmoviesList } from './components/staticLists/staticList'
import DynamicMoviesList from './components/dynamicLists/dynamicMoviesList'

function App() {

  return (
    <main>
      <h1>App de listas e iteraciones</h1>
      <hr></hr>
      <section>
        <h4>Listado de pelis guays (dinámico)</h4>
        <DynamicMoviesList />
      </section>
      <hr></hr>
      <section>
        <h4>Listado de ciudades (estático)</h4>
        <ul>
          {citiesList}
        </ul>
      </section>
      <hr></hr>
      <section>
        <h4>Listado de pelis malas (estático)</h4>
        <ul>
          {badMoviesList}
        </ul>
      </section>
      <hr></hr>
      <section>
        <h4>Listado de pelis guays (estático)</h4>
        <ul>
          {goodmoviesList}
        </ul>
      </section>

    </main>
  );
}

export default App;
