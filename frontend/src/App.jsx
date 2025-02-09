import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero Section/HeroSection";
import NutritionGuide from "./components/Nutrition Guide/NutritionGuide.jsx";
import MealPlanForm from "./components/Meal Plan Form/MealPlanForm.jsx";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Home Page */}
                <Route path="/" element={<HeroSection />} />
                
                {/* Nutrition Guide Page */}
                <Route path="/nutrition" element={<NutritionGuide />} />

                {/* Meal Plan */}
                <Route path="/meal-plans" element={<MealPlanForm />} />
            </Routes>
        </Router>
    );
}

export default App;