var { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
var express = require('express');
var router = express.Router();
var {firebase} = require('../model/firebase/firebase-connect');

const auth = getAuth(firebase);

/* GET auth listing. */
router.get('/', function(req, res, next) {
  res.send('Authenticating...');
});

router.post('/signup', (req, res, next) => {
    const {email, password} = req.body;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    res.json({
        data: {
            user: user,
        },
        msg: "Successfully created account",
        status: true
    })
    })
    .catch((err) => {
        console.log("Error: ", err);
        res.json({
            data: null,
            msg: err,
            status: false
        }) 
    });
})

router.post('/signin', (req, res, next) => {
    const {email, password} = req.body;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    res.json({
        data: {
            user: user,
        },
        msg: "Successfully logged in",
        status: true
    })
    })
    .catch((err) => {
        console.log("Error: ", err);
        res.json({
            data: null,
            msg: err,
            status: false
        }) 
    });
})

module.exports = router;