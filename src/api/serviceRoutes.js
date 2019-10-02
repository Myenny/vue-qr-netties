import axios from 'axios';
import headerFunction from "@/api/headerFunctions.js";

//Main Url for Swagger
// const url1 = "http://192.168.23.129:8000/api/v1"
const url = "http://shellhacks-qr-backend-shellhacks2019.apps.shellhacks.rhmi.io/api/v1";

const getQrCode = "/getqrcode/";
const postForTokenUrl = "/token/";
const postNewAccountUrl = "/createuser/";

export default {
    qrCode() {
        let headers_json = headerFunction.getHeaders();
        headers_json['Content-type'] = 'image/png';
        const res = axios.get(url + getQrCode, {
            headers: headers_json
        });
        return res;
    },
    postForToken(data) {
        const res = axios.post(url + postForTokenUrl, data, {
            headers: headerFunction.getHeaders()
        });
        return res
    },
    postNewAccount(data) {
        const res = axios.post(url + postNewAccountUrl, data);
        return res
    },
}