export async function Config(method, url, body = {}) {
    const app_url = 'https://fakestoreapi.com'

    const config = () => {
        if (method === 'GET') {
            return {
                method: method
            }
        }
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }

    try{

        const api = await fetch(app_url + url, config)
        if (!api.ok) { 
            throw new Error(`HTTP error! Status: ${api.status}`);
        }
        const res = await api.json();
        return res;

    }catch(error){

        console.log(error);
        return {}

    }
   
}