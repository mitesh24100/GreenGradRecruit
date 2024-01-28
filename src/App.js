import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import ShowTable1 from './components/ShowTable1';
import ShowTable2 from './components/ShowTable2';
import JobList from './components/JobList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostJob from './components/PostJob';
import SaveJobs from './components/SaveJobs';
import Discussion from './components/Discussion';
import ErrorPage from './components/ErrorPage';
import ApplyJobs from './components/ApplyJobs';
import MoreInfo from './components/MoreInfo';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/job-portal" element={<Home />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/apply-jobs" element={<ApplyJobs />} />
            <Route path="/show-table-1" element={<ShowTable1 />} />
            <Route path="/show-table-2" element={<ShowTable2 />} />
            <Route path="/saved-job" element={<SaveJobs />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/more-info" element={<MoreInfo />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
