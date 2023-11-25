export default function LoginHistoryComponent() {
    const loginTime = new Date();
  
    const logoutTime = new Date(loginTime);
    logoutTime.setMinutes(logoutTime.getMinutes() + 30);
  
    const loginhistories = [
      {
        lhid: 1,
        loginTime: loginTime,
        logoutTime: logoutTime,
        durationInMillis: 123456,
        duration: "1m:30s:110ms",
      },
      {
        lhid: 2,
        loginTime: loginTime,
        logoutTime: logoutTime,
        durationInMillis: 123456,
        duration: "1m:30s:110ms",
      },
      {
        lhid: 3,
        loginTime: loginTime,
        logoutTime: logoutTime,
        durationInMillis: 123456,
        duration: "1m:30s:110ms",
      },
    ];
    return (
      <div className="container">
        <hr />
        <h1 className="mt-3">Login Histories</h1>
        <hr />
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>LhId</td>
                <td>Login Time</td>
                <td>Logout Time</td>
                <td>Duration in MS</td>
                <td>Duration</td>
              </tr>
            </thead>
            <tbody>
              {loginhistories.map((loginhistory) => (
                <tr key={loginhistory.lhid}>
                  <td>{loginhistory.lhid}</td>
                  <td>{loginhistory.loginTime.toString()}</td>
                  <td>{loginhistory.logoutTime.toString()}</td>
                  <td>{loginhistory.durationInMillis}</td>
                  <td>{loginhistory.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }