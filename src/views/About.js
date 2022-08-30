import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getUserRandom, userName } from "../store";
import { userOld } from "../store";

const UserData = () => {
  const userData = useRecoilValue(getUserRandom);
  return (
    <section className="flex flex-col gap-y-2">
      <span>{userData[0].email}</span>
      <span>{userData[0].name.first}</span>
    </section>
  );
};

const About = () => {
  const setNavName = useSetRecoilState(userName);

  useEffect(() => {
    setNavName("Maulani");
  }, [setNavName]);

  const setNavOld = useSetRecoilState(userOld);

  useEffect(() => {
    setNavOld("21");
  }, [setNavOld]);

  return (
    <div
      data-testid="about"
      className="flex items-center justify-center h-screen w-full bg-green-400"
    >
      <UserData />
    </div>
  );
};

export default About;
