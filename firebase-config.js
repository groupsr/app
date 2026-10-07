
// =====================================================
// FIREBASE CONFIG
// =====================================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth,
    signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";


// =====================================================
// FIREBASE CONFIGURATION
// =====================================================

const firebaseConfig = {
  apiKey: "AIzaSyCv2MKFlWIp2OWgD75x71qusDhniKWgK5U",
  authDomain: "sr-group-project.firebaseapp.com",
  databaseURL: "https://sr-group-project-default-rtdb.firebaseio.com",
  projectId: "sr-group-project",
  storageBucket: "sr-group-project.firebasestorage.app",
  messagingSenderId: "825637741860",
  appId: "1:825637741860:web:ced909aa7f68ce9219bfb1"
};


// =====================================================
// INITIALIZE FIREBASE
// =====================================================

const app = initializeApp(firebaseConfig);


// =====================================================
// FIREBASE AUTH
// =====================================================

const auth = getAuth(app);


// =====================================================
// REALTIME DATABASE
// =====================================================

const db = getDatabase(app);


// =====================================================
// LOGOUT FUNCTION
// =====================================================

async function logoutUser() {

    try {

        // Sign out from Firebase Authentication
        await signOut(auth);

        // Remove saved user profile
        sessionStorage.removeItem("userProfile");

        // Go to login page
        window.location.href = "login.html";

    } catch (error) {

        console.error("Logout failed:", error);

        // Even if Firebase logout fails,
        // remove the local session
        sessionStorage.removeItem("userProfile");

        window.location.href = "login.html";
    }
}


// =====================================================
// EXPORT
// =====================================================

export {
    app,
    auth,
    db,
    logoutUser
};



