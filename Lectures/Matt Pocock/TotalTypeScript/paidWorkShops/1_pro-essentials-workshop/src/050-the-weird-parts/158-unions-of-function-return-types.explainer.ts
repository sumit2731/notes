const idToUppercase = (obj: { id: string }) => {
  return obj.id.toUpperCase();
};
const idToInt = (obj: { id: string }) => {
  return parseInt(obj.id);
};

const funcs = [idToUppercase, idToInt];

const resolveAll = (obj: { id: string }) => {
  //here type of func is union of all function types
  return funcs.map((func) => {
    //while calling func, type is para,eters are intersected togather and return types is union togather
    return func(obj);
  });
};

/**
 * When we have union of function, parameter types intersect togather and return types union
 * togather
 */
const result = resolveAll({
  id: "123",
});
