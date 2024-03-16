const sdk = require('api')('@sandbox-docs/v3.0#1h66vltennbob');

// Authentication
exports.authenticate = async (req, res) => {
    try {
        const { data } = await sdk.authenticateApi({
            api_key:process.env.SANDBOX_API_KEY,
            api_secret:process.env.SANDBOX_API_SECRET,
            api_version:process.env.SANDBOX_API_VERSION,
        });
        
        res.status(200).send(data);
    } catch (error) {
        console.error("Error while authenticating", error);
        res.status(500).send({ success: false, message: "Error while authenticating" });
    }
};

// Autorization
exports.authorize = async (req, res) => {
    try {
        const { data } = await sdk.authorizeApi({
            api_key: process.env.SANDBOX_API_KEY,
            api_secret: process.env.SANDBOX_API_SECRET,
            api_version: process.env.SANDBOX_API_VERSION,
            request_token: process.env.SANDBOX_ACCESS_TOKEN,
            authorization_token: process.env.SANDBOX_ACCESS_TOKEN,
        });
        
        res.status(200).send(data);
    } catch (error) {
        console.error("Error while authorizing", error);
        res.status(500).send({ success: false, message: "Error while authorizing" });
    }
};

// Get company information using GST number
exports.getGstInfo = async (req, res) => {
    try {
        const {gst} = req.body;
        const response = await sdk.authenticateApi({
            gstNumber: gst,
            api_key:process.env.SANDBOX_API_KEY,
            api_version:process.env.SANDBOX_API_VERSION,
            access_token:process.env.SANDBOX_ACCESS_TOKEN,
        });

        console.log(response);

        if (response && response.data) {
            res.status(200).send(response.data);
        } else {
            console.error("Error: Response data is undefined");
            res.status(500).send({ success: false, message: "Error: Response data is undefined" });
        }
    } catch (error) {
        console.error("Error while getting GST info", error);
        res.status(500).send({ success: false, message: "Error while getting GST info" });
    }
};
