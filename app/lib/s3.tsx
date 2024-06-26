import { list } from 'aws-amplify/storage';

export async function listFiles() {
    try {
        const result = await list({
            path: '/'
        });
        return result;
    } catch (error) {
        console.error('Test');
        console.error('Error listing files:', error);
        throw error;
        // return [];
    }
}