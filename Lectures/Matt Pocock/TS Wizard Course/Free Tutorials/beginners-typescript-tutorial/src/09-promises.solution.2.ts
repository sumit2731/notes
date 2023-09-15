interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async () => {

  /**
   * here type of data is any and any can be assigned to any other datatype.
   */
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });



  /**
   * This is typecasting syntax. here we are saying to typescript that we know that return type of data is LukeSkywalker.
   * See diffrence between these 2.see how it is different for this - 
   * 
   * const matt2: LukeSkywalker = {}; // throws error as some proeprties are missing
   * const matt = {} as LukeSkywalker; //here typescript will also adjust the return typeof function.
   */
  return data as LukeSkywalker;
};
