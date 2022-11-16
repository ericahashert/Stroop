import React, { useState, useEffect } from 'react';
import Search from './Search.js'
import SubstanceList from './SubstanceList'

function DrugData () {
    const [substances, setSubstances] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        fetch("/substances").then((response) => {
          if (response.ok) {
            response.json().then((substances) => setSubstances(substances));
          }
        });
      }, []);

      const displayedSubstances = substances.filter((substance) => {
        return substance.name.toLowerCase().includes(searchTerm.toLowerCase()) || substance.short_term_effects.toLowerCase().includes(searchTerm.toLowerCase()) || substance.commercial_name.toLowerCase().includes(searchTerm.toLowerCase())
      })

      function handleClickEvent () {
        setIsActive(isActive => !isActive)
      }

    return (
        <div className="drug_data">
            <h1 className="title mt-4 ml-4">Substance Information</h1>
            <div className="search is-flex-direction-row">
            <Search searchTerm = {searchTerm} onSearchChange = {setSearchTerm}/>
            <div className= {isActive ? "dropdown is-active ml-5" : "dropdown ml-5"}>
              <div className="dropdown-trigger">
                <button onClick={handleClickEvent} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Side Effects</span>
                  <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Dropdown item
              </a>
              <a className="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" className="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" className="dropdown-item">
                Other dropdown item
              </a>
            </div>
          </div>
          </div>
          <div className= {isActive ? "dropdown is-active ml-5" : "dropdown ml-5"}>
              <div className="dropdown-trigger">
                <button onClick={handleClickEvent} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>With Alcohol</span>
                  <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                Dropdown item
              </a>
              <a className="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" className="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" className="dropdown-item">
                Other dropdown item
              </a>
            </div>
          </div>
          </div>
        </div>
            <SubstanceList substances = {displayedSubstances} />
      </div>
    )
  }
            
  export default DrugData;