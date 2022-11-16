import React from 'react';
import Substance from './Substance'

function SubstanceList ( {substances} ) {
    return (
        <ul className="mt-6">{substances.map((substance) => {
            return <Substance key = {substance.id} substance = {substance}/>
        })}</ul>
      );
}

export default SubstanceList;