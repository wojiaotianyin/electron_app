import fetch from 'node-fetch';


let TOKEN: string = "";
let pets = {
    apiKey: "iX4Lg5Bi2Nb73QHihhzRz5Pvxm49cNgYMb6E1zTGT5bEB25Qz6",
    secretKey: "WXHBmP2rxw0LMWqz4lxCTAcJkSAGyp82onImgFcc",
    url_pets: "https://api.petfinder.com/v2/animals?type=dog&page=1",
    url_auth: "https://api.petfinder.com/v2/oauth2/token",
    auth: ''
}

// TODO: typescipt set state
/**
 * get accesss token 
 * @param params 
 * @returns 
 */
async function getAuth(params?) {
    if (params == undefined) {
        try {
            const params_ = new URLSearchParams();
            params_.append('grant_type', 'client_credentials')
            params_.append('client_id', pets.apiKey)
            params_.append('client_secret', pets.secretKey)
            const response = await fetch(pets.url_auth,
                {
                    method: 'POST',
                    body: params_,
                });

            const data = await response.json();
            TOKEN = data.access_token;
            const result = await getPets(TOKEN);
            console.log('=== データ数 ===')
            console.log(result['animals'].length);
            console.log('=========')
            for(let i of result['animals']){
                console.log(i)
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}

/**
 * get pets information
 * @param token 
 * @returns 
 */
async function getPets(token) {
    try {
        const response = await fetch(pets.url_pets, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token },
        });

        const res = await response.json();
        
        return res;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

getAuth()




