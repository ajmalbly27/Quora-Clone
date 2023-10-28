import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import QueraBox from '../QuoraBox/QuoraBox';
import Widget from '../Widget/Widget';
import './Main.css';

const Main = () => {
    return (
        <div className="Main">
            <Navbar />
            <div className='main_wrapper'>
                <Sidebar />
                <div className='feed_wrapper'>
                    <QueraBox />
                    <Feed />
                </div>
                <Widget />
            </div>
        </div>
    );
}

export default Main;