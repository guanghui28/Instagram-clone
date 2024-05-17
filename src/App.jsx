import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import PageLayout from "./components/layouts/PageLayout";

const App = () => {
	return (
		<PageLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/auth" element={<AuthPage />} />
			</Routes>
			<Toaster />
		</PageLayout>
	);
};

export default App;
