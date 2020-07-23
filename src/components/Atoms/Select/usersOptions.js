export default (list, selected) => {
  let options = [];

  list.map(el => options.push({
    text: el.firstName +' '+ el.lastName,
    value: el.userId.toString(),
    icon: el.avatar,
    checked: el.userId === selected
  }));

  return options;
}
