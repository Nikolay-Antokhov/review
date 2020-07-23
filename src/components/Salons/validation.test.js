import validation from './validation';

it('Salons form validation', () => {
  let data = {};
  let errors = validation(data);

  expect(errors.title).toBeTruthy();

  data = { title: 'Inc' };
  errors = validation(data);

  expect(errors.title).toBeTruthy();

  data = { title: 'Correct' };
  errors = validation(data);

  expect(errors.title).toBeUndefined();
});
