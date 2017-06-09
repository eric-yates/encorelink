import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import AutocompleteLocation from './forms/AutocompleteLocation';
import FormattedFormField from './forms/FormattedFormField';

// const lessThan = (otherField = Datetime.moment()) => (value, previousValue, allValues) => value < allValues[otherField] ? value : previousValue;
// const greaterThan = (otherField = Datetime.moment()) => (value, previousValue, allValues) => {
//   console.log(allValues);
//   return value > allValues[otherField] ? value : previousValue;
// }
const lessThan = (allValues, props) => 4 < 3 ? false : { startTime: 'bad time' };
const greaterThan = (allValues, props) => 3 > 2 ? false : console.log('greaterThan error');


const CreateEvent = ({ handleSubmit }) => (
  <div className="row">
    <div className="small-12 columns">
      <h1>Schedule Performance</h1>
      <h4 className="subheader">Fill form below to set up a performance time slot</h4>
      <form className="form-create-event" onSubmit={handleSubmit}>
        <FormattedFormField title="Name">
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="name"
            required
            autoFocus
          />
        </FormattedFormField>
        <FormattedFormField title="Start Date">
          <Field
            name="date"
            required
            component={
              props =>
                <Datetime
                  timeFormat={false}
                  onChange={(moment) => props.input.onChange(moment.format())}
                  inputProps={{ required: 'required' }}
                  defaultValue={(Datetime.moment())}
                  isValidDate={(moment) => { return moment.isAfter(Datetime.moment().subtract(1, 'day')); }}
                />
            }
          />
        </FormattedFormField>
        <FormattedFormField title="Start Time">
          <Field
            name="startTime"
            required
            validate={lessThan}
            component={
                props =>
                  <Datetime
                    dateFormat={false}
                    onChange={(moment) => props.input.onChange(moment.format())}
                    inputProps={{ required: 'required' }}
                    defaultValue={(Datetime.moment())}
                  />
            }
          />
        </FormattedFormField>
        <FormattedFormField title="End Time">
          <Field
            name="endTime"
            required
            validate={greaterThan}
            component={
              props =>
                <Datetime
                  dateFormat={false}
                  onChange={(moment) => props.input.onChange(moment.format())}
                  inputProps={{ required: 'required' }}
                  defaultValue={(Datetime.moment().add(1, 'minute'))}
                />
            }
          />
        </FormattedFormField>
        <FormattedFormField title="Location">
          <AutocompleteLocation name="location" />
        </FormattedFormField>
        <FormattedFormField title="Notes">
          <Field
            name="notes"
            component="textarea"
            placeholder="Notes"
          />
        </FormattedFormField>
        <FormattedFormField>
          <input
            className="button"
            type="submit"
            value="Schedule"
          />
        </FormattedFormField>
      </form>
    </div>
  </div>
);

CreateEvent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired
  }).isRequired,
};

export default reduxForm({
  form: 'createEventForm'
})(CreateEvent);
