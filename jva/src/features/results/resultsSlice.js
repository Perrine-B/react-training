import { createSlice } from '@reduxjs/toolkit';

/**  Structure d'une feature Redux : 
 * - Importer un createSlice du toolkit de Redux
 * créer une const slice appellant la méthode createSlice() comprenant trois éléments principaux : 
 *    - un nom
 *    - un état initial
 *    - les reducers associés 
 * 
 * - Exporter les méthodes associées à reducers en tant qu'actions de la slice
 * - Insérez potentiels thunks (on verra ça plus tard)
 * - Créer un sélecteur qui permettra de récupérer la partie du state qui nous intéressera pour les pages
 * - Exporter le reducer 
 * 
 * - A la création, connecter le reducer au store global pour pouvoir l'utiliser ensuite. Rdv dans app/store.js
 * 
 * 
*/

export const slice = createSlice({
  name: 'youpi',
  initialState: {
    characters: 'youpiyaaaaa',
  },
  reducers: {
    load: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.characters = 'ca marche cette fois hein';
    },
  },
});

export const { load } = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCharacters = state => state.youpi.characters;

export default slice.reducer;