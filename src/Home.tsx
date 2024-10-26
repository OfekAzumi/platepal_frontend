import React from 'react'

const Home = () => {

    return (
        <div>
            <div className="container mt-4">
                <div className="jumbotron border" style={{
                    backgroundColor: '#EEE7DA', fontFamily: 'Poppins, sans-serif'
                }}>
                    <h1>Welcome to My Website</h1>
                    <p>Explore our wide range of actions and enjoy a great webbing experience.<br />
                        Now, you can only login <span style={{ opacity: 0.5 }}>or</span> logout.</p>
                </div>
            </div>
        </div>
    )
}

export default Home