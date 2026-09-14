const UserProfile =async ({params}:any) => {
    const {id} = await params;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>User Profile</h1>
        <p>User ID: {id}</p>
    </div>
  )
}

export default UserProfile