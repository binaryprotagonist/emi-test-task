import './App.scss';
import Sidebar from 'components/Sidebar/Sidebar';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';

const HomePage = () => {

    return (
        <div className='main-page'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='content'>
                <BrowserRouter>
                   <Routes />
                </BrowserRouter>
            </div>
        </div>
    )
}

export default HomePage