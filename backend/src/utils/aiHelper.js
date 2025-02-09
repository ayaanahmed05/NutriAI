const axios = require('axios');

const generateResponse = async (model, prompt) => {
    try {
        const response = await axios.post(
            `https://api-inference.huggingface.co/models/${model}`,
            {
                inputs: prompt,
                parameters: {
                    temperature: 0.6,  // Adjusted for better control of randomness
                    max_new_tokens: 200, // Maximum length of the response
                    top_p: 0.9,  // Top-p sampling
                }
            },
            { headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` } }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error calling Hugging Face API:', error.response.status, error.response.data);
            throw new Error(`Hugging Face API request failed: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
        } else if (error.request) {
            console.error('Error calling Hugging Face API: No response received', error.request);
            throw new Error('Hugging Face API request failed: No response received');
        } else {
            console.error('Error calling Hugging Face API:', error.message);
            throw new Error(`Hugging Face API request failed: ${error.message}`);
        }
    }
};

module.exports = { generateResponse };