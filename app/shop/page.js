'use client'
import ShopSite from "../components/ShopSite"
import Navigation from "../components/Navigation"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"


export default function Shop(){

          const clientID= "Ad-vZvG5sIHqdqLXda_qjdubzISxbpsyhWbKq8xLtfhBEWNy2Jn75ds0OsXdjTU_yPrN7gCj290PePrh"
        

    return (
        <PayPalScriptProvider options={{
            "clientId": clientID
          }}>
        <div className="bg-[#181e29] min-h-[100vh]">
            <Navigation></Navigation>
            <ShopSite />
        </div>
        </PayPalScriptProvider>
    )
}