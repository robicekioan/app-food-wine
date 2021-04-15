/* eslint-disable  */
import { ref } from 'vue';
import db from '../boot/firebase';

const getCollection = (collection, type) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = db.collection(collection).where('type', '==', type);

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'could not fetch data';
    }
  );
  return { documents, error };
};

export default getCollection;

/* eslint-enable*/
