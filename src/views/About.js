import React, { Fragment, Suspense } from "react";
import { useRecoilValue, useRecoilCallback } from "recoil";
import { getUserRandom } from "../store";

const UserData = () => {
  const userData = useRecoilValue(getUserRandom);
  return (
    <section className="flex flex-col gap-y-2">
      {userData.map((user, index) => (
        <Fragment key={index}>
          <span>{user.name.first}</span>
          <span>{user.email}</span>
        </Fragment>
      ))}
    </section>
  );
};

const About = () => {
  const generateNewUser = useRecoilCallback({ snapshot }, () => {
    snapshot.getLoadble(getUserRandom);
  });

  return (
    <section
      data-testid="about"
      className="flex items-center justify-center h-screen w-full bg-green-400"
    >
      <Suspense fallback="Loading user data...">
        <UserData />
      </Suspense>
      <button
        onClick={generateNewUser}
        className="border-2 rounded-lg p-2 w-auto h-auto text-base border-blue-400"
      >
        Generate New User
      </button>
    </section>
  );
};

export default About;
