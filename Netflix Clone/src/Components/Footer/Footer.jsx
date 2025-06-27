import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon aria-label="Facebook"/>
          <InstagramIcon aria-label="Instagram"/>
          <YouTubeIcon aria-label="YouTube"/>
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookie preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms Of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='service_code'>
            <p>
              Service Code
            </p>
          </div>
          <div className='copy-write'>
            &copy; 1997-{currentYear} Netflix,Inc.
          </div>       
        </div>
      </div>
      
    </div>
  )
}

export default Footer;
