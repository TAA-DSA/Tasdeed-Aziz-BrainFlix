import logo from '../assets/Logo/Logo-brainflix.svg';
import searchIcon from '../assets/Logo/Icon-search.svg';
import uploadIcon from '../assets/Logo/Icon-upload.svg'; 
import userImg from '../assets/Images/Mohan-muruge.jpg';

function Header (){
    return(
        <section className='header__section'>
         
             <div className='play__logo'>
                 <img className = "paybutton" src={logo} alt="play" />
             </div>

             <div className='search__bar'>
             <div>
                 <img className = "search__logo" src={searchIcon} alt="magnifyingGlass" />
             </div>

             <div>
                 <p>Search</p>
             </div>
            </div>
            <div className = 'uploadBtn--user'>
            <div className='uploadBtn'>
            <div>
                 <img className = 'upload__logo' src={uploadIcon} alt='plus sign' />
                 
             </div>
            <div>
                <p>UPLOAD</p>
            </div> 
            </div>

            <div>
                <img className='user__img--mohan' src={userImg} alt='user' />
            </div>
        </div>
            

           
             

             
         
        
        </section>
        
    );
}

export default Header;