const navList = [
  {
    link: "/",
    anchor: "PPD Property",
    icon: "house"
  },
  {
    link: "/ppd-assistance",
    anchor: "PPD Assistance",
    icon: "notifications"
  },
  {
    link: "/received-interest",
    anchor: "Received Interest",
    icon: "arrow-down"
  },
  {
    link: "/sent-interest",
    anchor: "Sent Interest",
    icon: "arrow-up"
  },
  {
    link: "/property-views",
    anchor: "Property Views",
    icon: "eye2"
  },
  {
    link: "/tariff-plan",
    anchor: "Tariff Plan",
    icon: "label"
  },
]

const useSidebarmenu = () => {

    return {
      navList,
    }
}

export default useSidebarmenu;
