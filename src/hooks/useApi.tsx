

const useApi = () => {

    let request = async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}): Promise<any>  => {
        let res = await fetch(url, {method, body, headers});

          return res;
    }

    return {request};
}

export default useApi;