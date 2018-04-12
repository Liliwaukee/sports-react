import React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';


const styles = theme => ({
  FormControlLabel: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 40,
  },
});

class CheckboxesGroup extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Actividades de interés</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad"
              />
            }
            label="Senderismo"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.jason}
                onChange={this.handleChange('jason')}
                value="jason"
              />
            }
            label="Paracaidismo"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.antoine}
                onChange={this.handleChange('antoine')}
                value="antoine"
              />
            }
            label="Surf"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.ciclismo}
                onChange={this.handleChange('ciclismo')}
                value="Ciclismo de montaña"
              />
            }
            label="Ciclismo de montaña"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.rafting}
                onChange={this.handleChange('rafting')}
                value="Rafting"
              />
            }
            label="Rafting"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.parapente}
                onChange={this.handleChange('parapente')}
                value="Parapente"
              />
            }
            label="Parapente"
          />
        </FormGroup>
        <FormHelperText>Puedes elegir más de 1 opción</FormHelperText>
      </FormControl>
    );
  }
}

export default CheckboxesGroup;