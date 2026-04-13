import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import userService from "../services/user-service";
import type { User } from "../services/user-service";
function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        console.log(res.data[0].name);

        setUsers(res.data);
        setLoader(false);
      })
      .catch((err) => {
        //console.log("Error", err);
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoader(false);
      });

    // un mount
    return () => cancel();
  }, []);

  return { users, error, loader, setUsers, setError, setLoader };
}

export default useUsers;
