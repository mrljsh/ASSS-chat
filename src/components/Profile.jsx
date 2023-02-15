const Profile = ({ user }) => {
  const { name, photo, email } = user;

  return (
    <div>
      <h1>Profile</h1>
      <p>{name}</p>
      <p>{email}</p>
      <img src={photo}></img>
    </div>
  );
};

export default Profile;
