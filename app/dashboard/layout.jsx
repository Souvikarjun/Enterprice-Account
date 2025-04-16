import { Navbar } from "../component/navbar/navbar"

const DashboardLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default DashboardLayout