# NutriAI - AI-Powered Meal Plan Generator

NutriAI is a web application designed to generate personalized meal plans based on user dietary preferences and calorie goals. Built as part of **HackHive 2025**, this project demonstrates the potential of AI in improving daily life. NutriAI was developed in just one day to provide users with an easy-to-use platform for healthier eating habits.

---

## Features

- **Personalized Meal Plans**: Generate meal plans tailored to dietary preferences and calorie goals.
- **AI-Powered Backend**: Leverages Hugging Face's `microsoft/Phi-3.5-mini-instruct` model to generate accurate and relevant meal suggestions.
- **Modern Frontend**: Built with React.js for a clean and interactive user experience.
- **Simple Setup**: Easy-to-follow installation and usage instructions for running the project locally.

---

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

1. **Node.js** (v16 or later)
2. **npm** (Node Package Manager)
3. A **Hugging Face API Key** (Sign up at [Hugging Face](https://huggingface.co) if you don't already have one)

### Installation

Follow these steps to set up the project:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/NutriAI.git
    cd NutriAI
    ```

2. **Backend Setup**:
    ```bash
    cd backend
    npm install
    ```

3. **Frontend Setup**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set Environment Variables**:
    - Create a `.env` file inside the `backend` folder.
    - Add the following:
      ```env
      HUGGINGFACE_API_KEY=your_huggingface_api_key
      PORT=3001
      ```

---

## Running the Application

### Start the Backend Server
Run the following commands to start the backend server:
```bash
cd backend
node index.js
```

### Start the Frontend
Run the following commands to start the backend server:
```bash
cd frontend
npm start
```

## Using the Application
Generate a meal plan - Fill in the form under "Meal Plan" and hit the Generate Button!
