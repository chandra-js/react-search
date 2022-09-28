import React ,{createContext} from 'react';

const dataContext = createContext()
export default dataContext

export const DataProvider = ({ children }) => {
  const [data, setData] = React.useState({})

  return (
    <dataContext.Provider value={[data, setData]}>
      {children}
    </dataContext.Provider>
  )
}
