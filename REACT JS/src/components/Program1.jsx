import React from "react";  
const HelloWorld = () => {
    return <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br />
        <label htmlFor="Email">Email:</label>
        <input type="email" id="Email" name="Email" /><br />
        <input type="submit" value="Submit" />
    </form>;
}
export default HelloWorld;