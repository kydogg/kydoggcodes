import "./App.css";
import SidebarNavigation from "./components/SidebarNavigation";
import Main from "./components/Main";
import Works from "./components/Works";

export default function App() {
	return (
		<>
			<SidebarNavigation />
			<Main />
			<Works />
		</>
	);
}
