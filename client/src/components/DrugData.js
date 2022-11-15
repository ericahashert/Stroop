import React, { useState, useEffect } from 'react';

function DrugData () {
    const [substances, setSubstances] = useState([])

    useEffect(() => {
        fetch("/substances").then((response) => {
          if (response.ok) {
            response.json().then((substances) => setSubstances(substances));
          }
        });
      }, []);

    return (
        <div className="drug_data">
            <h1 className="title mt-4 ml-4">Substance Information</h1>
        </div>

            
    )
}

export default DrugData;