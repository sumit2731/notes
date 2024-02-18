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
   * implicit data type of data is any, so we can give it any data type.
   * here we assigned it required data type. ts identifies it and makes the returnn type of function as
   * Promise<givenDataType>, because it know that await function always returns promise.
   */
  //any can be assigned to any type
  const data: LukeSkywalker = await fetch(
    "https://swapi.dev/api/people/1"
  ).then((res) => {
    return res.json();
  });

  return data;
};
