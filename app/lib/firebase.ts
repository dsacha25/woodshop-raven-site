'use client';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: 'woodshop-raven.firebaseapp.com',
	projectId: 'woodshop-raven',
	storageBucket: 'woodshop-raven.appspot.com',
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebase);

export default firebase;
