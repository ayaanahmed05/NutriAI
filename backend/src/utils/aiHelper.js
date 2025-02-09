const axios = require('axios');

const generateResponse = async (model, prompt) => {
    try {
        const response = await axios.post(
            `https://api-inference.huggingface.co/models/${model}`,
            { inputs: prompt },
            { headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` } }
        );
        return response.data;
    } catch (error) {
        console.error('Error calling Hugging Face API:', error.message);
        throw new Error('Hugging Face API request failed');
    }
};

module.exports = { generateResponse };