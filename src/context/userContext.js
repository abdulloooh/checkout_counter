import React from "react";

const UserContext = React.createContext();
UserContext.displayName = "UserContext";

export default UserContext;

/**
 * More read:
 * Particularly on multiple contexts: https://stackoverflow.com/questions/53988193/how-to-get-multiple-static-contexts-in-new-context-api-in-react-v16-6
 * React Doc: https://reactjs.org/docs/context.html
 */
