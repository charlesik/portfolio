function Form(){
    return(
        <div className="  mt-20 lg:mt-20 lg:mb-20  lg:m-auto lg:w-1/2   ">
            <p className="text-pur text-3xl text-center mb-2 ">Contact Me</p>
        <form className=" lg:m-auto  mb-20 lg:w-1/2 " action="https://formsubmit.co/charlesikilo@gmail.com" method="POST">
            <input type='text' className="my-2 w-full h-10" placeholder="Name" name="name" required/> <br/>
            <input type='email' className="my-2 w-full h-10"  placeholder="Email" name="email" required/><br/>
            <input type='text' className="my-2 w-full h-40 text-black"  placeholder="Your Message" name="message" required/><br/>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://charlesik.netlify.app/"></input>
            <button className="bg-pur w-full h-10">Send Message</button>

        </form>
        </div>
    )
}

export default Form;