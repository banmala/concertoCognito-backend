var express = require('express');
var { CognitoJwtVerifier } = require("aws-jwt-verify");

var router = express.Router();

/* GET auth listing. */
router.get('/', function(req, res, next) {
  res.send('Authenticating Cognito auth...');
});

router.post('/verifyjwt', async function (req, res, next){
    console.log("Signing up user...");
    const {jwtToken} = req.body;

    // Verifier that expects valid access tokens:
    if(!jwtToken){
        const verifier = CognitoJwtVerifier.create({
            userPoolId: "ap-southeast-2_BJM4uzFdR",
            tokenUse: "access",
            clientId: "ejgmmghdr8lbtc2h4ha0ov1ii",
        });
        try {
            const payload = await verifier.verify(
                jwtToken,
            );
            console.log("Token is valid. Payload:", payload);
            res.send(payload);
        } catch(err){
            console.log("Token not valid! error: ", err);
            res.send(err);
        }
    }else{
        console.log("No token provided!");
        res.send("No token provided!");
    }
})
module.exports = router;