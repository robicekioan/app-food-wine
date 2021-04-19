/* eslint-disable  */

import { ref } from 'vue';
import db from '../boot/firebase';

const getDocument = (collection, id) => {
  const document = ref(null);
  const error = ref(null);

  let documentRef = db.collection(collection).doc(id);

  documentRef.onSnapshot(
    (doc) => {
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = 'That document does not exist';
      }
    },
    (err) => {
      console.log(err.message);

      error.value = 'could not fetch document';
    }
  );
  return { document, error };
};

export default getDocument;

/* eslint-enable  */
