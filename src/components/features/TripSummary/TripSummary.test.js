import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const linkId = 'abc';
    const component = shallow(
      <TripSummary id={linkId} image="" name="" cost="" days={0} tags={[]} />
    );
    const renderedId = component.find('Link').prop('to');
    expect(renderedId).toEqual(`/trip/${linkId}`);
  });
  it('should render correct src and alt for image', () => {
    const expectedSrc = 'example.jpg';
    const expectedAlt = 'Lorem ipsum';
    const component = shallow(
      <TripSummary id="" image={expectedSrc} name={expectedAlt} cost="" days={0} tags={[]} />
    );
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('should render correct name, cost and days', () => {
    const expectedName = 'Dolor sit';
    const expectedCost = 'amet';
    const expectedDays = 12;
    
    const component = shallow(
      <TripSummary id="" image="" name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />
    );
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').first().text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').last().text()).toEqual(`from ${expectedCost}`);
  }); 
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});