import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import resultsReducer from '../features/results/resultsSlice';

/**  Attacher un nouveau reducer au store 
 * 
 * - Importer la slice depuis la feature désirée
 * - Dans reducer combiner le 'nom' donné au reducer dans la slice avec l'import effectuer plus haut
 * 
 * Magic o/
 * 
 * 
*/

export default configureStore({
  reducer: {
    counter: counterReducer,
    youpi: resultsReducer
  },
});
