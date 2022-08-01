import React from 'react'

const AppContext = React.createContext({ totalCart: 0, setTotalCart: () => {} });
export default AppContext