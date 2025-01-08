import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

//this function is used to check if the user is already in the database and if not it will create a new user in the database . we are using clerk to get the user data and prisma to interact with the database.bcz if we don do this then alluser data will be in clerk only and we will not be able to access it from the database.
export const checkUser = async () => {
  //currentUser() is a function from clerk that returns the current user object.
  const user = await currentUser();


  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    //if the user is not in the database then we will create a new user in the database. 
    //we are creating a new user in the database by using the clerkUserId, name, imageUrl, and email of the user.
    //name is the full name of the user.
    const name = `${user.firstName} ${user.lastName}`;

    //we are creating a new user in the database by using the clerkUserId, name, imageUrl, and email of the user.
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        //user can have multiple email addresses so we are using the first email address as the email of the user.
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
};