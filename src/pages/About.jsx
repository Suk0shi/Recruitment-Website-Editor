import '../styles/About.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfiniteScrollbar from '../components/InfiniteScrollbar'
import caroline_calligraphy from '../assets/caroline_calligraphy.png'
import whatWeOffer_calligraphy from '../assets/whatWeOffer_calligraphy.png'
import commercialRecruitment_calligraphy from '../assets/commercialRecruitment_calligraphy.png'

function About() {

  return (
    <div className='page'>
      <Header/>
      <div>
        <div className='aboutCarolineContainer'>
          <div className='aboutPageLeft'>
            <div className="content">
              <img className='calligraphy' src={caroline_calligraphy} alt="Caroline Condon" />
              <p>
                After graduating from University Caroline Condon was Head of Customer 
                Services and The Call Centre Manager for Artigiano, an exclusive mail 
                order clothing company specialising in luxury Italian fashion for women. 
                It was here that Caroline learnt the importance of listening to the 
                client. With a huge desire to make her own way in business, Caroline 
                became a partner in Beauchamp Bureau of Knightsbridge in 2000. After 
                eleven years of successful recruitment within private households she 
                founded her own company, Caroline Condon Recruitment in 2011.
              </p>
              <p>
                Caroline strongly believes in a personal service. Understanding 
                individual job roles and how each household functions is paramount and 
                therefore she only put’s together a selection of suitable, quality 
                candidates for interview. Caroline also believes in looking after her 
                candidates and getting to know them so she knows who suits which role. 
                She has a great working relationship with them so as an agency, always 
                has a large pool to draw from. Caroline and her team have spent a lot of 
                time creating a network of staff that allows them to offer a worldwide 
                service that still has that personal touch.  
              </p>
              <p>
                Her expertise in private household recruitment and the passion for what 
                she does is why she successfully brings together client and candidate in 
                private and unique settings around the world.
              </p>

              {/* <p>Caroline Condon founded Caroline Condon Recruitment in 2011 after over a decade of success in private household recruitment. With a career rooted in customer service and a deep understanding of luxury clientele, Caroline is dedicated to providing a highly personalized approach to matching clients with exceptional candidates.
              <br/>
              <br/>
              By taking the time to understand each household’s unique needs, Caroline and her team deliver a bespoke service, presenting only the most qualified individuals for consideration. With a global network of skilled professionals and a commitment to excellence, Caroline Condon Recruitment seamlessly connects clients and candidates for private and exclusive roles worldwide.</p> */}
            </div>
          </div>
          <div className="aboutPageRight">
            <img src="" alt="" />
          </div>
        </div>
        <InfiniteScrollbar/>
        <div className='whatWeOfferContainer'>
          <div className='whatWeOfferCalligraphy'>
            <img className='calligraphy' src={whatWeOffer_calligraphy} alt="Caroline Condon" />
          </div>
          <div className='whatWeOfferTextContainer'>
            <p>At CCR, we provide a wide range of highly skilled and professional 
              staff tailored to meet the needs of private households, estates, 
              and businesses. We are dedicated to delivering exceptional 
              service with discretion, reliability, and expertise. Whether you 
              require domestic, managerial, security, or specialist staff, we 
              carefully select and match candidates to ensure the highest standards 
              of care and professionalism. With a commitment to excellence, we 
              take the stress out of staffing, allowing you to enjoy seamless 
              support in every aspect of your home or lifestyle. 
            </p>
          </div>
        </div>
          <div className='commercialRecruitmentCalligraphy'>
            <img className='calligraphy' src={commercialRecruitment_calligraphy} alt="Caroline Condon" />
          </div>
          <div className='commercialRecruitmentTextContainer'>
            <p>CCR also provides high calibre permanent or temporary office staff to 
            an extensive range of clients including private family offices, 
            Investment groups and the luxury and lifestyle industries:  
            </p>
          </div>
          <div className='commercialRoles'>
            <p>
              Executive Assistants
              - Personal Assistants
              - Office Management
              - Facilities Managers
              - Administrative Assistants
              - Receptionists
              - Office Juniors
            </p>
          </div>
        <Footer/>
      </div>
    </div>
  )
}

export default About