import { Routes, Route } from 'react-router-dom';
import Company from '../Components/Company/Company';
import Profile from '../Components/Company/Profile';
import Ventures from '../Components/Company/Ventures';
import Blogs from '../Components/Company/Blogs';
import Opportunity from '../Components/Company/Opportunity';


const CompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Company />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ventures" element={<Ventures />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/opportunity" element={<Opportunity />} />     
    </Routes>
  );
};

export default CompanyRoutes; 