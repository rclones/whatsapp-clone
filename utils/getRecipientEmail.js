const getRecipientEmail = (users, userLoggedIn) => {
  let email = users?.filter(
    (userToFilter) => userToFilter !== userLoggedIn?.email
  )[0];
  return email;
};

export default getRecipientEmail;
