import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export default async function checkUser() {
  const user = await currentUser();

  // Check for current logged in Clerk user
  if (!user) {
    return null;
  }

  // Check if the user already exists in the database by Clerk user ID
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // If the user exists, return the user
  if (loggedInUser) {
    return loggedInUser;
  }

  // If the user doesn't exist, check if the email is already in the database
  const existingUserByEmail = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  // If a user with the same email exists, return that user
  if (existingUserByEmail) {
    return existingUserByEmail;
  }

  // If the email doesn't exist, create a new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageURL: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
}
