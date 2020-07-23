import React from 'react';
import { shallow } from 'enzyme';
import useForm from './useForm';

const Wrapper = ({ initialValues, validation, submitHandler }) => {
  const props = useForm({ initialValues, validation, submitHandler });

  return <div {...props} />;
}

describe('Hook useForm', () => {
  it('without initial values', () => {
    const props = {
      initialValues: {},
      submitHandler: jest.fn(),
      validation: jest.fn(data => ({}))
    };

    const container = shallow(<Wrapper {...props} />);

    expect(container.prop('values').title).toBeUndefined();

    container.prop('onSubmit')({ preventDefault: jest.fn() });

    expect(props.submitHandler).toHaveBeenCalledTimes(1);
    expect(props.validation).toHaveBeenCalledTimes(1);
  });

  it('initial values', () => {
    const props = {
      initialValues: {
        title: 'MyTitle',
      }
    };

    const container = shallow(<Wrapper {...props} />);

    expect(container.prop('values').title).toBe('MyTitle');
  });

  it('validation', () => {
    const props = {
      initialValues: {},
      submitHandler: jest.fn(),
      validation: jest.fn(data => ({ title: 'MyError' }))
    };

    const container = shallow(<Wrapper {...props} />);

    container.prop('onSubmit')({ preventDefault: () => {} });

    expect(props.submitHandler).toHaveBeenCalledTimes(0);
    expect(props.validation).toHaveBeenCalledTimes(1);

    expect(container.prop('errors').title).toBe('MyError');
  });
});
