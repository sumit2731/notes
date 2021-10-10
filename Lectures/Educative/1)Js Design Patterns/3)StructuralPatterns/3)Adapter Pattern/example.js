/* 
Now, the TypeCPhone's attach function is called instead. Hence, the adapter class implements SimpleEarphones and attaches 
it to the TypeCPhone through the EarPhoneAdapter constructor.
*/

class SimpleEarphones{
    constructor(){
      this.attach = function(){
      console.log("Use Earphones with Type C phone")
    }
    }
    
  }
  
  class EarPhoneAdapter extends SimpleEarphones{
    constructor(typeCphone){
      super()
      this.attach = function(){
        typeCphone.attach()
      }
    }
  }
  
  class TypeCPhone {
    constructor(){
      this.attach = function(){
            console.log("Earphones attached to Type C phone")
      }
    } 
  }
  
  var typeCphone = new TypeCPhone()
  var adapter = new EarPhoneAdapter(typeCphone)
  adapter.attach()