import React from "react";

import { Input } from "../components/Input/Input";
import { Slideshow } from "../components/Slideshow/Slideshow";
import { Info, PageTitle, PageWrapper } from "./styles";

import { User } from "../store/types";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setUsers, removeUsers } from "../store/userSlice";
  
export const Home = () => {
  const [count, setCount] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setCount(value);
  }

  const abortControllerRef = React.useRef<AbortController | null>(null);

  React.useEffect(() => {
      const fetchUsers = () => {
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();
        setLoading(true);
        fetch(`https://randomuser.me/api/?results=${count}&inc=name,picture&noinfo`, { signal: abortControllerRef.current.signal })
          .then(response => response.json())
          .then(data => {
            count === "" ? dispatch(removeUsers()) : dispatch(setUsers(data.results as User[]));
            setLoading(false);
          })
          .catch(error => {
            if(error.name === "AbortError") return;
            setError(error);
            setLoading(false);
          });
      }
      fetchUsers();
  }, [count, dispatch]);

  return (
    <PageWrapper>
      <PageTitle>Random Users Slideshow</PageTitle>
      <Input placeholder="Enter no. of users you want to fetch..." value={count} onChange={handleChange} />
      {loading ? <Info>Loading...</Info> : error ? <Info>{error}</Info> : users.length > 0 ? <Slideshow users={users} /> : null}
    </PageWrapper>
  );
};
