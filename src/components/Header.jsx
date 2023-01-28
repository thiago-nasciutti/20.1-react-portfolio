import React from "react";

function Header({ sections, setCurrentPage }) {
    return (
        <div className='header'>
            <h2 className="headerTitle">Thiago Nasciutti</h2>
            <ul className='menu'>
                {/* map() = check each item of the array"sections" and execute the function */}
                {sections.map(section => (
                    <li onClick={() => setCurrentPage(section)}>{section}</li>
                ))}
            </ul>
        </div>
    );
};

export default Header;

