export const fetchHandler = async (url, options = {}) => {
    try {

        const response = await fetch(url, options);
        const contentType = response.headers.get('content-type') || '';
        const isJson = contentType.includes('application/json');

        let responseData;

        if (!response.ok) {
            throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`);
        }

        if (isJson) {
            responseData = await response.json();
        } else {
            responseData = await response.text();
        }

        return [responseData, null]; 

    } catch (error) {
        /** FEEDBACK: Nice fixing!!!!! */
        console.warn(error);

        return [null, error]; 
    }
};