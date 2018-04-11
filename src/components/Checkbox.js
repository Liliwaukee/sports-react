import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxExampleSimple extends React.Component {
  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render() {
    return (
      <div style={styles.block}>
        <Checkbox
          label="Senderismo"
          style={styles.checkbox}
        />
        <Checkbox
          label="Paracaidismo"
          style={styles.checkbox}
        />
        <Checkbox
          label="Surf"
          style={styles.checkbox}
        />
        <Checkbox
          label="Ciclismo de Montaña"
          style={styles.checkbox}
        />
        <Checkbox
          label="Rafting"
          style={styles.checkbox}
        />
        <Checkbox
          label="Parapente"
          style={styles.checkbox}
        />
        
      </div>
    );
  }
}

export default CheckboxExampleSimple;