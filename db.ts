const DB_NAME = 'Kou99TrainCardDB';
const STORE_NAME = 'trainImages';
const DB_VERSION = 1;

let db: IDBDatabase;

export function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    // If db is already initialized, resolve it
    if (db) {
      return resolve(db);
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error('Database error:', request.error);
      reject('Error opening DB');
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const dbInstance = (event.target as IDBOpenDBRequest).result;
      if (!dbInstance.objectStoreNames.contains(STORE_NAME)) {
        // Use card name as the key
        dbInstance.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  });
}

export function saveImage(id: string, blob: Blob): Promise<void> {
  return new Promise(async (resolve, reject) => {
    try {
        const dbInstance = await initDB();
        const transaction = dbInstance.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put({ id, blob });

        request.onsuccess = () => resolve();
        request.onerror = () => {
            console.error('Failed to save image:', request.error);
            reject(request.error);
        };
    } catch (error) {
        reject(error);
    }
  });
}

export function getImage(id: string): Promise<Blob | null> {
    return new Promise(async (resolve, reject) => {
        try {
            const dbInstance = await initDB();
            const transaction = dbInstance.transaction(STORE_NAME, 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.get(id);

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result.blob);
                } else {
                    resolve(null);
                }
            };
            request.onerror = () => {
                console.error('Failed to get image:', request.error);
                reject(request.error);
            };
        } catch (error) {
            reject(error);
        }
    });
}
