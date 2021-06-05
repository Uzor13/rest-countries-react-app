import React from 'react';
import styled from 'styled-components'

const Grid = styled.div `
  display: grid;
  grid-template-rows: 70px 150px 1fr;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  height: 100%;
`

const GridContainer = ({children}) => {
    return (
        <Grid>
            {children}
        </Grid>
    );
};

export default GridContainer;
