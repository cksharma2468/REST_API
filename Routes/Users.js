import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();

//array of users
let user = [
    
        {
            firstname:"ck",
            lastname:"sharma",
            age:"24"
             
        },
        {
            firstname:"vicky",
            lastname:"kushal",
            age:34
        }
    
]

router.get('/',(req,res) => {
    res.send(user);

});

router.post('/',(req,res) => {
    
//    console.log("Post Route reached");

//Accepting request data by client/browser-side. For now from post-man body.
   const userData = req.body;

   const userId = uuidv4();

// new object containig userData and userId
   const userWithId = { ...userData, id: userId };

//pushing user's data to the database,i.e here user object/array.
//    user.push(userData);
   user.push(userWithId);

   res.send(`User with ${userData.firstname} & ${userId} added to database`);
   console.log(`User with ${userData.firstname} & id added to database`)
});

router.get("/:id", (req,res) => {
    const { id } = req.params;
    const userDataById = user.find((user) => user.id === id);

    
    res.send(userDataById);

});

router.delete('/:id',(req,res) => {
    const { id } = req.params;

    user = user.filter((user) => user.id !== id);
    res.send(`user with ${id} deleted!`)
});

//patch method

router.patch('/:id',(req,res) => {
    const { id } = req.params;
    const { firstname, lastname, age, job } = req.body;
    
    let userDatatoUpdate = user.find((user) => user.id === id);

    if (firstname) userDatatoUpdate.firstname = firstname;
    if(lastname)  userDatatoUpdate.lastname = lastname;
    if (age) userDatatoUpdate.age = age;

    // if(job1) userDatatoUpdate.job1 = job1;
    Object.assign(userDatatoUpdate, { job });

    // user = userDatatoUpdate;

    res.send(`user with ${id} updated!`);

})
export default router;