import { PATH } from "consts";
import { NotFoundPage } from "pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path={PATH.INVALID_PATH}
          element={<Navigate to={PATH.NOT_FOUND} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
