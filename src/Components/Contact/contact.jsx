import {IoMailOutline} from 'react-icons/io5'
import {IoCallOutline} from 'react-icons/io5'
import {IoLogoWhatsapp} from 'react-icons/io5'
import {IoAt} from 'react-icons/io5'


export const Contact = (props)=> {

   return (
    
        <div ref={props.contactRef} className="grid md:grid-cols-2 lg:w-[976px] gap-4 my-8 ">
            {/* options */}
            <div>
                <div className="bg-black-p text-grey-p text-xl  p-8 flex flex-col h-full justify-between">
                    <p className='text-2xl font-bold'>Contact Me</p>
                    <br />
                    <p>Please get in touch with me if you think our work can be mutually binifecial</p>
                    <br />
                    <div className='flex items-center gap-2'><IoMailOutline/> otman.elkataoui@gmail.com</div>
                    <div className='flex items-center gap-2'><IoCallOutline/> +212 690008290</div>
                    
                    <div className='md:flex gap-4 justify-center'>
                    <a href="mailto:otman.elkantaoui@gmail.com" className='btn flex items-center gap-1'><IoAt/>Message</a>
                    <a href="https://wa.me/212651082371" className='btn flex items-center gap-2'><IoLogoWhatsapp/>Whatsapp</a>
                    </div>
                </div>
            </div>
            {/* form */}
            <form action="https://formsubmit.co/otman.elkantaoui@gmail.com" method="POST" className="flex flex-col gap-4 mx-2">
                <input type="text" name="fullName" placeholder="Full Name" required/>
                <input type="email" name="email" placeholder="Email Adress" required/>
                <textarea name="message" cols="6" rows="10" placeholder="Your message" required></textarea>
                <button type='submit' className='bg-black-p text-grey-p hover:text-black-p hover:bg-grey-p self-end'>Send Message</button>
            </form>
        </div>
    
   )
}