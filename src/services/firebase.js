import { useEffect } from 'react';

import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";
import { ref, onValue } from "firebase/database";

import config from '../config'

const app = initializeApp(config.firebase);
const database = getDatabase(app);

const realTimeDatabase = (path, callback) => {
    const dataRef = ref(database, path);
    onValue(dataRef, callback);
}

const useRealTimeDatabase = (path, callback) => {
    useEffect(() => {
        realTimeDatabase(path, callback)
    }, []);
}

export { app, database, realTimeDatabase, useRealTimeDatabase };