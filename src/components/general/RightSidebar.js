// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {Trend} from "../page_components/Home/Trend";


const RightSidebar = () => {
    const trendNo = [0,0,0,0]
    return (
        <>
            <div className='d-none d-lg-flex flex-column bg-black text-white vh-100 gap-3 ps-4 py-3' style={{width: '28%', paddingRight: '80px'}}>
                <input type='text' name='search' placeholder='Search Twitter' className='text-white border-0 p-3 rounded-5' style={{backgroundColor: 'rgba(231, 233, 234, 0.1)', height: '3rem'}}/>
                <div className='rounded-4 p-3' style={{backgroundColor: 'rgba(231, 233, 234, 0.1)'}}>
                    <h4 className='fw-bolder' style={{fontSize: '1.5rem'}}>
                        Trends for you
                    </h4>
                    <div className='d-flex flex-column gap-2' style={{}}>
                        {trendNo.map(trend => <Trend />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export {RightSidebar}