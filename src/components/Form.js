function Form(){
    return(
        <div className="  mt-20 lg:mt-20 lg:mb-20  lg:m-auto lg:w-1/2   ">
            <p className="text-pur text-3xl text-center mb-2 ">Contact Me</p>
        <form className=" lg:m-auto  mb-20 lg:w-1/2 ">
            <input type='text' className="my-2 w-full h-10" placeholder="Name"/> <br/>
            <input type='email' className="my-2 w-full h-10"  placeholder="Email"/><br/>
            <input type='textarea' className="my-2 w-full h-20"  placeholder="Your Message"/><br/>
            <button className="bg-pur w-full h-10">Send Message</button>

        </form>
        </div>
    )
}

export default Form;