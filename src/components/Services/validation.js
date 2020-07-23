export default data => {
  let errors = {};

  if ( ! data.title ) {
    errors.title = 'Title is required';
  }

  return errors;
}
