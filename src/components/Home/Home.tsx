import { UserClaims } from "@okta/okta-auth-js";
import { useOktaAuth } from "@okta/okta-react";
import React, { useEffect, useState } from "react";

function Home(): JSX.Element {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<UserClaims | null>(null);

  useEffect(() => {
    if (!authState?.isAuthenticated) {
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]);
  if (!userInfo) {
    return <div>Please login</div>;
  }
  return (
    <>
      {userInfo && (
      <div>
        <p>
          Hi
          {" "}
          {userInfo.name}
        </p>
      </div>
      )}
    </>
  );
}

export default Home;
