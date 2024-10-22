import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className=' p-4 border-b-2 bg-slate-200'>
            <div className='flex justify-between items-center  mx-auto w-11/12'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;