// instead of passing the whole data to the both component , you can instead
// separate it as the following 

const medicine = {
    mainProps : {
      name : "panadol",
      price : "6",
      manufacturer : "GSK",
    },
  
    sideProps : {
      side_effects : "Hepatic necrosis with over dose",
    }
  }
  
  const Medicine = () => {
    
    return <>
      <MainProps medicine={medicine.mainProps} />
      <SideProps medicine={medicine.sideProps} />
  
    </>
  }
  
  // please note : if you do not have control over your data , like if it is come 
  // form another url , then you can pass the props one by one 
  // const Medicine = () => {
    
  //   return <>
  //    <MainProps name={medicine} price={medicine.price} manufacturer={medicine.manufacturer} />
  //    <SideProps sideEffects={medicine.side_effects} />
  
  //    </>
  // }