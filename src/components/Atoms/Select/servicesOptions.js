export default (list, selected) => {
  let options = [];

  list.map(el => options.push({
    text: el.title,
    value: el.serviceId.toString(),
    checked: el.serviceId === selected
  }));

  return options;
}
