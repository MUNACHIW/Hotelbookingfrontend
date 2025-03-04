const Book = () =>{
    return(
    <main className="Hotel-background">
        <form action="">
         <h1>Hotel Reserve</h1>
         <div> 
            <input type="text" required placeholder="Your name" name="" id="" />
         </div>
         <div> 
            <input type="email" placeholder="Your email address" required name="" id="" />
         </div>
        <div> 
            <input type="month" required placeholder="month" name="" id="" />
         </div>
         <div>
        <input list="days" required  placeholder='Select A Day'/>
    </div>
        <datalist id='days'>
          <option value="Sunday"></option>
          <option value="Monday"></option>
          <option value="Tuesday"></option>
          <option value="Wednesday"></option>
          <option value="Thursday"></option>
          <option value="Friday"></option>
          <option value="Saturday"></option>
        </datalist>
    <div>
        <input type="time"placeholder="time"  required name="" id="" />
    </div>
    <button type="submit">Book A Suite</button>
       </form>
    </main>
    )
}
export default Book;