import * as axios from "browserslist";

axios.defaults.withCredentials = true;

let postRequest_v2 = (url, data, callback) => {
    let formData = new FormData();

    for (let p in data){
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }

    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

let postRequest = (url, json, callback) => {
    let opts = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        credentials: 'include',
        origin: 'http://localhost:3000',
        body: JSON.stringify(json),
    };

    // console.log(json);

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log("return data " + data.data);
            callback(data);
            // console.log("in post request, ret = " + ret);
        })
        .catch((error) => {
            console.log(error);
        });
};

let loginRequest = (url, json, callback) => {
    let opts = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        origin: 'http://localhost:3000',
        body: JSON.stringify(json),
    };

    // console.log(json);

    fetch(url,opts)
        .then((response) => {
            console.log(response.headers.get("Set-Cookie"));
            document.cookie = response.headers.get("Set-Cookie");
            return response.json()
        })
        .then((data) => {
            // console.log("return data " + data.data);
            callback(data);
            // console.log("in post request, ret = " + ret);
        })
        .catch((error) => {
            console.log(error);
        });
};

let postRequest_v3 = (url, callback) => {
    let opts = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        origin: 'http://localhost:3000'
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log("return data " + data.data);
            callback(data);
            // console.log("in post request, ret = " + ret);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {postRequest,postRequest_v2, postRequest_v3, loginRequest};