import { Inngest } from "inngest";
import { connectDB } from "./db";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "orbit" });

const syncUser = inngest.createFunction (
    {id : "syncUser"},
    {event: "clerk/user.created"},
    async ({event}) => {
        await connectDB();

        const {id, email_address, first_name, last_name, image_url} = event.data;
        
        const newUser = {
            email: email_address,
            name: `${first_name || ""} ${last_name}`,
            image: image_url,
            clerkId: id
        }

        await User.create(newUser);

        //todo more thing here
    }
);

const deleteUserFromDB = inngest.createFunction(
    {id: "delete-user-from-db"},
    {event: "clerk/user.deleted"},
    async ({event}) => {
        const {id} = event.data;
        await User.deleteOne({clerkId: id});
        //todo more thing here
    }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser];