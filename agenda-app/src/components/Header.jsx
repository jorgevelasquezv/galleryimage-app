import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-dark" style={{ backgroundColor: '#2963E8' }} >
            <div className="container-fluid">
                <p className="navbar-brand" >
                    <img
                        src="/docs/5.1/assets/brand/bootstrap-logo.svg"
                        alt=""
                        width={30}
                        height={24}
                        className="d-inline-block align-text-top"
                    />
                    {' '} Agenda Con React Reducer
                </p>
            </div>
        </nav>
    );
}

export default Header