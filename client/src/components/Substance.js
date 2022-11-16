import React from 'react';

function Substance ( {substance} ) {

    if (substance.name !== 'Alcohol') {
    return (
        <div className="card ml-4">
            <div className="card-header has-background-grey-lighter">
                <h4 className="is-size-5 ml-3">{substance.name}</h4>
            </div>
            <div className="card-content">
                <i>{substance.description}</i>
                <div className="card_text pt-5 pb-5">
                    <p><b>Commercial name:</b> {substance.commercial_name}</p>
                    <p className="pt-1"><b>Forms:</b> {substance.types}</p>
                    <p className="pt-1"><b>Ways taken:</b> {substance.ways_taken}</p>
                    <p className="pt-1"><b>Short-term effects:</b> {substance.short_term_effects}</p>
                    <p className="pt-1"><b>Long-term effects:</b> {substance.long_term_effects}</p>
                    <p className="pt-1"><b>Health issues:</b> {substance.health_issues}</p>
                    <p className="pt-1"><b>When combined with alcohol:</b> {substance.combined_with_alcohol}</p>
                </div>
            </div>
        </div>
    )
}}

export default Substance;