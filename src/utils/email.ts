export async function sendEmail<D>(data: D): Promise<Response> {
    const apiEndpoint = '/api/email';
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Email request failed (${response.status})`);
    }
    return response;
}
