export default function handleResponseFromAPI(promise) {
    if (promise === true) {
        console.log('Got a response from the API');
        return Promise.resolve({ status: 200, body: 'Success' });
      }
    return Promise.reject(new Error(''));   
}
