import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const LeftBarOption = ({Icon, text}) => {
    return (
        <button className='rounded-5 d-flex align-items-center justify-content-center gap-2 px-3 py-1 fs-4 text-white' style={{width: 'fit-content'}}><Icon fontSize='large' />{text}</button>
    )
}

export {LeftBarOption}