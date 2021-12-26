import React from 'react'
import Nav from './Nav'

export default function About() {
    return (
        <>
        <Nav branding='Text Analyzer'/>
        <div className='container'>
            <h4 className='text-center'>About us</h4>
            <p>Hello This is App</p>  
            <button className="btn btn-sm btn-secondary">Enable Dark Mode</button>          
        </div>
        </>
    )
}
