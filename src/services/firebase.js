import { useEffect } from 'react';

import { initializeApp } from 'firebase/app'
import { ref, onValue, getDatabase } from "firebase/database";
import { query, equalTo, orderByChild } from "firebase/database";

import config from '../config'

const app = initializeApp(config.firebase);
const database = getDatabase(app);

const useRealTimeDatabase = (path, callback, deps) => {
    useEffect(() => {
        const dataRef = ref(database, path);
        onValue(dataRef, callback);
    }, deps);
}

const useProjectDatabase = (path, callback, deps) => {
    useEffect(() => {
        const [type] = deps || "";
        let portfolioRef;

        if (type === "" || typeof type === 'undefined') {
            portfolioRef = query(ref(database, path), orderByChild('type'));
        } else {
            portfolioRef = query(ref(database, path), orderByChild('type'), equalTo(type));
        }

        onValue(portfolioRef, callback);
    }, deps);
}

export { app, database, useRealTimeDatabase, useProjectDatabase };