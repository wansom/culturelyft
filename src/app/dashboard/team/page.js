'use client'

import UsersTable from "@/app/components/dashboard/usersTable";
import MainLoader from "@/app/components/main-loader";
import { UserContext } from "@/app/services/DataContext";
import { useContext } from "react";

const TeamMembers = () => {
  const { user, loading, error,employees } = useContext(UserContext);
    
  if (loading) return <MainLoader/>;
  if (error) return <div>Error fetching user data: {error.message}</div>;
  return (
    <div>

    <UsersTable user={user} employees={employees}/>
    </div>
  );
};

export default TeamMembers;
