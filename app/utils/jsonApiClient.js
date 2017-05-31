import jsonApiClient from 'jsonapi-client';

export default new jsonApiClient("http://localhost:16006/rest", {
    header: {
        authToken: "2ad1d6f7-e1d0-480d-86b2-dfad8af4a5b3"
    }
});
