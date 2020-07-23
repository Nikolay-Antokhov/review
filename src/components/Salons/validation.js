export default data => {
  let errors = {};

  if ( ! data.title || data.title.length === 0 ) {
    errors.title = 'Title is required.';
  } else if ( data.title.length < 5 ) {
    errors.title = 'Title is too short.';
  }

  return errors;
}
