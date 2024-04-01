import { Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskContext";

import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

function App() {
  return(
    <>
      <TaskContextProvider>
        <Navbar/>

        <Routes>
          <Route path="/" element={<TasksPage/>} />
          <Route path="/form" element={<TasksForm/>} />
          <Route path="/edit/:id" element={<TasksForm/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </TaskContextProvider>
    </>
  );
}

export default App;