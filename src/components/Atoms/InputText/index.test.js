import React from 'react';
import { mount } from 'enzyme';

import InputText from './index';

describe('InputText render', () => {
  it('render', () => {
    const props = {
      name: 'title',
      label: 'Title',
      value: 'MyTitle',
      onChange: () => {}
    };

    const container = mount(<InputText {...props} />);

    expect(container.find('label').length).toBe(1);
    expect(container.find('input').length).toBe(1);
    expect(container.find('input').at(0).prop('value')).toBe('MyTitle');
    expect(container.exists('.invalid-feedback')).toBe(false);
  });

  it('onChange', () => {
    const props = {
      name: 'title',
      label: 'Title',
      value: ''
    };

    const container = mount(<InputText {...props} onChange={e => props.value = e.target.value} />);

    container.find('input').at(0).simulate('change', { target: { value: 'MyTitle' } });

    expect(container.find('label').length).toBe(1);
    expect(container.find('input').length).toBe(1);
    expect(container.exists('.invalid-feedback')).toBe(false);
    expect(props.value).toBe('MyTitle');
  });

  it('error', () => {
    const props = {
      name: 'title',
      label: 'Title',
      value: '',
      onChange: () => {},
      error: 'Oops'
    };

    const container = mount(<InputText {...props} />);

    expect(container.find('label').length).toBe(1);
    expect(container.find('input').length).toBe(1);
    expect(container.find('.invalid-feedback').length).toBe(1);
    expect(container.find('.invalid-feedback').text()).toBe('Oops');
  });
});
