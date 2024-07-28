function ModifyingProps() {
  const user = { firstName: "Bob", lastName: "Jones" };

  return (
    <div className="card green">
      <UserCard user={user} meraNaam="X" />
      <button onClick={() => alert(`Hello, ${user.firstName}!`)}>Greet</button>
    </div>
  );
}

function UserCard(props) {
  let firstName = props.user.firstName;
  let lastName = props.user.lastName;

  return (
    <div>
      <h2>
        {firstName.toLowerCase()} {lastName.toLowerCase()}
      </h2>
    </div>
  );
}

export default ModifyingProps;
