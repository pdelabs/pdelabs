export async function sendEmail<D>(data: D): Promise<Response> {
    const apiEndpoint = '/api/email';
    return fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    });
}
