function Form(){
    return(
        <div className="m-auto w-1/2  mt-20">
            <p className="text-pur text-3xl text-center mb-2 ">Contact Me</p>
        <form className="m-auto w-1/2 ">
            <input type='text' className="my-2 w-80 h-10" placeholder="Name"/> <br/>
            <input type='email' className="my-2 w-80 h-10"  placeholder="Email"/><br/>
            <input type='textarea' className="my-2 w-80 h-20"  placeholder="Your Message"/><br/>
            <button className="bg-pur w-80 h-10">Send Message</button>

        </form>
        </div>
    )
}

export default Form;