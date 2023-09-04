import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import SearchPage from './pages/domains/searchPage';
import MainPage from './pages/mainPage';
import DomainsList from './pages/domains/domainList';
import DomainDetail from './pages/domains/detail';
import MyPage from './pages/profile/myPage';
import TopBar from './pages/topbar';


function App() {

  return (
    <div className='pt-16'>
      <TopBar/>
      <Routes>
         {/** YourD Name Service 설명 페이지 일단 생략 */}
        <Route path='/' element={<MainPage/>}/>

        {/** Domain 검색 페이지  */}
        <Route path='/search' element={<SearchPage/>}/>

        {/** 내정보  */}
        <Route path='/mypage' element={<MyPage/>}/>

        {/** 도메인 리스트 페이지  */}
        <Route path='/domains' element={<DomainsList/>}/>

        {/** 특정 도메인 정보 페이지  */}
        <Route path='/domains/detail' element={<DomainDetail/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
