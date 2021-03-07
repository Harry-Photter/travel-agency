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
    expect(() => shallow(<TripSummary />)).toThrow;
  });
  it('should render tags in the right order', () => {
    const expectTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectTags}/>);
    expect(component.find('.tags span').at(0).text()).toEqual(expectTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectTags[2]);
  });
  it('should not render div when tags are empty or undefined', () => {
    const emptyTags = shallow(
      <TripSummary id="" image="" name="" cost="" days={0} tags={[]} />
    );
    const undefinedTags = shallow(
      <TripSummary id="" image="" name="" cost="" days={0} />
    );
    expect(emptyTags.find('.tags').length === 0).toBeTruthy();
    expect(undefinedTags.find('.tags').length === 0).toBeTruthy();
  });
});